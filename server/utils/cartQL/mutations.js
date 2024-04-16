module.exports = {
  addCartItem(a) {
    return `
      mutation {
        addItem(
          input: {
            cartId: "${a.user.cart}"
            id: "${a.food._id}"
            name: "${a.food.name}"
            price: ${a.food.price}
          }
        ) {
          id
          isEmpty
          totalItems
          items {
            id
            name
            quantity
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
  },
  removeCartItem(a) {
    return `
      mutation {
        removeItem(
          input: {
            cartId: "${a.user.cart}"
            id: "${a.food._id}"
          }
        ) {
          id
          isEmpty
          totalItems
          items {
            id
            name
            quantity
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
  },
  updateCartItem(a) {
    return `
      mutation {
        updateItem(
          input: {
            cartId: "${a.user.cart}"
            id: "${a.food._id}"
            quantity: ${a.quantity}
          }
        ) {
          id
          isEmpty
          totalItems
          items {
            id
            name
            quantity
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
  },
  cartCheckout(a) {
    return `
  mutation {
    checkout(
      input: {
        cartId: "${a.user.cart}"
        email: "bob@bob.com"
        shipping: {
          name: "Bob"
          line1: "123 Anywhere Lane"
          city: "Brooklyn"
          postalCode: "95255"
          country: "USA"
        }
        }
    ) {
      id
      items {
        id
        name
        quantity
        lineTotal {
          amount
          formatted
        }
      }
      grandTotal {
        amount
        formatted
      }
  }
}
  `;
  },
};