exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_nurse CASCADE; ALTER SEQUENCE patient_nurse_id_seq restart with 1')
    .then(function () {
      return knex('patient_nurse').insert([
      ]);
    });
};
