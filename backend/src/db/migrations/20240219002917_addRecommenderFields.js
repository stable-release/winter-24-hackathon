/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table("entries", (table) => {
        table.integer("sleep_quality");
        table.string("blood_pressure");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("entires", (table) => {
        table.dropColumns("sleep_quality", "blood_pressure");
    });
};
