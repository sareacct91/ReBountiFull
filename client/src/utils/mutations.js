import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userInput: UserInput!) {
    addUser(userInput: $userInput) {
      token
      user {
        _id
        username
        email
        isSupplier
        isClient
        business_name
        first_name
        last_name
        household_size
      }
    }
  }
`;

// adding food item to the user's cart
export const ADD_CART_ITEM = gql`
  mutation addCartItem($food: FoodInput!) {
    addCartItem(food: $food) {
      id
      grandTotal {
        amount
        formatted
      }
      items {
        id
        name
        images
        metadata
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
      }
      totalItems
      totalUniqueItems
    }
  }
`;

export const REMOVE_CART_ITEM = gql`
  mutation RemoveCartItem($food: FoodInput!) {
    removeCartItem(food: $food) {
      id
      grandTotal {
        amount
        formatted
      }
      items {
        id
        name
        images
        metadata
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
      }
      totalItems
      totalUniqueItems
    }
  }
`;

// updating the inventory item
export const UPDATE_INVENTORY = gql`
  mutation UpdateInventory($inventoryId: ID!, $inventory: Int!) {
    updateInventory(inventoryId: $inventoryId, inventory: $inventory) {
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

export const UPDATE_CART_ITEM = gql`
  mutation updateCartItem($food: FoodInput!) {
    updateCartItem(food: $food) {
      id
      grandTotal {
        amount
        formatted
      }
      items {
        id
        name
        images
        metadata
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
      }
      totalItems
      totalUniqueItems
    }
  }
`;
