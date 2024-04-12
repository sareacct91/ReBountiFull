const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const addressSchema = require('./AddressSchema');
const historySchema = require('./HistorySchema');
const foodItemSchema = require('./FoodItemSchema');


const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: /^([a-z0-9\._-]+)@([a-z0-9\.-]+)\.([a-z]{2,6})$/i,
    },
    password: {
      type: String,
      require: true,
    },
    address: addressSchema,
    isSupplier: Boolean,
    isClient: Boolean,
    business_name: {
      type: String, 
      required: function() { return this.isSupplier; } 
    },
    first_name: {
      type: String, 
      required: function() { return this.isClient; } 
    },
    last_name: {
      type: String, 
      required: function() { return this.isClient; } 
    },
    household_size: { 
      type: Number, 
      required: function() { return this.isClient; } 
    },
    cart: { 
      type: [foodItemSchema], 
    },
    history: { 
      type: [historySchema], 
    },
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  },
);

userSchema.virtual('fullname').get(function() {
  return !this.isSupplier ? `${this.first_name} ${this.last_name}` : null;
});

userSchema.methods.isCorrectPw = async function(pw) {
  return await bcrypt.compare(pw, this.password);
};

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = model('User', userSchema);

module.exports = User;
