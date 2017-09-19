
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('nurse', function(table){
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('hospital_id').notNullable();
    table.string('profile_img');
    table.date('unit_nurse_since').notNullable();
    table.boolean('is_preceptor').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('nurse');
};
