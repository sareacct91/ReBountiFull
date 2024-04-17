const bcrypt = require("bcrypt");
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

    const p1 = userData.map(async user => {
      user.password = await bcrypt.hash(user.password, 10);
      return user;
    });
    const hashedUsers = await Promise.all(p1);
    
    await Food.insertMany(foodData);
    await User.insertMany(hashedUsers);

    console.log('Food & User Data seeded!');
  } catch (err) {
    console.log("Failed: ", err);
  }

  process.exit(0);
});
