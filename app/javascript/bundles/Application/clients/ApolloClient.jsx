import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import { graphQlUri } from '../config'

const link = createHttpLink({ uri: graphQlUri, fetch: fetch });

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client
