/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("entries", (table) => {
    table.string("entry_date");
    table.integer("activity_level");
    table.integer("daily_steps");
    table.integer("stress_level");
    table.integer("sleep_duration");
    table.string("notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("entires", (table) => {
    table.dropColumns(
        "entry_date",
        "activity_level",
        "daily_steps",
        "stress_level",
        "sleep_duration",
        "notes"
    );
  });
};
