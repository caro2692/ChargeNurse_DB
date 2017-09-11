
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('patient_objective_acuity', function(table){
    table.increments('id').primary();
    table.integer('patient_id').unsigned();
    table.foreign('patient_id').references('patient.id');
    table.integer('objective_acuity_id').unsigned();
    table.foreign('objective_acuity_id').references('objective_acuity.id');
    table.string('value');
    table.integer('shift_id').unsigned();
    table.foreign('shift_id').references('shift.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('patient_objective_acuity');
};
