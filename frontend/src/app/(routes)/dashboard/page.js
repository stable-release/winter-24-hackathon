"use client";

import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Page() {
    // Auth with cookies 🍪
    const [perm, setPerm] = useState(0);
    const [value, onChange] = useState(new Date());

    useEffect(() => {
      const permission = getCookie("permissions");
      setPerm(permission);
    }, [])

    return (
      <>
        <div>{perm > 0 && <h1>Hello, Dashboard</h1>}</div>
        <div>{perm == 2 ? <Link href="/employees">View Employees</Link> : null}</div>
        <Calendar onChange={onChange} value={value} />
      </>
    );
}
