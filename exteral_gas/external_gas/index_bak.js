const { Requester, Validator } = require('@chainlink/external-adapter')

// Define custom error scenarios for the API.
// Return true for the adapter to retry.
const customError = (data) => {
  if (data.Response === 'Error') return true
  return false
}

// Define custom parameters to be used by the adapter.
// Extra parameters can be stated in the extra object,
// with a Boolean value indicating whether or not they
// should be required.
  const customParams = {
  network: ['network'],
  endpoint: true
}

const createRequest = (input, callback) => {
  // The Validator helps you validate the Chainlink request data
  

  const validator = new Validator(callback, input)
  const jobRunID = validator.validated.id
  const endpoint = validator.validated.data.endpoint || '/${network}/gas'
  const apikey = '22379171a3d349dc880e39c1013d6f6e';
  const url = `https://api.owlracle.info/v4/${endpoint}`
  const network =  validator.validated.data.city

//https://api.owlracle.info/v4/opt/gas?apikey=22379171a3d349dc880e39c1013d6f6e

  const params = {
    network,
    apikey
  }

  // This is where you would add method and headers
  // you can add method like GET or POST and add it to the config
  // The default is GET requests
  // method = 'get' 
  // headers = 'headers.....'
  const config = {
    url,
    params
  }

  // The Requester allows API calls be retry in case of timeout
  // or connection failure
Requester.request(config, customError)
    .then(response => {
      // Wyszukaj wiersz, gdzie "acceptance" jest większe niż 0.3 i mniejsze niż 0.9 w liście "speeds"
      const selectedSpeed = response.data.speeds.find(speed => speed.acceptance > 0.4 && speed.acceptance < 0.9);

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


// This is a wrapper to allow the function to work with
// AWS Lambda
exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

// This is a wrapper to allow the function to work with
// newer AWS Lambda implementations
exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

// This allows the function to be exported for testing
// or for running in express
module.exports.createRequest = createRequest
