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

    const feelings = [
        "Happy",
        "Very Happy",
        "Sad",
        "Very Sad",
        "Okay",
        "Anxious",
    ];

    const sources = [
        "svg/stressIcons/Happy.svg",
        "svg/stressIcons/VeryHappy.svg",
        "svg/stressIcons/Sad.svg",
        "svg/stressIcons/VerySad.svg",
        "svg/stressIcons/Okay.svg",
        "svg/stressIcons/Anxious.svg",
    ];

    const entryDiv = (
        <div>
            <div className="FormLabel mb-2">{asDateString(value)}</div>
            <div className="NavLink flex items-center">
                <div className="size-[40px] bg-[#D0E0F7] rounded-[20px] flex items-center justify-center">
                    <img
                        src={entryData && sources[entryData.stress_level - 1]}
                        className="size-[30px]"
                    />
                </div>
                &nbsp;
                <div className="StressValue">
                    &nbsp;
                    {entryData && feelings[entryData.stress_level - 1]}
                </div>
            </div>
            <div className="NavLink flex">
                Activity Level:{" "}
                <div className="StressValue">
                    &nbsp;
                    {entryData && entryData.activity_level > 1
                        ? "Active"
                        : "Inactive"}
                </div>
            </div>
            <div className="NavLink flex">
                Blood Pressure:{" "}
                <div className="StressValue">
                    &nbsp;{entryData && entryData.blood_pressure}
                </div>
            </div>
            <div className="NavLink flex">
                Daily Steps Taken:{" "}
                <div className="StressValue">
                    &nbsp;{entryData && entryData.daily_steps}
                </div>
            </div>
            <div className="NavLink flex">
                Sleep Duration:{" "}
                <div className="StressValue">
                    &nbsp;{entryData && entryData.sleep_duration}
                </div>
            </div>
            <div className="NavLink flex">
                Sleep Quality:{" "}
                <div className="StressValue">
                    &nbsp;
                    {entryData && entryData.sleep_quality > 1
                        ? "Comfortable"
                        : "Exhausting"}
                </div>
            </div>
            <div className="NavLink">Notes: {entryData && entryData.notes}</div>
        </div>
    );
    const emptyDiv = <div>No journal entry for {asDateString(value)}</div>;

    return (
        <div
            className="p-7 border-black rounded-[15px] border-[1px] bg-[#FFFFFF]"
            style={{ marginTop: entryData ? "0px" : "130px" }}
        >
            {entryData ? entryDiv : emptyDiv}
        </div>
    );
}
