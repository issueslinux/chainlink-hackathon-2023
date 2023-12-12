const { Requester, Validator } = require('@chainlink/external-adapter');

const customError = (data) => {
  if (data.Response === 'Error') return true;
  return false;
};

const customParams = {
  network: ['network','symbol','gas'],
  endpoint: false
};

const createRequest = (input, callback) => {

  const requestedNetwork = input.data.network 
  const validator = new Validator(callback, input)
  const jobRunID = validator.validated.id
  const endpoint = validator.validated.data.endpoint || '/${network}/gas'
  const apikey = '22379171a3d349dc880e39c1013d6f6e';
  const url = `https://api.owlracle.info/v4/${requestedNetwork}/gas?apikey=APIKEY`;

  console.log('URL wysyłany:', url);

  const params = {
    requestedNetwork
  }

  const config = {
    url,
    params
  };

  Requester.request(config, customError)
    .then(response => {
      // Wyszukaj wiersz, gdzie "acceptance" jest większe niż 0.3 i mniejsze niż 0.9 w liście "speeds"
      const selectedSpeed = response.data;

      if (selectedSpeed) {
        // Jeśli znaleziono wiersz, zapisz go do response.data
        response.data = selectedSpeed;
      } else {
        // Jeśli nie znaleziono wiersza, ustaw wynik na pusty obiekt w response.data
        response.data = {};
      }

      // Usuń pole "result" z odpowiedzi
      delete response.result;
      callback(response.status, Requester.success(jobRunID, response))
      
    })
    .catch(error => {
      callback(500, Requester.errored(jobRunID, error))
    })

}

exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data);
  });
};

exports.handlerv2 = (event, context, callback) => {
  const body = JSON.parse(event.body);
  createRequest(body, (statusCode, data) => {
    callback(null, {
      statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false,
    });
  });
};

module.exports.createRequest = createRequest;
