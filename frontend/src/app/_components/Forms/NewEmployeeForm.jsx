import ErrorAlert from "../ErrorAlert/ErrorAlert";

export default function NewEmployeeForm({ formData, handleSubmit, handleChange, handleCancel, error }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] max-w-[450px]">
            <div className="flex gap-[20px]">
                <input 
                    name="first_name"
                    id="first_name"
                    type="text"
                    onChange={handleChange}
                    value={formData.first_name}
                    placeholder="First Name"
                    className="FormInput"
                />
                <input 
                    name="last_name"
                    id="last_name"
                    type="text"
                    onChange={handleChange}
                    value={formData.last_name}
                    placeholder="Last Name"
                    className="FormInput"
                />
            </div>
            <input 
                name="email"
                id="email"
                type="text"
                onChange={handleChange}
                placeholder="Email Address"
                className="FormInput"
            />
            <ErrorAlert error={error} />
            <div className="flex gap-[20px]">
                <button type="submit" className="new-user-btn bg-secondary rounded-3xl font-semibold text-[30px] text-[white] w-[300px] p-1">Add User</button>
                <button type="button" className="new user-btn bg-[crimson] rounded-3xl text-[30px] text-[white] w-[250px] p-1" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};