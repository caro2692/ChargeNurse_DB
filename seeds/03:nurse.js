
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE nurse CASCADE; ALTER SEQUENCE nurse_id_seq restart with 11')
    .then(function () {
      return knex('nurse').insert([
        {
          id: 1,
          first_name:'Carter',
          last_name: 'Hunter',
          hospital_id: 'x73kd9z',
          profile_img: '',
          unit_nurse_since: '2010-01-08'
        },
        {
          id: 2,
          first_name:'Margaret',
          last_name: 'Williams',
          hospital_id: 'x73kd9z',
          profile_img: '',
          unit_nurse_since: '2011-08-01'
        },
        {
          id: 3,
          first_name:'Lucy',
          last_name: 'Moore',
          hospital_id: 'dhf738k',
          profile_img: '',
          unit_nurse_since: '2017-09-08'
        },
        {
          id: 4,
          first_name:'Tom',
          last_name: 'Delaney',
          hospital_id: 'l9d86h2',
          profile_img: '',
          unit_nurse_since: '2015-04-21'
        },
        {
          id: 5,
          first_name:'Kathryn',
          last_name: 'Odell',
          hospital_id: 'l90h6dd',
          profile_img: '',
          unit_nurse_since: '2016-03-03'
        },
        {
          id: 6,
          first_name:'Jill',
          last_name: 'Broom',
          hospital_id: '4rtnhga',
          profile_img: '',
          unit_nurse_since: '2016-07-01'
        },
        {
          id: 7,
          first_name:'Max',
          last_name: 'Miller',
          hospital_id: 'ks896gb',
          profile_img: '',
          unit_nurse_since: '2017-03-21'
        },
        {
          id: 8,
          first_name:'Leona',
          last_name: 'Hays',
          hospital_id: 'kd84hf2',
          profile_img: '',
          unit_nurse_since: '2015-11-01'
        },
        {
          id: 9,
          first_name:'Mia',
          last_name: 'Jones',
          hospital_id: 'x8jd56h',
          profile_img: '',
          unit_nurse_since: '2016-12-21'
        },
        {
          id: 10,
          first_name:'Emilie',
          last_name: 'Holland',
          hospital_id: '9k1xhsg',
          profile_img: '',
          unit_nurse_since: '2017-01-25'
        }
      ]);
    });
};
