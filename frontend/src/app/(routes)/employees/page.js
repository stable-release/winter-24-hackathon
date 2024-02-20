"use client"

import { listEmployees } from "@/app/_api/api";
import EmployeesTable from "@/app/_components/Employees/EmployeesTable";
import { useEffect, useState } from "react";
import Link from "next/link";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadEmployees() {
            const abortController = new AbortController();
            setError(null);
            try {
                const employeesFromApi = await listEmployees(abortController.signal);
                setEmployees(employeesFromApi);
            } catch (error) {
                setError(error);
            };
            return () => abortController.abort();
        };

        loadEmployees();
    }, []);
    return (
        <div>
            <div className="flex gap-[20px]">
                <Link href="/employees/new" className="rounded-3xl bg-secondary font-bold p-2 text-xl text-[white] leading-5"> + New Employee</Link>
                <Link href="/dashboard" className="rounded-3xl bg-secondary font-bold p-2 text-xl text-[white] leading-5">Home</Link>
            </div>
            <EmployeesTable employees={employees} />
        </div>
    )
}

export default Employees;