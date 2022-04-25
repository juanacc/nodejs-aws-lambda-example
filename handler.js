'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
// endpoint https://ncvexu0yf8.execute-api.us-east-1.amazonaws.com/dev/hello-world
/**
 * al ejecutar serverless config credentials --provider aws --key <your_access_key_id> --secret <your_access_key_secret> las credenciales se guardan en ~/.aws/credentials
 */