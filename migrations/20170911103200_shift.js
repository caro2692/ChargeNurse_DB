
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('shift', function(table){
    table.increments('id').primary();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.integer('charge_nurse_id').unsigned();
    table.foreign('charge_nurse_id').references('nurse.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('shift');
};
