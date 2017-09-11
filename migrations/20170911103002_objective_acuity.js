
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('objective_acuity', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('data_type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('objective_acuity');
};
