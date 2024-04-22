const connection = require("../../config/connection");
const foodData = require("../../seeds/food.json")
const userData = require("../../seeds/user.json")
const { User, Food } = require('../../Model');

async function reSeed(req, res) {
  try {
    const collectionExists = await connection.db.listCollections().toArray();

    if (collectionExists.length) {
      // await connection.dropCollection("foods");
      // await connection.dropCollection("users");
      await Promise.allSettled((await connection.db.listCollections().toArray()).map((e) => e.name).map((e) => connection.dropCollection(e)));
    }

    await Food.insertMany(foodData);
    await User.create(userData);

    console.log('Food & User Data seeded!');
    res.status(200).json({
      msg: "re-seeded"
    })
  } catch (err) {
    console.log("Failed: ", err);
    res.status(500).json({msg: "failed to seed"})
  }
};

async function createOneUser(req, res) {
  const testUser =
    {
      "username": "Foo",
      "email": "foo@email.com",
      "password": "password12345",
      "address": {
        "street": "345 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": 94105
      },
      "isSupplier": false,
      "isClient": true,
      "business_name": "",
      "first_name": "Foo",
      "last_name": "Bar",
      "household_size": 7
    };

  try {
    const user = await new User(testUser).save();

    if (!user) {
      throw new Error("error making new user");
    }

    res.status(200).json({
      msg: "created",
      data: user
    })

  } catch (err) {
    console.error(err);
    res.status(500).json({msg: err})
  }
};

async function deleteOneUser(req, res) {
  try {
    const result = await User.findOneAndDelete({username: "Foo"});

    if (!result) {
      throw new Error('no user found');
    }

    res.status(200).json({
      msg: 'deleted',
      data: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({msg: err})
  }
}

module.exports = {
  createOneUser,
  deleteOneUser,
  reSeed,
}
