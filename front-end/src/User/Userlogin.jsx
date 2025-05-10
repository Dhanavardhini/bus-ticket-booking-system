import React, { useState } from 'react';
import axios from 'axios'; 
import './userlog.css';

function Userlogin() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const response = await axios.post(
        'http://localhost/busticketbackend/controllers/api/User/Get/register.php', 
        payload
      );
      console.log('Login response:', response.data);

      if (response.status) {
        window.location.href = '/userpanel';
      } else {
        alert('Login failed, please check your credentials.');
      }
    } 
    catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid User Id & Password.');
    }
  };

  return (
    <div className="big-log">
      <div className="container-log">
        <h1 className="h1">User Login</h1>
        <form className="frm" onSubmit={handleLogin}>
          <label className="lbl">Email</label>
          <input
            className="inp"
            type="text"
            id="email"
            name="email"
            value={email} 
            onChange={(e) => setemail(e.target.value)}  
            required
          />

          <label className="lbl" htmlFor="password">Password</label>
          <input
            className="inp"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bt2" type="submit">
            Log In
          </button>
        </form>

        {/* New User Registration Link */}
        <p className="register-text">
          New User? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Userlogin;
