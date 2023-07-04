/**
 * configuration apollo client to request graphql
 */

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: '/anime-collection-webapp/api',
  headers: {
    "access-control-allow-origin": "*",
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',
  },
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  name: "anime-collections",
  version: "0.1.0",
});

export { client };
