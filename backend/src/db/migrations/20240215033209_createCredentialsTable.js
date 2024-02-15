/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("credentials", (table) => {
    table.integer("user_id").unsigned().notNullable()
    table
        .foreign("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("credentials");
};
