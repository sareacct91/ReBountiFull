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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $address: AddressInput!
    $isSupplier: Boolean!
    $isClient: Boolean!
    $businessName: String
    $firstName: String
    $lastName: String
    $householdSize: Int
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      address: $address
      isSupplier: $isSupplier
      isClient: $isClient
      businessName: $businessName
      firstName: $firstName
      lastName: $lastName
      householdSize: $householdSize
    ) {
      token
      user {
        _id
        username
        isSupplier
        isClient
        businessName
      }
    }
  }
`;


