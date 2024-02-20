"use client"

import { createUser } from "@/app/_api/api";
import NewEmployeeForm from "@/app/_components/Forms/NewEmployeeForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewEmployee() {
    const router = useRouter();
    const intitialFormState = {
        first_name: "",
        last_name: "",
        email: "",
    };

    const [formData, setFormData] = useState(intitialFormState);
    const [error, setError] = useState(null);

    const handleChange = ({ target }) => {
        const value = target.value;
        const newFormData = {
            ...formData,
            [target.name]: value 
        }
        setFormData(newFormData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        setError(null);
        try {
            await createUser(formData, abortController.signal)
            setFormData(intitialFormState);
            router.push("/employees")
        } catch (error) {
            setError(error);
        };
    };

    const handleCancel = (event) => {
        event.preventDefault();
        router.back();
    }
    
    return (
        <div className="box-border font-bold text-6xl">
            <h1 className="pb-2">New Employee</h1>
            <NewEmployeeForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                error={error}
            />
        </div>
    )
};