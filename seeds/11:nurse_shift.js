exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE nurse_shift CASCADE; ALTER SEQUENCE nurse_shift_id_seq restart with 1')
    .then(function () {
      return knex('nurse_shift').insert([
        {
          shift_id:2,
          nurse_id:1
        },
        {
          shift_id:2,
          nurse_id:2
        },
        {
          shift_id:2,
          nurse_id:3
        },
        {
          shift_id:2,
          nurse_id:4
        },
        {
          shift_id:2,
          nurse_id:5
        },
        {
          shift_id:2,
          nurse_id:6
        },
        {
          shift_id:2,
          nurse_id:7
        }
      ]);
    });
};
