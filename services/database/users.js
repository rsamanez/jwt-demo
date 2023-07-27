function dbSelector() {
  switch(process.env.DATABASE_TYPE){
    case 'mongo':
      const { Users } = require('./mongoDB/users');
      return Users;
    case 'dynamo':
      return null;
  }
}
exports.Users = dbSelector();
