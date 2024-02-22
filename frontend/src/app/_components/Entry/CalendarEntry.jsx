import { returnUserID } from "@/app/_api/api";
import { asDateString } from "@/app/_api/date-time";
import { retrieveEntry } from "@/app/_api/entries.api";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function CalendarEntry({ value, entryAvailable }) {
    const [entryData, setEntryData] = useState(null);
    useEffect(() => {
        async function getCalendarEntry() {
            try {
                const userID = await returnUserID(getCookie("username"));
                const data = await retrieveEntry(
                    userID.user_id,
                    asDateString(value)
                );

                setEntryData(data);
            } catch (e) {
                console.log(e);
                setEntryData(null);
            }
        }

        if (value && entryAvailable == 0) {
            getCalendarEntry();
        }
    }, [value]);

    console.log(entryData);

    const entryDiv = (
        <div>
            <div className="FormLabel">Journal Entry for {asDateString(value)}</div>
            <div className="NavLink">Activity Level: {entryData && entryData.activity_level}</div>
            <div className="NavLink">Blood Pressure: {entryData && entryData.blood_pressure}</div>
            <div className="NavLink">Daily Steps Taken: {entryData && entryData.daily_steps}</div>
            <div className="NavLink">Sleep Duration: {entryData && entryData.sleep_duration}</div>
            <div className="NavLink">Sleep Quality: {entryData && entryData.sleep_quality}</div>
            <div className="NavLink">Stress Level: {entryData && entryData.stress_level}</div>
            <div className="NavLink">Notes: {entryData && entryData.notes}</div>
        </div>
    );
    const emptyDiv = <div>No journal entry for {asDateString(value)}</div>;

    return (
        <div className="p-7 rounded-md border-black border-[1px]">
            {entryData ? entryDiv : emptyDiv}
        </div>
    );
}
