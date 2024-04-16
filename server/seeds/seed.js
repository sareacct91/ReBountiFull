const connection = require('../config/connection');
const { User, Food } = require('../model');

const userData = require('../seeds/user.json');
const foodData = require('../seeds/food.json');

connection.once('open', async () => {
  try {
    const collectionExists = await connection.db.listCollections().toArray();
    
    if (collectionExists.length) {    
      // await connection.dropCollection("foods");
      // await connection.dropCollection("users");
      await Promise.allSettled((await connection.db.listCollections().toArray()).map((e) => e.name).map((e) => connection.dropCollection(e)));
    }

    await Food.insertMany(foodData);
    await User.insertMany(userData);

    console.log('Food & User Data seeded!');
  } catch (err) {
    console.log("Failed");
  }

  process.exit(0);
});
