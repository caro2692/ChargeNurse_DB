// Update with your config settings.
//const dotenv = require('dotenv');

//dotenv.config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/chargenurse'
  }
  ,
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL  + '?ssl=true'
  // }
};
