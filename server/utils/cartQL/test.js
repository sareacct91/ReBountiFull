const { CartQueries, CartMutation, queryCartQL} = require('./index');

const args = { id: "565jkcjsd833271" };

const argsAddMango = { 
  user: { cart: args.id},
  food: {
    _id: "12948612847",
    name: "mango",
    price: 450,
  },
  quantity: 10,
};

const argsAddTaco = { 
  user: { cart: args.id},
  food: {
    _id: "12948612849",
    name: "taco",
    price: 450,
  },
  quantity: 5,
};


;(async function () {
  console.log("\nqueryCart")
  const cart = await queryCartQL(CartQueries.queryCart, args); 
  console.log(require("util").inspect(cart, { depth: null }));

  console.log("\naddCartItem mango")
  let updatedCart = await queryCartQL(CartMutation.addCartItem, argsAddMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\naddCartItem taco")
  updatedCart = await queryCartQL(CartMutation.addCartItem, argsAddTaco);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\nupdateCartItem mango")
  updatedCart = await queryCartQL(CartMutation.updateCartItem, argsAddMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\nremoveCartItem mango")
  updatedCart = await queryCartQL(CartMutation.removeCartItem, argsAddMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\ncartCheckout")
  updatedCart = await queryCartQL(CartMutation.cartCheckout, argsAddMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));
})()
