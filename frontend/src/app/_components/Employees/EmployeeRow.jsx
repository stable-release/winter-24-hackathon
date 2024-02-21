import { useState } from "react";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import { deleteEmployee } from "@/app/_api/api";
import Image from "next/image";
import profilePic from "../../../../img/pexels-karolina-grabowska-4467687.jpg";

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
        <tr className="hover:bg-[#F8F8F8]">
            <td className="h-[50px]">
                <div className="flex flex-row">
                    <Image src="" alt="profilePic" height={50} width={50} className="rounded-full"/>
                    <p className="flex self-center ml-[20px]">{employee.first_name} {employee.last_name}</p>
                </div>
            </td>
            <td>{employee.email}</td>
            <td><button name="delete" onClick={removeEmployee} className="bg-[red] text-[white] rounded-md font-bold p-1">Delete</button></td>
        </tr>
    </>
}