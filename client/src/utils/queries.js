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
