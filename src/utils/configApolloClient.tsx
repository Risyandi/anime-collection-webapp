/**
 * configuration apollo client to request graphql
 */

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // uri : link url from file .env
    uri: '/api',
    cache: new InMemoryCache(),
    name: 'anime-collections',
    version: '0.1.0',
});

export {
    client
};