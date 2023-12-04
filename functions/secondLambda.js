'use strict';

module.exports.handler = async (event) => {
    // TODO implement
    //let pippo =  JSON.parse(event);
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  