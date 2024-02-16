/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("users", (table) => {
    table.string("birthdate");
    table.integer("height");
    table.integer("weight");
    table.string("sex", 1);
    table.string("occupation").defaultTo(null);
    table.integer("income").defaultTo(null);
    table.string("location").defaultTo(null);
    table.string("sleeping_disorder").defaultTo(null);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("users", (table) => {
    table.dropColumns(
        "birthdate",
        "height",
        "weight",
        "sex",
        "occupation",
        "income",
        "location",
        "sleeping_disorder"
    );
  });
};
