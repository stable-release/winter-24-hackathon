require("dotenv").config();

const {
    REACT_APP_API_URL = "https://winter-24-hackathon-production.up.railway.app",
} = process.env;

/**
 * Create new journal entry
 */
export async function createEntry(
    user_id,
    entry_date,
    activity_level,
    daily_steps,
    stress_level,
    sleep_duration,
    sleep_quality,
    blood_pressure,
    notes
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
                user_id: user_id,
                entry_date: entry_date,
                activity_level: activity_level,
                daily_steps: daily_steps,
                stress_level: stress_level,
                sleep_duration: sleep_duration,
                sleep_quality: sleep_quality,
                blood_pressure: blood_pressure,
                notes: notes,
            },
        });

        let response = await fetch(`${REACT_APP_API_URL}/entries/new`, {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });

        let payload = await response.json();

        console.log(payload.data);
        console.log(payload.error);

        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        return payload.data;
    } catch (e) {
        console.error(e);
    }
}

/**
 * Retrieve by date
 */
export async function retrieveEntry(user_id, entry_date) {
    try {
        // fetch verification
        // return { username: "", permissions: 1 };
        let headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        let response = await fetch(
            `${REACT_APP_API_URL}/entries/${entry_date}/${user_id}`,
            {
                method: "GET",
                headers: headersList,
            }
        );

        let payload = await response.json();
        
        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        
        return payload.data;
    } catch (e) {
        console.error(e);
    }
}
