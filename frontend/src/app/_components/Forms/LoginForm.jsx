export default function LoginForm({ formData, onSubmit, handleChange, error }) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center">
            <div className="w-[446px]">
                <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="Email"
                    required={true}
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.username}
                    className="FormInput mb-[32px]"
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
                    className="FormInput mb-[164px]"
                />
            </div>
            {error && <div>{error}</div>}
            <button type="submit" className="LoginSubmit">
                Sign In
            </button>
        </form>
    );
}
