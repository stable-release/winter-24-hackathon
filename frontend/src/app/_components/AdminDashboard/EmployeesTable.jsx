import EmployeeRow from "./EmployeeRow";

export default function EmployeesTable({employees, deleteEmployee}) {
    console.log(employees);
    return (
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
                employee={employee} 
                deleteEmployee={() => deleteEmployee(employee.user_id)} />)}
        </tbody>
    </table>
    )
}