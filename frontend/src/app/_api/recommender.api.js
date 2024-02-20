require("dotenv").config();

const { REACT_APP_API_URL = "https://winter-24-hackathon-production.up.railway.app" } = process.env;

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

        let response = await fetch(`${REACT_APP_API_URL}/recommender/${username}`, {
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