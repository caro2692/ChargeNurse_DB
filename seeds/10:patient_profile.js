
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
        {
          patient_id: 22,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 23,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 24,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 25,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 26,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 27,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 28,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 29,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 30,
          objective_acuity_id: 10,
          value: 'cancer'
        },
        {
          patient_id: 1,
          objective_acuity_id: 11,
          value: '2001-01-14'
        },
        {
          patient_id: 2,
          objective_acuity_id: 11,
          value: '2011-11-04'
        },
        {
          patient_id: 3,
          objective_acuity_id: 11,
          value: '2026-03-34'
        },
        {
          patient_id: 4,
          objective_acuity_id: 11,
          value: '2015-03-05'
        },
        {
          patient_id: 5,
          objective_acuity_id: 11,
          value: '2011-01-01'
        },
        {
          patient_id: 6,
          objective_acuity_id: 11,
          value: '2011-12-14'
        },
        {
          patient_id: 7,
          objective_acuity_id: 11,
          value: '2010-05-10'
        },
        {
          patient_id: 8,
          objective_acuity_id: 11,
          value: '2004-03-09'
        },
        {
          patient_id: 9,
          objective_acuity_id: 11,
          value: '2008-12-14'
        },
        {
          patient_id: 10,
          objective_acuity_id: 11,
          value: '2001-04-03'
        },
        {
          patient_id: 11,
          objective_acuity_id: 11,
          value: '2015-08-01'
        },
        {
          patient_id: 12,
          objective_acuity_id: 11,
          value: '2014-09-19'
        },
        {
          patient_id: 13,
          objective_acuity_id: 11,
          value: '2012-10-19'
        },
        {
          patient_id: 14,
          objective_acuity_id: 11,
          value: '2013-10-08'
        },
        {
          patient_id: 15,
          objective_acuity_id: 11,
          value: '2014-01-14'
        },
        {
          patient_id: 16,
          objective_acuity_id: 11,
          value: '2017-04-19'
        },
        {
          patient_id: 17,
          objective_acuity_id: 11,
          value: '2015-01-20'
        },
        {
          patient_id: 18,
          objective_acuity_id: 11,
          value: '2013-09-09'
        },
        {
          patient_id: 19,
          objective_acuity_id: 11,
          value: '2011-06-19'
        },
        {
          patient_id: 20,
          objective_acuity_id: 11,
          value: '2015-06-10'
        },
        {
          patient_id: 21,
          objective_acuity_id: 11,
          value: '2012-04-10'
        }
      ]);
    });
};
