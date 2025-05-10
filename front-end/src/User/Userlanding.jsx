import React from 'react';
import { Link } from 'react-router-dom';
import "./userland.css";

function Userlanding() {
  return (
    <>
      <div className="user1-main">
        <nav className="navbar-user">
          <div className="navbar-container">
            <div className="logo">User Panel</div>
            <ul className="nav-links">
              <Link to={"/homepage"}><li><a href="#">Home</a></li></Link>
              <Link to={"/mybooking"}><li><a href="#">My Bookings</a></li></Link>
              <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
            </ul>
          </div>
        </nav>

        <div className="hero-image1">
          <div className="hero-text">
            <h1>Book Your Bus Tickets Easily</h1>
            <p>Find and reserve bus tickets for your journey</p>
            <Link to={"/bookpack"}><a href="#" className="cta-button">Booking Bus Ticket</a></Link>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <p>&copy; 2024 Bus Ticket Booking System. All rights reserved.</p>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Userlanding;
