
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('patient', function(table){
    table.increments('id').primary();
    table.string('hospital_id').notNullable();
    table.integer('bed_number').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('patient');
};
