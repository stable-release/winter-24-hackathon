import EmployeeRow from "./EmployeeRow";
import Link from "next/link";

export default function EmployeesTable({ employees }) {
    return (
        <table className="flex flex-col">
            <thead>
                <tr className="flex gap-[30px] pt-[10px]">
                    <th className="rounded-md bg-secondary text-[white] w-32">First Name</th>
                    <th className="rounded-md bg-secondary text-[white] w-32">Last Name</th>
                    <th className="rounded-md bg-secondary text-[white] w-32">Email</th>
                    <th className="rounded-md bg-secondary text-[white] w-32 ml-[200px]">Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => 
                <EmployeeRow 
                    key={index} 
                    employee={employee} />)}
            </tbody>
        </table>
    )
}