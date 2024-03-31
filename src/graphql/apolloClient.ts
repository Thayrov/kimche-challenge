import { ApolloClient, InMemoryCache } from '@apollo/client';
import { cacheOptions } from './cacheOptions';
import { API_URL } from '../utils/consts';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache({ typePolicies: cacheOptions }),
});
