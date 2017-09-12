
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_objective_acuity CASCADE; ALTER SEQUENCE patient_objective_acuity_id_seq restart with 1')
    .then(function () {
      return knex('patient_objective_acuity').insert([
        {
          patient_id: 1,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 11,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 3,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 3,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 1,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 11,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 1,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 1,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 1,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 11,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 1,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 11,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 5,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 5,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 5,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 1,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 4,
          value: false,
          shift_id:1
        },
        {
          patient_id: 11,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 4,
          value: false,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 4,
          value: true,
          shift_id: 1
        },
        {
          patient_id: 1,
          objective_acuity_id: 9,
          value: 4,
          shift_id: 1
        },
        {
          patient_id: 2,
          objective_acuity_id: 9,
          value: 6,
          shift_id: 1
        },
        {
          patient_id: 3,
          objective_acuity_id: 9,
          value: 1,
          shift_id: 1
        },
        {
          patient_id: 4,
          objective_acuity_id: 9,
          value: 5,
          shift_id: 1
        },
        {
          patient_id: 5,
          objective_acuity_id: 9,
          value: 9,
          shift_id: 1
        },
        {
          patient_id: 6,
          objective_acuity_id: 9,
          value: 10,
          shift_id: 1
        },
        {
          patient_id: 7,
          objective_acuity_id: 9,
          value: 3,
          shift_id: 1
        },
        {
          patient_id: 8,
          objective_acuity_id: 9,
          value: 4,
          shift_id: 1
        },
        {
          patient_id: 9,
          objective_acuity_id: 9,
          value: 4,
          shift_id: 1
        },
        {
          patient_id: 10,
          objective_acuity_id: 9,
          value: 5,
          shift_id: 1
        },
        {
          patient_id: 11,
          objective_acuity_id: 9,
          value: 1,
          shift_id: 1
        },
        {
          patient_id: 12,
          objective_acuity_id: 9,
          value: 2,
          shift_id: 1
        },
        {
          patient_id: 13,
          objective_acuity_id: 9,
          value: 8,
          shift_id: 1
        },
        {
          patient_id: 14,
          objective_acuity_id: 9,
          value: 7,
          shift_id: 1
        },
        {
          patient_id: 15,
          objective_acuity_id: 9,
          value: 4,
          shift_id: 1
        },
        {
          patient_id: 16,
          objective_acuity_id: 9,
          value: 5,
          shift_id: 1
        },
        {
          patient_id: 17,
          objective_acuity_id: 9,
          value: 6,
          shift_id: 1
        },
        {
          patient_id: 18,
          objective_acuity_id: 9,
          value: 2,
          shift_id: 1
        },
        {
          patient_id: 19,
          objective_acuity_id: 9,
          value: 3,
          shift_id: 1
        },
        {
          patient_id: 20,
          objective_acuity_id: 9,
          value: 8,
          shift_id: 1
        }
      ]);
    });
};
