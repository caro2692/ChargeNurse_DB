exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_nurse CASCADE; ALTER SEQUENCE patient_nurse_id_seq restart with 1')
    .then(function () {
      return knex('patient_nurse').insert([
        {
          shift_id: 2,
          nurse_id: 1,
          patient_id: 1
        },
        {
          shift_id: 2,
          nurse_id: 1,
          patient_id: 2
        },
        {
          shift_id: 2,
          nurse_id: 1,
          patient_id: 3
        },
        {
          shift_id: 2,
          nurse_id: 2,
          patient_id: 4
        },
        {
          shift_id: 2,
          nurse_id: 2,
          patient_id: 5
        }
      ]);
    });
};
