const { Requester, Validator } = require('@chainlink/external-adapter');

const customError = (data) => {
  if (data.Response === 'Error') return true;
  return false;
};

const customParams = {
  coin: ['coin','symbol'],
  endpoint: false
};

const createRequest = (input, callback) => {
  console.log('data: ', input);
  console.log('coin: ', input.data.coin);
  const requestedCoin = input.data.coin 
  const validator = new Validator(callback, input)
  const jobRunID = validator.validated.id
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${requestedCoin}&tsyms=USD&api_key={6fb2c0d18e5b3f08cb696076d78aa090437d0680ae9d34eed244af074080ae31}`

  console.log('URL wysyłany:', url);

  const params = {
    requestedCoin
  }

  const config = {
    url,
    params
  };

  Requester.request(config, customError)
    .then(response => {
      // Wyszukaj wiersz, gdzie "acceptance" jest większe niż 0.3 i mniejsze niż 0.9 w liście "speeds"
      const selectedCoin = response.data;

      if (selectedCoin) {
        // Jeśli znaleziono wiersz, zapisz go do response.data
        response.data = selectedCoin;
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
