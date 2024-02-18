"use client";

import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
    // Auth with cookies 🍪
    const [perm, setPerm] = useState(0);

    useEffect(() => {
      const permission = getCookie("permissions");
      setPerm(permission);
    }, [])

    return (
      <>
        <div>{perm > 0 && <h1>Hello, Dashboard</h1>}</div>
        <div>{perm == 2 ? <Link href="/employees">View Employees</Link> : null}</div>
      </>
    );
}
