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

/**
 *
 * @param FormData username, password
 * @returns
 */
export async function signUpUser(first, last, email, password, permission) {
    try {
        // fetch verification
        // return { username: "", permissions: 1 };
        let headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
            data: {
                FirstName: first,
                LastName: last,
                Email: email,
                password: password,
                permission: permission ? permission : 1,
            },
        });

        let response = await fetch(`${API_URL}/auth`, {
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

/**
 * Sign Up Initial Biography
 */
export async function initialBio(
    birthdate,
    height,
    weight,
    sex,
    occupation,
    income,
    location,
    sleeping_disorder
) {
    try {
        // fetch verification
        // return { username: "", permissions: 1 };
        let headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        let bodyContent = JSON.stringify({
            data: {
                birthdate: birthdate,
                height: height,
                weight: weight,
                sex: sex,
                occupation: occupation,
                income: income,
                location: location,
                sleeping_disorder: sleeping_disorder
            },
        });

        let response = await fetch(`${API_URL}/employees/`, {
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
