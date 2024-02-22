"use client";

import { returnUserDetails, returnUserID } from "@/app/_api/api";
import { recommendStrategy } from "@/app/_api/recommender.api";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { strategies } from "./strategies";
import { asDateString, formatAsDate } from "@/app/_api/date-time";
import EntryComponent from "@/app/_components/Entry/EntryComponent";
import { retrieveEntry } from "@/app/_api/entries.api";
import CalendarEntry from "@/app/_components/Entry/CalendarEntry";

export default function Page() {
    // Auth with cookies 🍪
    const [perm, setPerm] = useState(0);
    const [email, setEmail] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const [rec, setRec] = useState("");
    const [calendarValue, onChange] = useState(new Date());
    const router = useRouter();

    useEffect(() => {
        const permission = getCookie("permissions");
        const username = getCookie("username");
        setEmail(username);
        setPerm(permission);
    }, []);

    useEffect(() => {
        async function getUserDetails() {
            const user = await returnUserDetails(email);
            setUserDetails(user.user);
            const recommendation = await recommendStrategy(email);
            const strat = Math.round(Math.random() * 2);
            // console.log("recommend", recommendation.strategy);
            // console.log("strat", strat);
            setRec(strategies[recommendation.strategy][strat]);
        }

        if (email) {
            getUserDetails();
        }
    }, [email]);

    /**
     * 0 = Dash
     * 1 = Entry
     * 2 = Loading (Default)
     */
    const [entryAvailable, isEntryAvailable] = useState(2);
    const [submitEntry, setSubmitEntry] = useState(false);

    useEffect(() => {
        async function checkEntry() {
            // await res entry for today's date
            // if date exists then switch entry available to false
            // otherwise, true
            try {
                const userID = await returnUserID(getCookie("username"));
                const response = await retrieveEntry(
                    userID.user_id,
                    asDateString(calendarValue)
                );

                if (response.entry_date) {
                    isEntryAvailable(0);
                } else {
                    isEntryAvailable(1);
                }
            } catch (e) {
                isEntryAvailable(1);
            }
        }

        if (entryAvailable) {
            checkEntry();
        }
    }, [submitEntry]);

    const dash = (
        <div className="flex">
            <div className="w-[700px] flex flex-col">
                <div
                    className={
                        perm > 1
                            ? "Title pl-[40px] mb-[30px] mt-[55px]"
                            : "Title pl-[40px] mb-[60px] mt-[55px]"
                    }
                >
                    Hello, {userDetails ? `${userDetails.first_name}` : ""}
                </div>
                <div>
                    {perm > 1 ? (
                        <Link
                            href="/employees"
                            className="w-[508px] pl-[40px] mb-[12px] flex flex-col FormLabel"
                        >
                            View Employees
                        </Link>
                    ) : null}
                </div>
                <div className="w-[508px] pl-[40px] flex flex-col mb-[20px]">
                    <div className="h-[27px] mb-[18p] RecLabel">
                        Current recommended coping strategy:
                    </div>
                    <div className="w-[508px] rounded-[15px] border-[1px] border-black flex justify-center items-center">
                        <div className="w-[402px] text-left Recommendation my-6">
                            {rec ? rec : ""}
                        </div>
                    </div>
                </div>
                <div className="w-[508px] pl-[40px] flex flex-col">
                    <div className="h-[27px] mb-[18p] RecLabel">
                        My current challenges:
                    </div>
                    <div className="w-[508px] h-[230] flex flex-col justify-center items-center">
                        <div className="w-full rounded-[15px] border-black border-[1px] flex justify-center mb-[18px]">
                            <div className="w-[402px] h-[68px] flex items-center text-left Recommendation gap-4">
                                <img
                                    src="/svg/sleepIcon.svg"
                                    className="size-8"
                                />
                                Get Better Sleep
                            </div>
                        </div>
                        <div className="w-full rounded-[15px] border-black border-[1px] flex justify-center">
                            <div className="w-[402px] h-[68px] flex items-center text-left Recommendation gap-4">
                                <img
                                    src="/svg/stressIcon.svg"
                                    className="size-8"
                                />
                                Reduce My Stress Levels
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-auto py-[5px] items-center justify-center h-full">
                <div className="bg-[#F9F9F9] px-[25px] py-[25px] flex flex-col rounded-[32px]">
                    <div className="h-1/2 mb-[30px]">
                        <Calendar onChange={onChange} value={calendarValue} className="rounded-[15px]" />
                    </div>
                    <div>
                        <CalendarEntry
                            value={calendarValue}
                            entryAvailable={entryAvailable}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    if (getCookie("permissions") == 0) {
        router.push("/");
    } else {
        if (entryAvailable == 1) {
            return (
                <EntryComponent
                    userDetails={userDetails}
                    calendarValue={calendarValue}
                    email={email}
                    setSubmitEntry={setSubmitEntry}
                />
            );
        } else if (entryAvailable == 2) {
            return <div className="Title">Loading...</div>;
        } else {
            return dash;
        }
    }
}
