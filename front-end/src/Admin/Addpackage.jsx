import React, { useState } from "react";
import axios from "axios";
import "./package.css";

function Addpackage() {
  const [formData, setFormData] = useState({
    busName: "",
    from: "",
    to: "",
    date: "",
    busType: "",
    price: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("bus_name", formData.busName);
    payload.append("from", formData.from);
    payload.append("to", formData.to);
    payload.append("date", formData.date);
    payload.append("bus_type", formData.busType);
    payload.append("price", formData.price);
    payload.append("file", formData.file);

    try {
      const response = await axios.post("http://localhost/busticketbackend/controllers/api/User/post/busimg.php", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message || "Bus ticket added successfully!");
    } catch (error) {
      console.error("Error adding bus ticket:", error);
      alert(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="form-wrapper">
          <h1>Available Buses</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="busName">Bus Name:</label>
                <input
                  type="text"
                  id="busName"
                  name="busName"
                  value={formData.busName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="from">From:</label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">To:</label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="busType">Bus Type:</label>
                <input
                  type="text"
                  id="busType"
                  name="busType"
                  value={formData.busType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Ticket Price:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">Upload Ticket Image:</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="file-input"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Book Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addpackage;
