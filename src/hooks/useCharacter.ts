import { useSuspenseQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';

export const useCharacter = (id: string) => {
  const { error, data } = useSuspenseQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { error, data };
};
