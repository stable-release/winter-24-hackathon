import { useState } from "react";

export default function RangeSlider({
    title,
    name,
    step,
    min,
    max,
    value,
    minLabel,
    maxLabel,
    handleSlider,
}) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex">
                <label className="FormLabel" htmlFor={name}>{`${title}`}</label>
                <div className="ml-4 FormLabel">{value}</div>
            </div>
            <input
                id={name}
                type="range"
                min={min}
                max={max}
                step={step}
                onChange={handleSlider}
                className="w-full"
                defaultValue={value}
            />
            <div className="flex">
                <div className="FormLabel">{minLabel ? minLabel : min}</div>
                <div className="ml-auto FormLabel">
                    {maxLabel ? maxLabel : max}
                </div>
            </div>
        </div>
    );
}
