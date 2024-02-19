export default function SignUpBioForm({
    formData,
    onSubmit,
    handleChange,
    error,
}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <input
                id="birthdate"
                name="birthdate"
                type="text"
                autoComplete="birthdate"
                required={true}
                placeholder="birthdate"
                onChange={handleChange}
                value={formData.birthdate}
            />
            <input
                id="height"
                name="height"
                type="height"
                autoComplete="height"
                required={true}
                placeholder="height"
                onChange={handleChange}
                value={formData.height}
            />
            <input
                id="weight"
                name="weight"
                type="number"
                autoComplete="weight"
                required={true}
                placeholder="weight"
                onChange={handleChange}
                value={formData.weight}
            />
            <select name="sex" id="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="none" selected={true}>
                    none
                </option>
            </select>
            <input
                id="occupation"
                name="occupation"
                type="occupation"
                autoComplete="occupation"
                required={true}
                onChange={handleChange}
                value={formData.occupation}
            />
            <input
                id="income"
                name="income"
                type="number"
                autoComplete="income"
                required={true}
                onChange={handleChange}
                value={formData.income}
            />
            <input
                id="location"
                name="location"
                type="location"
                autoComplete="none"
                required={true}
                onChange={handleChange}
                value={formData.location}
            />
            <select name="sleeping_disorder" id="sleeping_disorder">
                <option value="apnea">Apnea</option>
                <option value="insomnia">Insomnia</option>
                <option value="none" selected={true}>
                    none
                </option>
            </select>
            {error && <div>{error}</div>}
            <button type="submit">Finish Sign Up</button>
        </form>
    );
}
