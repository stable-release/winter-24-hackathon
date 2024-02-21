"use client"

import { listEmployees } from "@/app/_api/api";
import EmployeesTable from "@/app/_components/Employees/EmployeesTable";
import { useEffect, useState } from "react";
import Link from "next/link";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [searchData, setSearchData] = useState("");
    const [filtered, setFiltered] = useState([]);

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

    const handleSearch = ({target}) => {
        const value = target.value.toLowerCase();
        setSearchData(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredEmployees = employees.filter(employee => employee.first_name.toLowerCase().includes(searchData));
        setFiltered(filteredEmployees);
    }

    return (
        <div className="flex flex-col mt-[10px]">
            <div className="flex gap-[20px] mb-[20px]">
                <Link href="/employees/new" className="rounded-3xl p-2 flex flex-row"><div className="add-user"> + </div><p className="self-center ml-[10px] text-xl">Add User</p></Link>
                <form className="ml-[150px]" onSubmit={handleSubmit}>
                    <input
                    name="search"
                    id="search"
                    type="search"
                    value={searchData}
                    onChange={handleSearch}
                    placeholder='Search...'
                    className="rounded-full w-[400px] bg-[#F8F8F8]"
                    />
                    <button className="bg-secondary rounded-full p-2 text-[white] ml-[5px] h-[42px]">Search</button>
                </form>
            </div>
            <hr/>
            <div className="">
                <EmployeesTable employees={filtered.length ? filtered : employees} />
            </div>
        </div>
    )
}

export default Employees;