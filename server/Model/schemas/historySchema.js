const { Schema } = require('mongoose');
const moneySchema = require('./moneySchema');

const historySchema = new Schema(
  {
    date: {
      type: Date,
      require: true,
      default: Date.now,
      // get: (v) => v.toLocaleString(),
    },
    stripeId: String,
    cart: {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      totalItems: Number,
      totalUniqueItems: Number,
      grandTotal : moneySchema,
      payment_amount: Number,
      items: [{
        id: {
          type: Schema.Types.ObjectId,
          ref: 'food',
        },
        name: String,
        images: [String],
        unitTotal: moneySchema,
        lineTotal: moneySchema,
        quantity: Number,
        metadata: {
          inventory: Number
        }
      }]
    },
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    toObject: {
      getters: true,
    },
    _id: false
  }
);

module.exports = historySchema;
