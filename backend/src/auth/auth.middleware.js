const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * Encrypts password
 * @param {string} password
 * @returns {string} hash
 */
async function encryptPassword(password) {
    const hash = await bcrypt.hash(password, saltRounds)
    return hash;
}

/**
 * Hash decryption
 * @param {password} password
 * @param {string} hash
 * @returns {bool} result
 */
async function validatePassword(password, hash) {
    const res = await bcrypt.compare(password, hash);
    return res;
}

module.exports = {
    encryptPassword,
    validatePassword
};