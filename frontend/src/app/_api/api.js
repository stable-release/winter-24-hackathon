require("dotenv").config();

const {
    REACT_APP_API_URL = "https://winter-24-hackathon-production.up.railway.app",
} = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return null;
        }

        const payload = await response.json();

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }

        return payload.data;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }

        return Promise.resolve(onCancel);
    }
}

// Username is same as Email
export async function returnUserID(username) {
    const url = new URL(`${REACT_APP_API_URL}/auth/ID/${username}`);
    const options = { method: "GET" };
    return await fetchJson(url, options);
}

// Username is same as Email
export async function returnUserDetails(username) {
    const url = new URL(`${REACT_APP_API_URL}/auth/details/${username}`);
    const options = { method: "GET" };
    return await fetchJson(url, options);
}

export async function listEmployees(signal) {
    const url = new URL(`${REACT_APP_API_URL}/employees`);
    return await fetchJson(url, { signal }, []);
}

export async function deleteEmployee(user_id, signal) {
    const url = new URL(`${REACT_APP_API_URL}/employees/${user_id}`);
    const options = { method: "DELETE", signal };
    return await fetchJson(url, options);
}

export async function createUser(user, signal) {
    const url = new URL(`${REACT_APP_API_URL}/employees/new`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: user }),
        signal,
    };
    return await fetchJson(url, options, {});
}