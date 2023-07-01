/**
 * function for handle CORS blocked
 * 
 * noted: used for development only and you do not need to import this file anywhere. 
 * It is automatically registered when you start the development server.
 */

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function SetupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_ANIME_API,
      changeOrigin: true,
    })
  );
};