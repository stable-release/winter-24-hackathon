"use client"

import { listEmployees } from "@/app/_api/api";
import EmployeesTable from "@/app/_components/Employees/EmployeesTable";
import { useEffect, useState } from "react";

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
        <EmployeesTable employees={employees} />
    )
}

export default Employees;