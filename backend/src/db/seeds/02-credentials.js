const credentials = require("../fixtures/credentials");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE credentials RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("credentials").insert(credentials);
    });
};
