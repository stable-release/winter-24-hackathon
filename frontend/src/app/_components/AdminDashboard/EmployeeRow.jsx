export default function EmployeeRow({ employee, deleteEmployee }) {
    console.log(employee);
    return <>
        <tr>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td><button name="delete" onClick={deleteEmployee}>Delete</button></td>
        </tr>
    </>
}