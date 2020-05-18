/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns('users', {
    user_phone: { type: 'text' },
  });
}

exports.down = pgm => {
  pgm.dropColumns('users', {
    user_phone: { type: 'text' },
  });
}