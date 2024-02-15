require("dotenv").config();

const {
    API_URL = ""
} = process.env;

/**
 * 
 * @param FormData username, password
 * @returns 
 */
export async function authenticateUser({username, password}) {
    try {
        // fetch verification
        return { username: "", permissions: 1 };
    } catch (e) {}
}