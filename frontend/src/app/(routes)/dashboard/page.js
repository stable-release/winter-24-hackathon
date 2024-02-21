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
import { formatAsDate } from "@/app/_api/date-time";
import EntryForm from "@/app/_components/Forms/EntryForm";
import EntryComponent from "@/app/_components/Entry/EntryComponent";

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
            <div className="flex flex-col ml-auto">
                <div className="h-1/2 my-10">
                    <Calendar onChange={onChange} value={calendarValue} />
                </div>
                <div>Hi</div>
            </div>
        </div>
    );

    if (getCookie("permissions") == 0) {
        router.push("/");
    } else {
        if (userDetails) {
            return (
                <EntryComponent
                    userDetails={userDetails}
                    calendarValue={calendarValue}
                    email={email}
                />
            );
        }
    }
}
