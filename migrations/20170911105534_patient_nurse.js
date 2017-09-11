
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('patient_nurse', function(table){
    table.increments('id').primary();
    table.integer('shift_id').unsigned();
    table.foreign('shift_id').references('shift.id');
    table.integer('nurse_id').unsigned();
    table.foreign('nurse_id').references('nurse.id');
    table.integer('patient_id').unsigned();
    table.foreign('patient_id').references('patient.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('patient_nurse');
};
