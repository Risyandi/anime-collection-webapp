/**
 * this is a function for handle CORS blocked in local development
 * noted: used for development only and you do not need to import this file anywhere.
 * It is automatically registered when you start the development server.
 */

import { createProxyMiddleware } from 'http-proxy-middleware';

interface appParams {
  // allows dynamic keys and values, used when we don't know all the names of a type's properties and the shape of the values ahead of time.
  [key: string]: any; 
}

export default function SetupProxy(app:appParams) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_ANIME_API,
      changeOrigin: true,
    })
  );
};