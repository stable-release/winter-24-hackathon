export default function SignUpForm({
    formData,
    onSubmit,
    handleChange,
    error,
}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-[40px]">
            <div className="flex gap-[20px]">
                <input
                    id="FirstName"
                    name="FirstName"
                    type="FirstName"
                    autoComplete="FirstName"
                    required={true}
                    placeholder="FirstName"
                    onChange={handleChange}
                    value={formData.FirstName}
                    className="FormInput"
                />
                <input
                    id="LastName"
                    name="LastName"
                    type="LastName"
                    autoComplete="LastName"
                    required={true}
                    placeholder="LastName"
                    onChange={handleChange}
                    value={formData.LastName}
                    className="FormInput"
                />
            </div>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required={true}
                placeholder="Email@example.com"
                onChange={handleChange}
                value={formData.email}
                className="FormInput"
            />
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required={true}
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                className="FormInput"
            />
            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="none"
                placeholder="Confirm Password"
                required={true}
                onChange={handleChange}
                value={formData.confirmPassword}
                className="FormInput"
            />
            <div className="flex gap-[35px]">
                <input
                    type="checkbox"
                    className="size-8 bg-[#e2e1de] hover:bg-[#e2e1de] cursor-pointer 
                    border-none focus:outline-none checked:bg-[#e2e1de] focus:border-none
                    checked:outline-none shadow-2xl"
                />
                <div className="h-[29px] leading-7 text-[14px]">
                    I agree to the Privacy Policy
                </div>
            </div>
            {error && <div>{error}</div>}
            <button type="submit" className="FormSubmit">
                Create an Account
            </button>
        </form>
    );
}
