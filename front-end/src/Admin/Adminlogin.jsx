import React from 'react'
import "./adminlog.css"
import { Link } from 'react-router-dom'

function Adminlogin() {
  return (
    <>
    <div className="big-log1">
         <div className="container-log1">
        <h1 className='h11'>Admin Login</h1>
        <form className='frm1'>
            <label className='lbl'>Username</label>
            <input className='inp1' type="text" required />
            
            <label className='lbl'>Password</label>
            <input className='inp1' type="password" required/>
            
           <Link to={"/dashboard"}><button className='bt-log' type="submit">Log In</button></Link> 
        </form>
        
    </div>
    </div>
    </>
  )
}

export default Adminlogin