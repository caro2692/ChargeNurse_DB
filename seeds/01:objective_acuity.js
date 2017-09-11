
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE objective_acuity CASCADE; ALTER SEQUENCE objective_acuity_id_seq restart with 12')
    .then(function () {
      return knex('subjective_acuity').insert([
        {
          id: 1,
          name:'Complete Care?',
          data_type: 'boolean'
        },
        {
          id: 2,
          name:'End of life?',
          data_type: 'boolean'
        },
        {
          id: 3,
          name:'Bone Marrow?',
          data_type: 'boolean'
        },
        {
          id: 4,
          name:'Neutropenic?',
          data_type: 'boolean'
        },
        {
          id: 5,
          name:'Infectious?',
          data_type: 'boolean'
        },
        {
          id: 6,
          name:'Confused?',
          data_type: 'boolean'
        },
        {
          id: 7,
          name:'Contact Isolation?',
          data_type: 'boolean'
        },
        {
          id: 8,
          name:'CBC',
          data_type: 'integar'
        },
        {
          id: 9,
          name:'Number of medications',
          data_type: 'integar'
        },
        {
          id: 9,
          name:'Morse fall risk scale',
          data_type: 'integar'
        },
        {
          id: 10,
          name:'Diagnosis',
          data_type: 'string'
        },
        {
          id: 11,
          name:'date_of_birth',
          data_type: 'date'
        }
      ]);
    });
};
