/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("credentials", (table) => {
    table.string("username");
    table.string("password");
    table.integer("permission").defaultTo(0);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("credentials", (table) => {
    table.dropColumns("username", "password", "permission");
  })
};
