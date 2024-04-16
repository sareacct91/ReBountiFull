const CartQueries = require("./queries");
const CartMutation = require("./mutations");

/**
 * @param {Function} fnQuery function to return the gql string to complete the cartQL operation
 * @param {Object} variables Data for querying cartQL
 */
async function queryCartQL(fnQuery, variables) {
  // console.log(fnQuery(variables));
  try {
    const response = await fetch('https://api.cartql.com', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        query: fnQuery(variables),
      }),
    });

    if (!response.ok) {
      throw new Error('bad fetch');
    }

    const data = await response.json();

    if (data.errors) {
      console.error('graphQL error', data.errors);
      throw new Error('graphQL error');
    }

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const args = { id: "565jkcjsd833271" };
const argsAdd = { 
  user: { cart: args.id},
  food: {
    _id: "12948612847",
    name: "mango",
    price: 450,
  }
};

;(async function () {
  const cart = await queryCartQL(CartQueries.queryCart, args); 
  console.log(require("util").inspect(cart, { depth: null }));
  console.log("\n")
  const updatedCart = await queryCartQL(CartMutation.addItem, argsAdd);
  console.log(require("util").inspect(updatedCart, { depth: null }));
})()

module.exports = {
  CartQueries,
  CartMutation,
  queryCartQL,
}
