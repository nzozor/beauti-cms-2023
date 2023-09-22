export default ({ env }) => ({
  host: env('DATABASE_HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  url: env('PUBLIC_URL', '0.0.0.0'), // THIS ONE

  app: {
    keys: env.array('APP_KEYS'),
  },
});
