import EmployeeRow from "./EmployeeRow";
import Link from "next/link";
import Image from "next/image";
// import profilePic from "../../../../img/pexels-karolina-grabowska-4467687.jpg"

export default function EmployeesTable({ employees }) {
    return (
        <table className="table-fixed">
            <thead>
                <tr>
                    <th className="table-head1">Name:</th>
                    <th className="table-head1">Email:</th>
                    <th className="table-head2">Actions:</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-[#F8F8F8]">
                    <td className="h-[50px]">
                        <div className="flex flex-row">
                        {/* Images can be directly referenced via public folder as root */}
                            <img src={"/img/pexels-karolina-grabowska-4467687.jpg"} alt="profilePic" height={50} width={50} className="rounded-full" />
                            <p className="flex self-center ml-[20px]">Caity Moss</p>
                        </div>
                    </td>
                    <td>caity@team.com</td>
                    <td><button name="delete" className="bg-[red] text-[white] rounded-md font-bold p-1">Delete</button></td>
                </tr>
                {employees.map((employee, index) => 
                <EmployeeRow 
                    key={index} 
                    employee={employee} />)}
            </tbody>
        </table>
    )
}