export default ({ env }) => ({
  host: env('HOST', '167.99.200.71'),
  port: env.int('PORT', 1339),
  url: env('PUBLIC_URL', 'http://167.99.200.71:1339'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
``
