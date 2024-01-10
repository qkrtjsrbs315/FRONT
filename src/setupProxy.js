// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://jamey.shop', // 백엔드 API 서버 주소
      changeOrigin: true,
    })
  );
};
