import { gql } from 'apollo-boost';

export default gql`
  query {
    currentUser {
      id
      email
    }
  }
`;
