
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('login', function(table){
    table.increments('id').primary();
    table.integer('nurse_id').unsigned();
    table.foreign('nurse_id').references('nurse.id');
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.boolean('is_active').defaultTo(true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('login');
};
