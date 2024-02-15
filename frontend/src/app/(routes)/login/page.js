"use client";

import { authenticateUser } from "@/app/_api/api";
import LoginForm from "@/app/_components/Forms/LoginForm";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
    const router = useRouter();

    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    /**
     * Authentication API call with username and password
     * Upon successful response, set cookies to permission details
     * Otherwise, create new error
     */
    useEffect(() => {
        async function submitForm() {
            console.log("here");
            const { username = "", permissions = 0 } = await authenticateUser(
                formData
            );
            console.log(username);
            console.log(permissions);
            if (username && permissions) {
                setCookie("username", username);
                setCookie("permissions", permissions);
                router.push("/dashboard");
            } else {
                setError("Incorrect credentials");
                setSubmit(false);
            }
        }
        if (submit) {
            submitForm();
        }
    }, [submit]);

    return (
        <div>
            Login Page
            <LoginForm
                onSubmit={onSubmit}
                handleChange={handleChange}
                formData={formData}
                error={error}
            />
        </div>
    );
}
