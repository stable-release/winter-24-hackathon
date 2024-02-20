"use client";

import { signUpUser } from "@/app/_api/auth.api";
import Footer from "@/app/_components/Footer/Footer";
import SignUpForm from "@/app/_components/Forms/SignUpForm";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUp() {
    const router = useRouter();

    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        permissions: 1,
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
     * Authentication API call with sign up details
     * Upon successful response, set cookies to permission details
     * Otherwise, create new error
     */
    useEffect(() => {
        async function submitForm() {
            try {
                const res = await signUpUser(
                    formData.FirstName,
                    formData.LastName,
                    formData.email,
                    formData.password,
                    formData.permissions
                );

                console.log("here");
                if (res.permissions != undefined && res.permissions > 0) {
                    setCookie("username", res.username);
                    setCookie("permissions", res.permissions);
                    router.push("/signup/bio");
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
            <div className="w-1/2 px-5 pt-[100px]">
                <div className="Title mb-[40px]">Welcome to Thrive</div>
                <SignUpForm
                    onSubmit={onSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    error={error}
                />
            </div>
        </div>
    );
}
