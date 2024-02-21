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
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[40px] p-10">
            <div className="flex flex-col gap-3">
                <div className="FormLabel">
                    Entry Date: {`${today}`}
                </div>
            </div>
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
                    title={"Stress Level"}
                    name={"stressLevel"}
                    step={1}
                    min={1}
                    max={5}
                    defaultValue={0}
                    value={sliderValues[2]}
                    minLabel={"Low"}
                    maxLabel={"High"}
                    handleSlider={handleSlider[2]}
                />
            </section>
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
            {/* <div className="flex gap-[50px]">
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="height" className="FormLabel">
                            Activity Level
                        </label>
                        <input
                            id="activity_level"
                            name="activity_level"
                            type="activity_level"
                            autoComplete="activity_level"
                            required={true}
                            placeholder="activity_level"
                            onChange={handleChange}
                            value={formData.activity_level}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="stress_level" className="FormLabel">
                            Stress Level
                        </label>
                        <input
                            id="stress_level"
                            name="stress_level"
                            type="number"
                            autoComplete="stress_level"
                            required={true}
                            placeholder="stress_level"
                            onChange={handleChange}
                            value={formData.stress_level}
                            className="FormInput"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-[50px]">
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="sleep_duration" className="FormLabel">
                            Sleep Duration
                        </label>
                        <input
                            id="sleep_duration"
                            name="sleep_duration"
                            type="sleep_duration"
                            autoComplete="sleep_duration"
                            required={true}
                            placeholder="sleep_duration"
                            onChange={handleChange}
                            value={formData.sleep_duration}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="sleep_quality" className="FormLabel">
                            Sleep Quality
                        </label>
                        <input
                            id="sleep_quality"
                            name="sleep_quality"
                            type="sleep_quality"
                            autoComplete="sleep_quality"
                            required={true}
                            placeholder="sleep_quality"
                            onChange={handleChange}
                            value={formData.sleep_quality}
                            className="FormInput"
                        />
                    </div>
                </div>
            </div> */}
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
