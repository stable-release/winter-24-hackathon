const knex = require("../db/connection");

function list() {
    return knex("users").select("*")
}

function create(user) {
    return knex("users")
        .insert(user)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
};

function addInitialUserCredentials(user) {
    return knex("credentials")
        .insert(user)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
};

module.exports = {
    create,
    addInitialUserCredentials,
    list,
};