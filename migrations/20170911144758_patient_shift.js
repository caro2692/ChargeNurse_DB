
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('patient_shift', function(table){
    table.increments('id').primary();
    table.integer('shift_id').unsigned();
    table.foreign('shift_id').references('shift.id');
    table.integer('patient_id').unsigned();
    table.foreign('patient_id').references('patient.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('patient_shift');
};
