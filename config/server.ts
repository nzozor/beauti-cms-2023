export default ({ env }) => ({
  url: env("PUBLIC_URL", `http://167.99.200.71/:${env.int('PORT', 1339)}`),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
