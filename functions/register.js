const { createDbUser } = require("../lib/db");

module.exports.handler = async function registerUser(event) {
  const body = JSON.parse(event.body);

  return createDbUser(body)
    .then(user => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(user)
    }))
    .catch(err => {
      console.log({ err });

      return {
        statusCode: err.statusCode || 500,
        headers: { "Content-Type": "text/plain" },
        body: { stack: err.stack, message: err.message }
      };
    });
};