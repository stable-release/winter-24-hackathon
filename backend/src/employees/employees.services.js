const knex = require("../db/connection");

function list() {
    return knex("users").select("*")
}

function read(user_id) {
    return knex("users").select("*").where({ user_id }).first();
};

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

function destroy(user_id) {
    return knex("users").where({ user_id }).del();
};

module.exports = {
    create,
    read,
    addInitialUserCredentials,
    list,
    delete: destroy,
};