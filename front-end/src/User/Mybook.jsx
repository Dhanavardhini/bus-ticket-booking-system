import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mybook.css"; // Keep styling here

function Mybook() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost/busticketbackend/controllers/api/admin/get/busbook.php"
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div className="wrape">
    <div className="mybook-containerd">
      <h2 className="mybook-titled">MY BOOKINGS</h2>
      <table className="mybook-tables">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Bus Type</th>
            <th>Tickets</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.email}</td>
                <td>{booking.from}</td>
                <td>{booking.to}</td>
                <td>{booking.date}</td>
                <td>{booking.bustype}</td>
                <td>{booking.tickets}</td>
                <td>{booking.price}</td>
                <td>{booking.payment}</td>
                <td>{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="no-data">No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}   

export default Mybook;
