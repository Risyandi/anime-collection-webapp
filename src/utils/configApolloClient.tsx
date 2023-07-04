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
  uri: process.env.REACT_APP_ANIME_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
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
