const typeDefs = `
  scalar Date

  type FoodItem {
    food: Food!
    amount: Int!
  }

  type History {
    date: Date!
    food_item: [FoodItem!]!
    amount_paid: Float!
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: Int!
  } 

  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: Int!
  } 

  type User {
    _id: ID!
    username: String!
    email: String!
    address: Address!
    isSupplier: Boolean!
    isClient: Boolean!
    business_name: String
    first_name: String
    last_name: String
    cart: Cart
    household_size: Int
    history: [History!]!
  }    

  input UserInput {
    username: String!
    email: String! 
    password: String!
    address: AddressInput!
    isSupplier: Boolean!
    isClient: Boolean!
    business_name: String
    first_name: String
    last_name: String
    household_size: Int
  }    

  type Food {
    _id: ID!
    name: String!
    price: Float!
    inventory: Int!
    category: String!
    image: String
    vegan: Boolean!
    vegetarian: Boolean!
    gluten_free: Boolean!
    dairy_free: Boolean!
    nut_free: Boolean!
  } 

  input FoodInput {
    _id: ID!
    name: String
    price: Float
    image: String
    quantity: Int
  } 

  type Auth {
    token: ID!
    user: User!
  }

  type Cart {
    id: ID!
    totalItems: Int!
    totalUniqueItems: Int!
    items: [CartItem]!
    grandTotal: Money!
    abandoned: Boolean!
  }
  
  type CartItem {
    id: ID!
    name: String!
    images: [String]
    unitTotal: Money!
    lineTotal: Money!
    quantity: Int!
  }

  type Money {
    amount: Int
    formatted: String
  }

  type Order {
    id: ID!
    cartId: ID!
    items: [OrderItem!]!
    grandTotal: Money!
    totalItems: Int!
    totalUniqueItems: Int!
    status: OrderStatus!
    createdAt: Date!
    updatedAt: Date!
  }

  type OrderItem {
    id: ID!
    name: String
    images: [String]
    unitTotal: Money!
    lineTotal: Money!
    quantity: Int!
    createdAt: Date!
    updatedAt: Date!
  }
  enum OrderStatus {
    UNPAID
    PAID
  }

  type Query {
    user: User!
    getCart: Cart!
    getAllFood: [Food!]!
    getFood(name: String!): Food!
    getFoodByCategory(category: String!): [Food!]!
    getFoodByPreference(
    vegan: Boolean
    vegetarian: Boolean
    glutenFree: Boolean
    dairyFree: Boolean
    nutFree: Boolean
  ): [Food!]!
  }

  type Mutation {
    addUser(userInput: UserInput!): Auth
    updateUser(username: String, email: String, password: String):Auth
    login(email: String!, password: String!): Auth
    updateInventory(inventoryId: ID!, inventory: Int!): Food!
    updateCartItem(food:FoodInput!): Cart
    addCartItem(food:FoodInput!): Cart
    removeCartItem(food:FoodInput!): Cart 
    cartCheckout:Order
  }
`;

// addUser(username: String!, email: String!, password: String!, address: AddressInput!, business_name: String, first_name:String, last_name:String, household_size:Int ): Auth

module.exports = typeDefs;
