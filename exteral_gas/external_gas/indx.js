const { Requester, Validator } = require('@chainlink/external-adapter');

const customError = (data) => {
  if (data.Response === 'Error') return true;
  return true;
};

const customParams = {
  network: ['network'],
  endpoint: true
};

const createRequest = (input, callback) => {
  console.log('Dane wejściowe:', input);

  const validator = new Validator(callback, input);
  const jobRunID = validator.validated.id;
  const network = validator.validated.data.network || 'opt';
  const endpoint = `/${network}/gas`;
  const apikey = '22379171a3d349dc880e39c1013d6f6e';
  const url = `https://api.owlracle.info/v4${endpoint}?apikey=${apikey}`;

  console.log('URL wysyłany:', url);

  const config = {
    url,
  };

  Requester.request(config, customError)
    .then((response) => {
      if (response.error) {
        callback(500, Requester.errored(jobRunID, response.error));
        return;
      }

      const speeds = response.message.speeds;
      let estimatedFee = null;

      if (speeds && speeds.length > 1) {
        estimatedFee = speeds[1].estimatedFee;
      }

      if (estimatedFee !== null) {
        const responseData = { estimatedFee };
        callback(response.status, Requester.success(jobRunID, responseData));
      } else {
        callback(500, Requester.errored(jobRunID, 'Could not retrieve estimatedFee'));
      }
    })
    .catch((error) => {
      callback(500, Requester.errored(jobRunID, error));
    });
};

exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data);
  });
};

exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false,
    });
  });
};
