import { useSuspenseQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

export const useCharacters = () => {
  const { error, data } = useSuspenseQuery(GET_CHARACTERS);
  return { error, data };
};
