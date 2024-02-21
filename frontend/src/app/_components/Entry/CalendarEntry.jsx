import { returnUserID } from "@/app/_api/api";
import { asDateString } from "@/app/_api/date-time";
import { retrieveEntry } from "@/app/_api/entries.api";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function CalendarEntry({ value, entryAvailable }) {
    const [entryData, setEntryData] = useState(null);
    useEffect(() => {
        async function getCalendarEntry() {
            const userID = await returnUserID(getCookie("username"));
            const data = await retrieveEntry(
                userID.user_id,
                asDateString(value)
            );

            setEntryData(data);
        }

        if (value && entryAvailable == 0) {
            getCalendarEntry();
        }
    }, [value]);
    return (
        <div>
            Calendar Entry
        </div>
    )
}