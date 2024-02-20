"use client";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavElements() {
    const [enabled, setEnabled] = useState(false);
    const [signout, setSignout] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (signout) {
            setCookie("permissions", 0)
            router.push("/login")
        }
    }, [signout])


    return (
        <div className="h-[146px] w-full flex items-center bg-[#F9F9F9]">
            <img src="svg/Logo.svg" className="size-24 ml-[28px]" />
            <button className="ml-auto" onClick={()=> setEnabled((prev) => !prev)}>
                <img src="svg/infoIcon.svg" className="size-14" />
            </button>
            <img
                src="svg/ProfilePlaceholder.svg"
                className="size-14 ml-[66px] mr-[60px]"
            />
            {enabled && <div className="absolute border-black border-2 top-[120px] right-[150px] bg-white w-[125px] h-[50px] rounded-2xl flex justify-center items-center">
                <button className="font-bold" onClick={() => setSignout((prev) => true)}>Sign Out</button>
            </div>}
        </div>
    );
}
