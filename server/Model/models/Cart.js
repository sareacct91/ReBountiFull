const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      unique: true,
    },
    payment_amount: Number,
    items: [{
      id: {
        type: Schema.Types.ObjectId,
        ref: 'food',
      },
      quantity: {
        type: Number,
        default: 1,
        require: true,
      },
    }],
  },
  {
    virtuals: {
      totalItems: {
        get() {
          let totalItems = 0;
          for (const item of this.items) {
            totalItems += item.quantity;
          }
          return totalItems;
        },
      },
      totalUniqueItems: {
        get() {
          return this.items.length;
        },
      },
    },
    toJSON: {
      virtuals: true,
      getters: true,
    },
    versionKey: false,
  }
);

const Cart = model('cart', cartSchema);

module.exports = Cart;

  //   id: ID!
  //   totalItems: Int!
  //   totalUniqueItems: Int!
  //   payment_amount: Int
  //   items: [CartItem]!
  //   grandTotal: Money!
