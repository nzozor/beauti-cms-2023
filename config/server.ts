export default ({ env }) => ({
  url: env("PUBLIC_URL", "http://localhost:1666"),

  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1666),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
