require("dotenv").config();

const { API_URL = "http://localhost:5001" } = process.env;

/**
 *
 * @param FormData username, password
 * @returns
 */
export async function authenticateUser(username, password) {
    try {
        // fetch verification
        // return { username: "", permissions: 1 };
        let headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
            data: {
                username: username,
                password: password,
            },
        });

        let response = await fetch(`${API_URL}/auth/login`, {
            method: "PUT",
            body: bodyContent,
            headers: headersList,
        });

        let payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        return payload.data;

    } catch (e) {
        console.error(e);
    }
}
