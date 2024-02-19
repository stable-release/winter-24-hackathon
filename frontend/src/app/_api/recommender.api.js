require("dotenv").config();

const { API_URL = "http://localhost:5001" } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return null;
        };

        const payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        };

        return payload.data;

    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        };

        return Promise.resolve(onCancel);
    };
};

export async function listEmployees(username, signal) {
    const url = new URL(`${API_URL}/recommender/${username}`);
    const options = { method: "GET", signal};
    return await fetchJson(url, options, []);
}