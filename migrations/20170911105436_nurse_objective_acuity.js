
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('nurse_objective_acuity', function(table){
    table.increments('id').primary();
    table.integer('nurse_id').unsigned();
    table.foreign('nurse_id').references('nurse.id');
    table.integer('objective_acuity_id').unsigned();
    table.foreign('objective_acuity_id').references('objective_acuity.id');
    table.string('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('nurse_objective_acuity');
};
