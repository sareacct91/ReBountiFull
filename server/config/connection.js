require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    process.env.MONGODB_LOCAL ||
    "mongodb://127.0.0.1:27017/ReBountiFull"
);

module.exports = mongoose.connection;
