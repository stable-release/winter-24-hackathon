export default function SignInForm({
    formData,
    onSubmit,
    handleChange,
    error,
}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <input
                id="FirstName"
                name="FirstName"
                type="FirstName"
                autoComplete="FirstName"
                required={true}
                placeholder="FirstName"
                onChange={handleChange}
                value={formData.FirstName}
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
            />
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required={true}
                placeholder="Email@example.com"
                onChange={handleChange}
                value={formData.email}
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
            />
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required={true}
                onChange={handleChange}
                value={formData.confirmPassword}
            />
            {error && <div>{error}</div>}
            <button type="submit">Create an Account</button>
        </form>
    );
}
