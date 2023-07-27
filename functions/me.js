const { getUserByEmail } = require("../lib/db");
const { getUserFromToken } = require("../lib/utils");

module.exports.handler = async function(event) {
  const userObj = await getUserFromToken(event.headers.Authorization);

  
   const dbUser = await getUserByEmail(userObj.email);
  //const dbUser = {dato:"hola Mundo"}
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(dbUser)
  };
};