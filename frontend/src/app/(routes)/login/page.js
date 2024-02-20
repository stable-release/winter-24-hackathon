"use client";

import { authenticateUser } from "@/app/_api/auth.api";
import LoginForm from "@/app/_components/Forms/LoginForm";
import { getCookie, setCookie } from "cookies-next";
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
            try {
                const res = await authenticateUser(
                    formData.username,
                    formData.password
                );

                if (res.permissions != undefined && res.permissions > 0) {
                    setCookie("username", res.username);
                    setCookie("permissions", res.permissions);
                    router.push("/dashboard");
                } else {
                    setError("Validation Error");
                }
            } catch (e) {
                setCookie("permissions", 0);
                setError("Incorrect credentials");
                setSubmit(false);
            }
        }
        if (submit) {
            submitForm();
        }
    }, [submit]);

    return (
        <div className="flex w-full">
            <img src="/svg/splash.svg" className="w-1/2" />
            <div className="flex flex-col items-center w-1/2 px-5 pt-[100px]">
                <div className="h-[782px] w-[600px] bg-[#F0F2F2] flex flex-col rounded-[50px] justify-center items-center">
                    <div className="Title mb-[40px]">Welcome Back,</div>
                    <LoginForm
                        onSubmit={onSubmit}
                        handleChange={handleChange}
                        formData={formData}
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
}
