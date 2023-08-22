export default ({ env }) => ({
  host: env('DATABASE_HOST', '127.0.0.1'),
  port: env.int('PORT', 1339),
  url: env('PUBLIC_URL', 'http://localhost:1339'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
