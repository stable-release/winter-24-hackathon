"use client";

import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [h, setHeight] = useState();
    useEffect(() => {
        const height = window.innerHeight;
        const newH = Number(height) - 146 - 136;
        setHeight(newH);
    }, []);

    const perm = getCookie("permissions");

    return (
        <div className="flex flex-col h-full w-full">
            <nav className="h-[146px] w-full flex items-center bg-[#F9F9F9]">
                <img src="svg/Logo.svg" className="size-24 ml-[28px]" />
                <div className="flex gap-5 ml-[135px]">
                    <div className="NavLink">About Us</div>
                    <div className="NavLink">Blog</div>
                </div>
                <div className="ml-auto mr-8 flex">
                    <div className="flex gap-8 items-center">
                        {perm > 0 ? (
                            <Link href={"/dashboard"} className="LandingAccount drop-shadow-lg h-[42px] flex items-center">Account</Link>
                        ) : (
                            ""
                        )}
                        <div className="flex gap-8 w-[329px] h-[42px] LandingActions items-center drop-shadow-lg">
                            <Link href={"/login"} className="flex items-center justify-center ml-[30px]">
                                <div className="LandingLogin">Login</div>
                            </Link>
                            <div className="flex items-center justify-center h-full w-[175px] ml-auto LandingSignup drop-shadow-lg">
                                <Link href={"/signup"} className="flex items-center justify-center">
                                    <div>Sign Up</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="w-full" style={{ height: `${h}px` }}>
                <div
                    className="bg-cover h-full bg-center bg-[url('bgCover.svg')]
             flex flex-col items-center justify-center"
                >
                    <div className="flex flex-col w-full h-full items-center justify-center backdrop-blur-sm">
                        <div className="CoverTitle flex flex-col items-center justify-center">
                            Take back control
                            <div className="flex">
                                of how{" "}
                                <div className="font-bold">&nbsp;YOU&nbsp;</div>{" "}
                                feel
                            </div>
                        </div>
                        <div className="w-[678px] h-[115px] CoverSubtitle text-center backdrop-blur-sm">
                            Take control of your mental health. Track your
                            moods, celebrate your progress, and explore tailored
                            coping strategies.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
