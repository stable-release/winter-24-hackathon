import { listEmployees } from "@/app/_api/api";
import { useEffect, useState } from "react"
import EmployeesTable from "./EmployeesTable";
import ErrorAlert from "../ErrorAlert/ErrorAlert";

export default function AdminDashboard({ perm }) {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadEmployees() {
            const abortController = new AbortController();
            setError(null);
            try {
                const employeesFromApi = await listEmployees(perm, abortController.signal);
                setEmployees(employeesFromApi);
                console.log(employees);
            } catch (error) {
                setError(error);
            };
            return () => abortController.abort();
        };

        loadEmployees;
    }, []);

    function deleteEmployee() {
    };

    return (
        <div>
            <h1>Hello, Admin</h1>
            <ErrorAlert error={error} />
            <EmployeesTable employees={employees} deleteEmployee={deleteEmployee} />
        </div>
    );
};