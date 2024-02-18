import { useState } from "react";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import { deleteEmployee } from "@/app/_api/api";

export default function EmployeeRow({ employee }) {
    const [error, setError] = useState(null)

    const removeEmployee = async (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you wish to delete this employee? This cannot be undone.")) {
            setError(null);
            const abortController = new AbortController();
            try {
                await deleteEmployee(employee.user_id, abortController.signal);
                window.location.reload();
            } catch (error) {
                setError(error);
            };
            return () => abortController.abort();
        };
    };

    return <>
        <ErrorAlert error={error} />
        <tr>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td><button name="delete" onClick={removeEmployee}>Delete</button></td>
        </tr>
    </>
}