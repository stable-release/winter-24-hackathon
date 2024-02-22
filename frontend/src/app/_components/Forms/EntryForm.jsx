import { asDateString, formatAsDate } from "@/app/_api/date-time";
import { useState } from "react";
import RangeSlider from "../Slider/RangeSlider";

export default function EntryForm({
    formData,
    onSubmit,
    handleChange,
    handleSlider,
    sliderValues,
    error,
    today,
}) {
    const todayDate = asDateString(today);
    const selected = "size-[96px] rounded-[48px] border-[0px] bg-[#A6BEE0]";
    const unselected = "size-[96px] rounded-[48px] border-[0px] bg-[#FFFFFF]";
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[40px] p-10">
            <div className="flex flex-col gap-3">
                <div className="FormLabel">Entry Date: {`${todayDate}`}</div>
            </div>
            <section className="flex flex-col items-center mb-[48px]">
                <div className="FormLabel mb-[60px]">
                    How are you feeling today?
                </div>
                <div className="flex gap-5 items-center">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 1 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="1"
                        >
                            <img
                                src={"svg/stressIcons/Happy.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Happy</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 2 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="2"
                        >
                            <img
                                src={"svg/stressIcons/VeryHappy.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Very Happy</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 3 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="3"
                        >
                            <img
                                src={"svg/stressIcons/Sad.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Sad</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 4 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="4"
                        >
                            <img
                                src={"svg/stressIcons/VerySad.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Very Sad</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 5 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="5"
                        >
                            <img
                                src={"svg/stressIcons/Okay.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Okay</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            className={`
                                ${sliderValues[2] == 6 ? selected : unselected}
                                flex items-center justify-center
                            `}
                            onClick={handleSlider[2]}
                            value="6"
                        >
                            <img
                                src={"svg/stressIcons/Anxious.svg"}
                                className="size-[66px]"
                            />
                        </button>
                        <div className="StressLabel">Anxious</div>
                    </div>
                </div>
            </section>
            <div className="flex gap-[50px]">
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="daily_steps" className="FormLabel">
                            Daily Steps
                        </label>
                        <input
                            id="daily_steps"
                            name="daily_steps"
                            type="number"
                            autoComplete="daily_steps"
                            required={true}
                            placeholder="daily_steps"
                            onChange={handleChange}
                            value={formData.daily_steps}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="sleep_quality" className="FormLabel">
                            Blood Pressure
                        </label>
                        <input
                            id="blood_pressure"
                            name="blood_pressure"
                            type="text"
                            autoComplete="blood_pressure"
                            required={true}
                            placeholder="148/42"
                            onChange={handleChange}
                            value={formData.blood_pressure}
                            className="FormInput"
                        />
                    </div>
                </div>
            </div>
            <section>
                <RangeSlider
                    title={"Sleep Quality"}
                    name={"sleepQuality"}
                    step={1}
                    min={1}
                    max={5}
                    defaultValue={0}
                    value={sliderValues[1]}
                    minLabel={"Exhausting"}
                    maxLabel={"Comfortable"}
                    handleSlider={handleSlider[1]}
                />
            </section>
            <section>
                <RangeSlider
                    title={"Activity Level"}
                    name={"activityLevel"}
                    step={1}
                    min={1}
                    max={5}
                    defaultValue={0}
                    value={sliderValues[0]}
                    minLabel={"Sedentary"}
                    maxLabel={"Active"}
                    handleSlider={handleSlider[0]}
                />
            </section>
            <div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="notes" className="FormLabel">
                        Do you want to add anything else?
                    </label>
                    <textarea
                        id="notes"
                        placeholder="I'm feeling great today..."
                        value={sliderValues[3]}
                        onChange={handleSlider[3]}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </div>
            {error && <div>{error}</div>}
            <button type="submit" className="FormSubmit">
                Save Entry
            </button>
        </form>
    );
}
