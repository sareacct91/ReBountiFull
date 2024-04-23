import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query User {
  user {
    _id
    username
    email
    address {
      street
      city
      state
      zip
    }
    isSupplier
    isClient
    business_name
    first_name
    last_name
    household_size
    history {
      date
      stripeId
      cart {
        id
        totalItems
        totalUniqueItems
        payment_amount
        grandTotal {
          amount
          formatted
        }
        items {
          id
          name
          images
          unitTotal {
            amount
            formatted
          }
          lineTotal {
            amount
            formatted
          }
          quantity
          metadata
        }
      }
    }
    fullname
  }
}`;

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
// querying one food item
export const QUERY_FOOD = gql`
  query GetFood($name: String) {
    getFood(name: $name) {
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

// querying food items by its category name
export const QUERY_FOOD_BY_CATEGORY = gql`
  query GetFoodByCategory($category: String!) {
    getFoodByCategory(category: $category) {
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
export const QUERY_FOOD_BY_PREFERENCE = gql`
  query getFoodByPreference(
    $vegan: Boolean
    $vegetarian: Boolean
    $glutenFree: Boolean
    $dairyFree: Boolean
    $nutFree: Boolean
  ) {
    getFoodByPreference(
      vegan: $vegan
      vegetarian: $vegetarian
      glutenFree: $glutenFree
      dairyFree: $dairyFree
      nutFree: $nutFree
    ) {
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
  query GetCart {
    getCart {
      id
      totalItems
      totalUniqueItems
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
    }
  }
`;

export const CART_CHECKOUT = gql`
  query CartCheckout($order: OrderInput!) {
    cartCheckout(order: $order) {
      session
    }
  }
`;

export const SUBMIT_DONATION = gql`
  query donation($amount: Int!) {
    donation(amount: $amount) {
      session
    }
  }
`;

