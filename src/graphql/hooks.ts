import { useSuspenseQuery } from '@apollo/client';
import { GET_CHARACTER, GET_CHARACTERS } from './queries';

export const useCharacter = (id: string) => {
  const { error, data } = useSuspenseQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { error, data };
};

export const useCharacters = () => {
  const { error, data } = useSuspenseQuery(GET_CHARACTERS);
  return { error, data };
};
