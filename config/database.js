module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "192.168.0.31"),
      // host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "psyc"),
      password: env("DATABASE_PASSWORD", "TongYuan123"),
    },
    useNullAsDefault: true,
  },
});
