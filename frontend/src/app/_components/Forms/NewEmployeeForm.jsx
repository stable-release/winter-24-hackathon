import ErrorAlert from "../ErrorAlert/ErrorAlert";

export default function NewEmployeeForm({ formData, handleSubmit, handleChange, handleCancel, error }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="row">
                <div className="col">
                    <label htmlFor="first_name" >First Name:</label>
                    <br />
                    <input 
                    name="first_name"
                    id="first_name"
                    type="text"
                    onChange={handleChange}
                    value={formData.first_name}
                    placeholder="First Name"
                    />
                </div>
                <div className="col">
                    <label htmlFor="last_lame">Last Name:</label>
                    <br />
                    <input 
                    name="last_name"
                    id="last_name"
                    type="text"
                    onChange={handleChange}
                    value={formData.last_name}
                    placeholder="Last Name"
                     />
                </div>
            </div>
            <label htmlFor="email">Email:</label>
            <br />
            <input 
            name="email"
            id="email"
            type="text"
            onChange={handleChange}
            placeholder="Email Address"
            />
            <ErrorAlert error={error} />
            <div className="row">
                <button type="submit">Add Employee</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
            
        </form>
    );
};