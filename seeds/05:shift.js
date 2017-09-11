
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE shift CASCADE; ALTER SEQUENCE shift_id_seq restart with 3')
    .then(function () {
      return knex('shift').insert([
        {
          id: 1,
          start_date:'2017-09-22',
          end_date:'2017-09-22',
          start_time: '07:00',
          end_time: '19:00',
          charge_nurse_id: 1
        },
        {
          id: 2,
          start_date:'2017-09-22',
          end_date:'2017-09-23',
          start_time: '19:00',
          end_time: '07:00',
          charge_nurse_id: 2
        }
      ]);
    });
};
