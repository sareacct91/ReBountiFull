import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
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

// query to get all of the food in the food collection 
export const QUERY_ALL_FOOD = gql`
  {
    getAllFood {
      _id
      name
      price
      inventory
      category
      image
      vegan
      vegetarian
      gluten_free
      dairy_free
      nut_free
    }
  }
`;
export const QUERY_CART = gql`
  query getCart {
    cart {
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


