import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.address.trim() ||
            !formData.city.trim()
        ) {
            alert("All fields are required");
            return;
        }

        // Check email format
        if (!formData.email.includes("@")) {
            alert("Invalid email format");
            return;
        }

        // Save to localStorage
        localStorage.setItem("userFormData", JSON.stringify(formData));
        alert("Data saved successfully");

        // Clear form
        setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
        });
    };

    return (
        <div className="container">
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        rows="4"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
