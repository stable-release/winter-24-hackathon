const knex = require("../db/connection");
 
function create(entry) {
    return knex("entries")
        .insert(entry)
        .returning("*")
        .then((createdRecords) => createdRecords[0]);
};

function read(entry_date, user_id) {
    return knex("entries")
        .select("*")
        .where({ entry_date })
        .where({ user_id })
        .first();
};

function list(user_id) {
    return knex("entries")
        .select("*")
        .where({ user_id });
};

module.exports = {
    create,
    read,
    list,
};