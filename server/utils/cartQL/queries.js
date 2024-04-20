module.exports = {
  queryCart({ id }) {
    return `
      query {
        cart(id: "${id}" ) {
          id
          isEmpty
          totalItems
          totalUniqueItems
          abandoned
          items {
            id
            name
            quantity
            metadata
            unitTotal {
              amount
              formatted
          }
            lineTotal {
              amount
              formatted
          }
            images
          }
          grandTotal {
            amount
            formatted
          }
        }
      }
    `;
  } 
}
