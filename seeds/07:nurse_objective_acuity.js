
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE nurse_objective_acuity CASCADE; ALTER SEQUENCE nurse_objective_acuity_id_seq restart with 1')
    .then(function () {
      return knex('nurse_objective_acuity').insert([
        {
          nurse_id: 1,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 2,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 3,
          objective_acuity_id: 3,
          value: false
        },
        {
          nurse_id: 4,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 5,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 6,
          objective_acuity_id: 3,
          value: false
        },
        {
          nurse_id: 7,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 8,
          objective_acuity_id: 3,
          value: false
        },
        {
          nurse_id: 9,
          objective_acuity_id: 3,
          value: true
        },
        {
          nurse_id: 10,
          objective_acuity_id: 3,
          value: true
        }
      ]);
    });
};
