import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, MenuItem, Container, Paper, Typography, Grid } from "@mui/material";
import "./bookplace.css";

function Bookplace() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract bus details from the state passed via Link
  const { id, price, from, to, bus_type, bus_name } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: from || "",
    to: to || "",
    date: "",
    bus_type: bus_type || "",
    tickets: 1, // ✅ Default value set to 1
    price: price || 0,
    payment: "",
    bus_name: bus_name || "",
    status: ""
  });

  useEffect(() => {
    if (formData.tickets && price) {
      setFormData((prevData) => ({
        ...prevData,
        price: Number(formData.tickets) * price, // ✅ Price updated based on ticket count
      }));
    }
  }, [formData.tickets, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post(
        "http://localhost/busticketbackend/controllers/api/User/post/busbook.php",
        {
          ...formData,
          bustype: formData.bus_type,
          tickets: Number(formData.tickets),
          package_id: id,
          id: id,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Booking successful!");
      navigate("/bookpack");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="wholes">
    <Container maxWidth="md">
      <Paper elevation={3} className="booking-containers">
        <Typography variant="h4" className="booking-titles">
          Bus Ticket Booking
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required />
            </Grid>
            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Grid>
            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone" type="number" name="phone" value={formData.phone} onChange={handleChange} required />
            </Grid>
            {/* From */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="From" name="from" value={formData.from} onChange={handleChange} required />
            </Grid>
            {/* To */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="To" name="to" value={formData.to} onChange={handleChange} required />
            </Grid>
            {/* Date */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Date" type="date" name="date" value={formData.date} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* Bus Type Dropdown */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth select label="Bus Type" name="bus_type" value={formData.bus_type} onChange={handleChange} required>
                <MenuItem value="AC">AC</MenuItem>
                <MenuItem value="Non-AC">Non-AC</MenuItem>
                <MenuItem value="Sleeper">Sleeper</MenuItem>
              </TextField>
            </Grid>
            {/* Tickets */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Number of Tickets" type="number" name="tickets" value={formData.tickets} onChange={handleChange} required inputProps={{ min: 1 }} />
            </Grid>
            {/* Payment Mode */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth select label="Payment Mode" name="payment" value={formData.payment} onChange={handleChange} required>
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Debit Card">Debit Card</MenuItem>
                <MenuItem value="Net Banking">Net Banking</MenuItem>
                <MenuItem value="UPI">UPI</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
              </TextField>
            </Grid>
            {/* Price */}
            <Grid item xs={12}>
              <TextField fullWidth label="Price" value={formData.price || "N/A"} disabled />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" fullWidth className="booking-button">
            Book Now
          </Button>
        </form>
      </Paper>
    </Container>
    </div>
  );
}

export default Bookplace;
