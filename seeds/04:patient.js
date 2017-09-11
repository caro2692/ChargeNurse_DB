
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE patient CASCADE; ALTER SEQUENCE patient_id_seq restart with 31')
    .then(function () {
      return knex('patient').insert([
        {
          id: 1,
          hospital_id: 'kd8dksla',
          bed_number: 1,
        },
        {
          id: 2,
          hospital_id: 'kd82jdyh',
          bed_number: 2,
        },
        {
          id: 3,
          hospital_id: '39dk78fn',
          bed_number: 3,
        },
        {
          id: 4,
          hospital_id: '8dj36hnd',
          bed_number: 4,
        },
        {
          id: 5,
          hospital_id: '8iuhbgt6',
          bed_number: 5,
        },
        {
          id: 6,
          hospital_id: 'x748fjal',
          bed_number: 6,
        },
        {
          id: 7,
          hospital_id: 'cjdu8374',
          bed_number: 7,
        },
        {
          id: 8,
          hospital_id: 'xxxi874h',
          bed_number: 8,
        },
        {
          id: 9,
          hospital_id: 'z9djfkal',
          bed_number: 9,
        },
        {
          id: 10,
          hospital_id: 'm9xchb29',
          bed_number: 10,
        },
        {
          id: 11,
          hospital_id: 'zxvbas67',
          bed_number: 11,
        },
        {
          id: 12,
          hospital_id: 'xmcvbd65',
          bed_number: 12,
        },
        {
          id: 13,
          hospital_id: 'zxasl094',
          bed_number: 13,
        },
        {
          id: 14,
          hospital_id: 'cbsn665d',
          bed_number: 14,
        },
        {
          id: 15,
          hospital_id: 'l9dlk4kl',
          bed_number: 15,
        },
        {
          id: 16,
          hospital_id: 'z8s927hg',
          bed_number: 16,
        },
        {
          id: 17,
          hospital_id: 'xzcvb675',
          bed_number: 17,
        },
        {
          id: 18,
          hospital_id: 'zmskdj67',
          bed_number: 18,
        },
        {
          id: 19,
          hospital_id: 'zmn84859',
          bed_number: 19,
        },
        {
          id: 20,
          hospital_id: 'znkd667k',
          bed_number: 20,
        },
        {
          id: 21,
          hospital_id: 'zla876hy',
          bed_number: 21,
        },
        {
          id: 22,
          hospital_id: 'zxxc8987',
          bed_number: 22,
        },
        {
          id: 23,
          hospital_id: 'xncb1098',
          bed_number: 23,
        },
        {
          id: 24,
          hospital_id: 'k8juh5gf',
          bed_number: 24,
        },
        {
          id: 25,
          hospital_id: 'e8e8d7fh',
          bed_number: 25,
        },
        {
          id: 26,
          hospital_id: 'lk981hfn',
          bed_number: 26,
        },
        {
          id: 27,
          hospital_id: 'ol09jnw2',
          bed_number: 27,
        },
        {
          id: 28,
          hospital_id: 'n8jd6fgh',
          bed_number: 28,
        },
        {
          id: 29,
          hospital_id: 'xxxii8j7',
          bed_number: 29,
        },
        {
          id: 30,
          hospital_id: 'zxvc0987',
          bed_number: 30,
        }
      ]);
    });
};
