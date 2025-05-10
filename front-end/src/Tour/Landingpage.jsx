import React from 'react'
import "./land.css"
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <div className="main-land">
    <main>
        <section className="hero1">
            <div className="container1">
                <h1>Welcome to Bus Ticket Booking System</h1>
                <p>Every journey begins with a ticket. Where will yours take you today?</p>
                <Link to={"/adminlogin"}><button className="btn-main">Admin Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to={"userlogin"}><button className="btn-main">User Login</button></Link>
            </div>
        </section>
    </main>
    </div>
    </>
  )
}

export default Landingpage