import React from 'react'
import {  FaUserAlt } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BusAlertIcon from '@mui/icons-material/BusAlert';
import "./draw.css"
function Drawer() {
  return (
    <>
    <nav className="sidebar">
        <div className="logo">Admin panel</div>
        <div className="nav-links1">
            <Link to={"/dashboard"} ><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/addpackage"}><a href="#"><BusAlertIcon /> Add Available Buses</a></Link>
           
            <Link to={'/managebook'} ><a href="#"><FaUserAlt /> User list</a></Link>
            <Link to={"/logout"} ><a href="#"><GrLogout /> Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Drawer