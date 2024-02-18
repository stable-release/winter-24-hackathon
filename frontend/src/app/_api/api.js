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

export async function listEmployees(perm, signal) {
    const url = new URL(`${API_URL}/employees`);
    const options = {
        method: "GET",
        headers,
        body: JSON.stringify({ data: { permission: perm } }),
        signal,
    };
    return await fetchJson(url, options, []);
}