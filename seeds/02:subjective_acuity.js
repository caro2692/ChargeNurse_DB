
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE subjective_acuity CASCADE; ALTER SEQUENCE subjective_acuity_id_seq restart with 7')
    .then(function () {
      return knex('subjective_acuity').insert([
        {
          id: 1,
          name:'Hands on physical care needed (1-5)',
          data_type: 'integer'
        },
        {
          id: 2,
          name:'Research or Education needed (1-5)',
          data_type: 'integer'
        },
        {
          id: 3,
          name:'Psychosocial and family involvement (1-5)',
          data_type: 'integer'
        },
        {
          id: 4,
          name:'Do you believe this patient is on the brink of ICU? (Y/N)',
          data_type: 'boolean'
        },
        {
          id: 5,
          name:'Is there a parent at the bedside often? (Y/N)',
          data_type: 'boolean'
        }
      ]);
    });
};
