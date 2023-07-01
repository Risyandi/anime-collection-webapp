/**
 * configuration apollo client to request graphql
 */

import { ApolloClient, InMemoryCache } from '@apollo/client';

console.log(process.env.REACT_APP_ANIME_API, 'process.env.REACT_APP_ANIME_API');


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