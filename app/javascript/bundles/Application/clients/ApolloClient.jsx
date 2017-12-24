import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import fetch from 'node-fetch';
import { graphQlUri } from '../config'

const cache = new InMemoryCache();

const resolvers = {}

const createClientWithState = (defaults) => {
  const stateLink = withClientState({ resolvers, cache, defaults });
  const httpLink = createHttpLink({ uri: graphQlUri, fetch: fetch });
  const link = ApolloLink.from([stateLink, httpLink])

  return new ApolloClient({
    cache,
    link
  });
}

export default createClientWithState
