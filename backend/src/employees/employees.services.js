const knex = require("../db/connection");

function create(user) {
    return knex("users")
        .insert(user)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
};

module.exports = {
    create,
};