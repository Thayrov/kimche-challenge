import { ApolloError, useSuspenseQuery } from '@apollo/client';
import { GET_CHARACTER, GET_CHARACTERS } from '../graphql/queries';
import { Character } from '../types';

interface CharacterData {
  character: Character;
}

export const useCharacter = (
  id: string
): { data: CharacterData | undefined; error: ApolloError | undefined } => {
  const { error, data } = useSuspenseQuery<CharacterData>(GET_CHARACTER, {
    variables: { id },
  });
  return { error, data };
};

export const useCharacters = () => {
  const { error, data } = useSuspenseQuery(GET_CHARACTERS);
  return { error, data };
};
