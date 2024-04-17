const { CartQueries, CartMutation, queryCartQL} = require('./index');

const args = { id: "565jsskcjsd833271" };

const argsAddMango = { 
  user: { _id: args.id},
  food: {
    _id: "12948612847",
    name: "mango",
    price: 450,
  },
  quantity: 10,
};

const argsAddTaco = { 
  user: { _id: args.id},
  food: {
    _id: "12948612849",
    name: "taco",
    price: 450,
  },
  quantity: 5,
};

const argsUpdateMango = { 
  id: args.id,
  foodId: '12948612847',
  quantity: 7,
};

;(async function () {
  console.log("\nqueryCart")
  const cart = await queryCartQL(CartQueries.queryCart, args); 
  console.log(require("util").inspect(cart, { depth: null }));

  console.log("\naddCartItem mango 10")
  let updatedCart = await queryCartQL(CartMutation.addCartItem, argsAddMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\naddCartItem taco 5")
  updatedCart = await queryCartQL(CartMutation.addCartItem, argsAddTaco);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\nupdateCartItem mango 7")
  updatedCart = await queryCartQL(CartMutation.updateCartItem, argsUpdateMango);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\nremoveCartItem taco")
  updatedCart = await queryCartQL(CartMutation.removeCartItem, argsAddTaco);
  console.log(require("util").inspect(updatedCart, { depth: null }));

  console.log("\ncartCheckout")
  updatedCart = await queryCartQL(CartMutation.cartCheckout, args);
  console.log(require("util").inspect(updatedCart, { depth: null }));
})()
