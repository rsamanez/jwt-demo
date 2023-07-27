const { database } = require('./models');
const users = database.collection("users");

const Users = {
  findByEmail: async (email) => {
    const query = { pk: email };
    const options = {
      // sort matched documents in descending order by rating
      sort: {},
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 1, passwordHash: 1, email: 1 },
    };
    return await users.findOne(query, options);
  },
  create: async (user) =>{
    return await users.insertOne(user);
  }
}

exports.Users = Users;
