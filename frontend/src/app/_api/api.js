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

export async function listEmployees(signal) {
    const url = new URL(`${API_URL}/employees`);
    return await fetchJson(url, { signal }, []);
}

export async function deleteEmployee(user_id, signal) {
    const url = new URL(`${API_URL}/employees/${user_id}`);
    const options = { method: "DELETE", signal};
    return await fetchJson(url, options);
}

export async function createUser(user, signal) {
    const url = new URL(`${API_URL}/employees/new`)
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify({ data: user }),
        signal,
    };
    return await fetchJson(url, options, {});
};