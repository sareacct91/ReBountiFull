import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      username
      email
      address
      isSupplier
      isClient
      business_name
      household_size
      cart
      history
    }
  }
`;

export const QUERY_CART = gql`
  query getCart($getCartId: ID) {
    cart(getCartId:$getCartId)  {
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
    }
  }
`;


