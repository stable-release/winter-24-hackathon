export default function LoginForm({formData, onSubmit, handleChange, error}) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required={true}
                placeholder="Username"
                onChange={handleChange}
                value={formData.username}
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
            { error && <div>{error}</div>}
            <button type="submit">Submit</button>
        </form>
    );
}
