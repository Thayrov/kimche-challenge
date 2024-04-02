import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $name: String
    $page: Int
    $gender: String
    $status: String
    $species: String
  ) {
    characters(
      page: $page
      filter: { name: $name, gender: $gender, status: $status, species: $species }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      image
    }
  }
`;
