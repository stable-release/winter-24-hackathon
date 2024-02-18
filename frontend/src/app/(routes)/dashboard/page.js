"use client";

import AdminDashboard from "@/app/_components/AdminDashboard/AdminDashboard";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page() {
    // Auth with cookies 🍪
    const [perm, setPerm] = useState(0);

    const permissions = {
      1: <h1>Hello, Dashboard</h1>,
      2: <AdminDashboard perm={perm} />,
    };

    useEffect(() => {
      const permission = getCookie("permissions");
      setPerm(permission);
    }, [])

    return <div>{perm > 0 && permissions[perm]}</div>;
}
