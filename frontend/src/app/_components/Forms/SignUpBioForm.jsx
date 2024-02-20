export default function SignUpBioForm({
    formData,
    onSubmit,
    handleChange,
    error,
}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-3">
                <label htmlFor="birthdate" className="FormLabel">
                    Birthdate
                </label>
                <input
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    autoComplete="birthdate"
                    required={true}
                    placeholder="Birthdate"
                    onChange={handleChange}
                    value={formData.birthdate}
                    className="FormInput"
                />
            </div>
            <div className="flex gap-[50px]">
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="height" className="FormLabel">
                            Height
                        </label>
                        <input
                            id="height"
                            name="height"
                            type="height"
                            autoComplete="height"
                            required={true}
                            placeholder="height"
                            onChange={handleChange}
                            value={formData.height}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="weight" className="FormLabel">
                            Weight
                        </label>
                        <input
                            id="weight"
                            name="weight"
                            type="number"
                            autoComplete="weight"
                            required={true}
                            placeholder="weight"
                            onChange={handleChange}
                            value={formData.weight}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="sex" className="FormLabel">
                            Sex
                        </label>
                        <select name="sex" id="sex" className="FormInput" defaultValue={"none"}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="none">
                                none
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="occupation" className="FormLabel">
                    Occupation
                </label>
                <input
                    id="occupation"
                    name="occupation"
                    type="occupation"
                    autoComplete="occupation"
                    required={true}
                    onChange={handleChange}
                    value={formData.occupation}
                    className="FormInput"
                />
            </div>
            <div className="flex gap-[50px]">
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="income" className="FormLabel">
                            Income
                        </label>
                        <input
                            id="income"
                            name="income"
                            type="number"
                            autoComplete="income"
                            required={true}
                            onChange={handleChange}
                            value={formData.income}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="location" className="FormLabel">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="location"
                            autoComplete="none"
                            required={true}
                            onChange={handleChange}
                            value={formData.location}
                            className="FormInput"
                        />
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="sleeping_disorder"
                            className="FormLabel"
                        >
                            Sleeping Disorder
                        </label>
                        <select
                            name="sleeping_disorder"
                            id="sleeping_disorder"
                            className="FormInput"
                            defaultValue="none"
                        >
                            <option value="none"> none</option>
                            <option value="apnea">Apnea</option>
                            <option value="insomnia">Insomnia</option>
                        </select>
                    </div>
                </div>
            </div>
            {error && <div>{error}</div>}
            <button type="submit" className="FormSubmit">
                Finish Sign Up
            </button>
        </form>
    );
}
