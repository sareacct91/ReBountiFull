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
      console.log(await response.json())
      throw new Error('bad fetch');
    }

    const data = await response.json();

    if (data.errors) {
      console.error('graphQL error', data.errors);
      throw new Error('graphQL error');
    }

    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}


module.exports = {
  CartQueries,
  CartMutation,
  queryCartQL,
}
