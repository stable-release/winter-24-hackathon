import EmployeeRow from "./EmployeeRow";
import Link from "next/link";

export default function EmployeesTable({ employees }) {
    return (
        <div className="flex flex-col">
            <div className="row">
                <Link href="/employees/new">Add New Employee</Link>
                <Link href="/dashboard">Home</Link>
            </div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => 
                <EmployeeRow 
                    key={index} 
                    employee={employee} />)}
            </tbody>
        </table>
        </div>
    )
}