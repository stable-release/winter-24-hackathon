import ErrorAlert from "../ErrorAlert/ErrorAlert";

export default function NewEmployeeForm({ formData, handleSubmit, handleChange, handleCancel, error }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
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
                <button type="submit" className="FormSubmit flex-2">Add Employee</button>
                <button type="button" className="bg-red-700 rounded-3xl p-3 font-bold text-2xl text-white leading-7 flex-1" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};