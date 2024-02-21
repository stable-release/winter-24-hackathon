import { useEffect, useState } from "react";
import EntryForm from "../Forms/EntryForm";
import { returnUserID } from "@/app/_api/api";
import { getCookie, setCookie } from "cookies-next";
import { createEntry } from "@/app/_api/entries.api";
import { asDateString } from "@/app/_api/date-time";
import { useRouter } from "next/navigation";

export default function EntryComponent({ userDetails, calendarValue, email, onDone }) {
    const router = useRouter();
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        user_id: "",
        entry_date: calendarValue,
        daily_steps: 1,
        sleep_duration: 1,
        blood_pressure: "",
    });

    const [notes, setNotes] = useState("");
    const [activityLevel, setActivityLevel] = useState(1);
    const [stressLevel, setStressLevel] = useState(1);
    const [sleepQuality, setSleepQuality] = useState(1);

    const handleActivityLevel = (e) => {
        setActivityLevel(e.target.value);
    };

    const handleStressLevel = (e) => {
        setStressLevel(e.target.value);
    };

    const handleSleepQuality = (e) => {
        setSleepQuality(e.target.value);
    };

    const handleNotes = (e) => {
        setNotes(e.target.value);
    }

    const [h, setHeight] = useState();
    useEffect(() => {
        const height = window.innerHeight;
        const newH = Number(height) - 70 - 146 - 136;
        setHeight(newH);
    }, []);

    useEffect(() => {
        async function setEntryData() {
            const user_id = await returnUserID(email);
            setFormData({
                user_id: user_id.user_id,
                entry_date: calendarValue,
                daily_steps: 1,
                sleep_duration: 1,
                blood_pressure: "",
                notes: "",
            });
        }
        if (userDetails) {
            setEntryData();
        }
    }, [calendarValue, userDetails]);

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
                const return_ID = await returnUserID(getCookie("username"));
                const user_id = return_ID.user_id;
                const res = await createEntry(
                    user_id,
                    asDateString(formData.entry_date),
                    activityLevel,
                    formData.daily_steps,
                    stressLevel,
                    formData.sleep_duration,
                    sleepQuality,
                    formData.blood_pressure,
                    notes
                );
                if (res.entry_date) {
                    console.log("done")
                    router.refresh();
                } else {
                    setError("Validation Error");
                }
            } catch (e) {
                setError(e);
                setSubmit(false);
            }
        }
        if (submit) {
            submitForm();
        }
    }, [submit]);
    return (
        <div className="w-full flex">
            <div className="w-full flex flex-col">
                <div className={"Title pl-[40px] mb-[10px] mt-[55px]"}>
                    Welcome back,{" "}
                    {userDetails ? `${userDetails.first_name}` : ""}
                </div>
                <div
                    className=" w-full overflow-auto"
                    style={{ height: `${h}px` }}
                >
                    <div className="DailyModal ml-[40px]">
                        <EntryForm
                            today={calendarValue}
                            formData={formData}
                            onSubmit={onSubmit}
                            handleChange={handleChange}
                            sliderValues={[
                                activityLevel,
                                sleepQuality,
                                stressLevel,
                                notes
                            ]}
                            handleSlider={[
                                handleActivityLevel,
                                handleSleepQuality,
                                handleStressLevel,
                                handleNotes
                            ]}
                            error={error}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
