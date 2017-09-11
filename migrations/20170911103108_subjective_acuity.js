
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('subjective_acuity', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('data_type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('subjective_acuity');
};
