const knex = require("../db/connection");

function retrievePassword(username) {
    return knex("credentials").select("*").where("username", username);
}

function retrieveUser(email) {
    return knex("users").select("*").where("email", email);
}

function updateCredentials(user_id, username, password, permission) {
    return knex("credentials").where("user_id", user_id).update({
        "username": username,
        "password": password,
        "permission": permission
    })
}

module.exports = {
    retrievePassword,
    retrieveUser,
    updateCredentials
}