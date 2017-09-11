
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient_subjective_acuity CASCADE; ALTER SEQUENCE patient_subjective_acuity_id_seq restart with 1')
    .then(function () {
      return knex('patient_subjective_acuity').insert([
        {
          patient_id: 1,
          subjective_acuity_id: 1,
          value: '4',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 1,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 1,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 1,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 1,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 2,
          subjective_acuity_id: 1,
          value: '3',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 2,
          subjective_acuity_id: 2,
          value: '5',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 2,
          subjective_acuity_id: 3,
          value: '4',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 2,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 2,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 3,
          subjective_acuity_id: 1,
          value: '3',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 3,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 3,
          subjective_acuity_id: 3,
          value: '1',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 3,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 1
        },
        {
          patient_id: 3,
          subjective_acuity_id: 5,
          value:'false',
          shift_id: 1,
          nurse_id: 1
        },

        {
          patient_id: 4,
          subjective_acuity_id: 1,
          value: '1',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 4,
          subjective_acuity_id: 2,
          value: '1',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 4,
          subjective_acuity_id: 3,
          value: '1',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 4,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 4,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 5,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 5,
          subjective_acuity_id: 2,
          value: '1',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 5,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 5,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 5,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 6,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 6,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 6,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 6,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 6,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 2
        },
        {
          patient_id: 7,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 7,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 7,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 7,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 7,
          subjective_acuity_id: 5,
          value:'false',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 8,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 8,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 8,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 8,
          subjective_acuity_id: 4,
          value: 'true',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 8,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 9,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 9,
          subjective_acuity_id: 2,
          value: '4',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 9,
          subjective_acuity_id: 3,
          value: '1',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 9,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 9,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 3
        },
        {
          patient_id: 10,
          subjective_acuity_id: 1,
          value: '1',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 10,
          subjective_acuity_id: 2,
          value: '1',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 10,
          subjective_acuity_id: 3,
          value: '1',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 10,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 10,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 11,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 11,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 11,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 11,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 11,
          subjective_acuity_id: 5,
          value:'false',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 12,
          subjective_acuity_id: 1,
          value: '3',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 12,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 12,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 12,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 12,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 4
        },
        {
          patient_id: 13,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 13,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 13,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 13,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 13,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 14,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 14,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 14,
          subjective_acuity_id: 3,
          value: '2',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 14,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 14,
          subjective_acuity_id: 5,
          value:'false',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 15,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 15,
          subjective_acuity_id: 2,
          value: '5',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 15,
          subjective_acuity_id: 3,
          value: '5',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 15,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 15,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 5
        },
        {
          patient_id: 16,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 16,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 16,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 16,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 16,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 17,
          subjective_acuity_id: 1,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 17,
          subjective_acuity_id: 2,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 17,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 17,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 17,
          subjective_acuity_id: 5,
          value:'false',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 18,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 18,
          subjective_acuity_id: 2,
          value: '1',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 18,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 18,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 18,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 6
        },
        {
          patient_id: 19,
          subjective_acuity_id: 1,
          value: '5',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 19,
          subjective_acuity_id: 2,
          value: '5',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 19,
          subjective_acuity_id: 3,
          value: '5',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 19,
          subjective_acuity_id: 4,
          value: 'true',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 19,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 20,
          subjective_acuity_id: 1,
          value: '1',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 20,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 20,
          subjective_acuity_id: 3,
          value: '1',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 20,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 20,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 21,
          subjective_acuity_id: 1,
          value: '2',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 21,
          subjective_acuity_id: 2,
          value: '2',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 21,
          subjective_acuity_id: 3,
          value: '3',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 21,
          subjective_acuity_id: 4,
          value: 'false',
          shift_id: 1,
          nurse_id: 7
        },
        {
          patient_id: 21,
          subjective_acuity_id: 5,
          value:'true',
          shift_id: 1,
          nurse_id: 7
        }
      ]);
    });
};
