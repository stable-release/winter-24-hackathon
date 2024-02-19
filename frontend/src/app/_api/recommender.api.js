require("dotenv").config();

const { API_URL = "http://localhost:5001" } = process.env;

/**
 * Recommends a strategy for specified user
 */
export async function recommendStrategy(username) {
    try {
        // fetch verification
        // return { username: "", permissions: 1 };
        let headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        let response = await fetch(`${API_URL}/recommender/${username}`, {
            method: "GET",
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