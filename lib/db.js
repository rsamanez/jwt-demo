// Require AWS SDK and instantiate DocumentClient
// const AWS = require("aws-sdk");
const bcrypt = require("bcryptjs");
const {Users} = require('../services/database/users');

const createDbUser = async props => {
  const passwordHash = await bcrypt.hash(props.password, 8); // hash the pass
  delete props.password; // don't save it in clear text
  const newUser = {
    ...props,
    pk: props.email,
    passwordHash,
    createdAt: new Date()
  };
  try {
    const result  = await Users.create(newUser);
    return result;
  } catch (err) {
    return err;
  }
};

const getUserByEmail = async email => {
  return await Users.findByEmail(email);
};

module.exports = {
  createDbUser,
  getUserByEmail
};