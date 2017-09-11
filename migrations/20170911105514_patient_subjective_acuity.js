
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('patient_subjective_acuity', function(table){
    table.increments('id').primary();
    table.integer('patient_id').unsigned();
    table.foreign('patient_id').references('patient.id');
    table.integer('subjective_acuity_id').unsigned();
    table.foreign('subjective_acuity_id').references('subjective_acuity.id');
    table.string('value');
    table.integer('shift_id').unsigned();
    table.foreign('shift_id').references('shift.id');
    table.integer('nurse_id').unsigned();
    table.foreign('nurse_id').references('nurse.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('patient_subjective_acuity');
};
