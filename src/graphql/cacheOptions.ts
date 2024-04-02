import { TypePolicies, FieldReadFunction, Reference, FieldMergeFunction } from '@apollo/client';
import { Character, CharactersPage } from '../types';

const mergeCharacters: FieldMergeFunction<CharactersPage> = (
  existing = { results: [], info: { count: 0 } },
  incoming,
  { args }
) => {
  const page = args?.page || 1;
  const pageSize = incoming.results.length;
  const startIndex = (page - 1) * pageSize;

  const mergedResults = existing.results.slice();
  for (let i = 0; i < incoming.results.length; ++i) {
    mergedResults[startIndex + i] = incoming.results[i];
  }

  return {
    ...incoming,
    results: mergedResults,
    info: incoming.info,
  };
};

const readCharacter: FieldReadFunction<Character | Reference> = (_, { args, toReference }) => {
  const ref = toReference({
    __typename: 'Character',
    id: args?.id as string,
  });
  return ref;
};

export const cacheOptions: TypePolicies = {
  Query: {
    fields: {
      characters: {
        keyArgs: ['filter'],
        merge: mergeCharacters,
      },
      character: {
        read: readCharacter,
        keyArgs: false,
      },
    },
  },
};
