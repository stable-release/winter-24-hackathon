const users = require("../fixtures/users");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("users").insert(users);
    });
};
