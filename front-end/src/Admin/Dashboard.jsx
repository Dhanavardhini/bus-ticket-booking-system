
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./db.css";

function Dashboard() {
  const [totalPackages, setTotalPackages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const fetchTotalPackages = async () => {
   
  };
  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get("http://localhost/busticketbackend/controllers/api/admin/get/registerget.php");
      setTotalUsers(response.data.length); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchTotalBookings = async () => {
    try {
      const response = await axios.get("http://localhost/busticketbackend/controllers/api/admin/get/busbook.php");
      setTotalBookings(response.data.length); 
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  useEffect(() => {
    fetchTotalPackages();
    fetchTotalUsers();
    fetchTotalBookings();
  }, []);

  return (
    <div className="dbdiv">
      <main className="main-contents">
        <div className="containera">
          <section className="summary-cards">
            <div className="card2">
              <h3>Total Users</h3>
              <p>{totalUsers}</p>
            </div>
            <div className="card2">
              <h3>Total Bookings</h3>
              <p>{totalBookings}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;



