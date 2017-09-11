
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_profile CASCADE; ALTER SEQUENCE patient_profile_id_seq restart with 1')
    .then(function () {
      return knex('patient_profile').insert([
        {
          patient_id: 1,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 2,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 3,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 4,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 5,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 6,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 7,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 8,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 9,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 10,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 11,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 12,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 13,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 14,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 15,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 16,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 17,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 18,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 19,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 20,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 21,
          objective_acuity_id: 10,
          value: 'cancer'
        },
      ]);
    });
};
