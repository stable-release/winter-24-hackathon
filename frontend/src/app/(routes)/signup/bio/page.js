"use client";

import { signUpUser } from "@/app/_api/auth.api";
import SignUpBioForm from "@/app/_components/Forms/SignUpBioForm";
import SignUpForm from "@/app/_components/Forms/SignUpForm";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Bio() {
    const router = useRouter();

    // Auth with cookies 🍪
    const [perm, setPerm] = useState(0);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const permission = getCookie("permissions");
        const username = getCookie("username");
        setPerm(permission);
        setUsername(username);
    }, []);

    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        birthdate: "",
        height: 0,
        weight: 0,
        sex: "",
        occupation: "Doctor",
        income: 0,
        location: "Moon",
        sleeping_disorder: "",
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
     * Authentication API call with bio details
     * Upon successful response, redirect to dashboard
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
            <div className="w-1/2 px-5 pt-[100px]">
                <div className="Title mb-[40px]">Welcome to Thrive</div>
                <SignUpBioForm
                    onSubmit={onSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    error={error}
                />
            </div>
        </div>
    );
}
