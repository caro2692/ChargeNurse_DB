
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('nurse_shift', function(table){
    table.increments('id').primary();
    table.integer('shift_id').unsigned();
    table.foreign('shift_id').references('shift.id');
    table.integer('nurse_id').unsigned();
    table.foreign('nurse_id').references('nurse.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('nurse_shift');
};
