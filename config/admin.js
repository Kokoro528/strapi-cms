module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ed764516fc49dc04384ed3bdfa0fae93'),
  },
});
