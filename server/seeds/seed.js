const connection = require('../config/connection');
const { User, Food } = require('../model');
// const resetDB = require('./resetDB');

const userData = require('../seeds/user.json');
const foodData = require('../seeds/food.json');

connection.once('open', async () => {
  await connection.db.listCollections().toArray().map((e) => e.name).forEach((e) => connection.dropCollection(e));

  await Food.insertMany(foodData);
  await User.insertMany(userData);

  console.log('Food & User Data seeded!');
  process.exit(0);
});