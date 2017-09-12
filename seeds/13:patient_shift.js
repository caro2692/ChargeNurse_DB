
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_shift CASCADE; ALTER SEQUENCE patient_shift_id_seq restart with 1')
    .then(function () {
      return knex('patient_shift').insert([
        {
          patient_id: 1,
          shift_id: 2,
        },
        {
          patient_id: 2,
          shift_id: 2,
        },
        {
          patient_id: 3,
          shift_id: 2,
        },
        {
          patient_id: 4,
          shift_id: 2,
        },
        {
          patient_id: 5,
          shift_id: 2,
        },
        {
          patient_id: 6,
          shift_id: 2,
        },
        {
          patient_id: 7,
          shift_id: 2,
        },
        {
          patient_id: 8,
          shift_id: 2,
        },
        {
          patient_id: 9,
          shift_id: 2,
        },
        {
          patient_id: 10,
          shift_id: 2,
        },
        {
          patient_id: 11,
          shift_id: 2,
        },
        {
          patient_id: 12,
          shift_id: 2,
        },
        {
          patient_id: 13,
          shift_id: 2,
        },
        {
          patient_id: 14,
          shift_id: 2,
        },
        {
          patient_id: 15,
          shift_id: 2,
        },
        {
          patient_id: 16,
          shift_id: 2,
        },
        {
          patient_id: 17,
          shift_id: 2,
        },
        {
          patient_id: 18,
          shift_id: 2,
        },
        {
          patient_id: 19,
          shift_id: 2,
        },
        {
          patient_id: 20,
          shift_id: 2,
        },
        {
          patient_id: 21,
          shift_id: 2,
        }
      ]);
    });
};
