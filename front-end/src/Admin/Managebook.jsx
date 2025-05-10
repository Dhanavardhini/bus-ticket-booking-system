// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './managebook.css';

// function Managebook() {
//   const [bookings, setBookings] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editData, setEditData] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost/busticketbackend/controllers/api/admin/get/busbook.php')
//       .then((response) => {
//         if (Array.isArray(response.data)) {
//           setBookings(response.data);
//         } else {
//           console.error('Unexpected response format', response.data);
//         }
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const handleEditClick = (id) => {
//     setEditId(id);
//     setEditData(bookings.find((booking) => booking.id === id));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditData({ ...editData, [name]: value });
//   };

//   const handleSaveClick = () => {
//     axios.post('http://localhost/busticketbackend/controllers/api/admin/put/busbookupdate.php', editData)
//       .then(() => {
//         setBookings((prev) => prev.map((booking) => (booking.id === editData.id ? editData : booking)));
//         setEditId(null);
//       })
//       .catch((error) => console.error('Error saving changes:', error));
//   };

//   const handleDeleteClick = (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       axios.post('http://localhost/busticketbackend/controllers/api/admin/delete/busbook.php', { id })
//         .then(() => setBookings((prev) => prev.filter((booking) => booking.id !== id)))
//         .catch((error) => console.error('Error deleting booking:', error));
//     }
//   };

//   return (
//     <div className='wholed'>
//     <div className="managea">
//       <div className="table-containerv">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>From</th>
//               <th>To</th>
//               <th>Date</th>
//               <th>Bus Type</th>
//               <th>Tickets</th>
//               <th>Price</th>
//               <th>Payment</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <tr key={booking.id}>
//                   {editId === booking.id ? (
//                     <>
//                       <td>{booking.id}</td>
//                       <td><input type="text" name="name" value={editData.name} onChange={handleInputChange} /></td>
//                       <td><input type="text" name="email" value={editData.email} onChange={handleInputChange} /></td>
//                       <td><input type="text" name="phone" value={editData.phone} onChange={handleInputChange} /></td>
//                       <td><input type="text" name="from" value={editData.from} onChange={handleInputChange} /></td>
//                       <td><input type="text" name="to" value={editData.to} onChange={handleInputChange} /></td>
//                       <td><input type="date" name="date" value={editData.date} onChange={handleInputChange} /></td>
//                       <td><input type="text" name="bustype" value={editData.bustype} onChange={handleInputChange} /></td>
//                       <td><input type="number" name="tickets" value={editData.tickets} onChange={handleInputChange} /></td>
//                       <td><input type="number" name="price" value={editData.price} onChange={handleInputChange} /></td>
//                       <td>
//                         <select name="payment" value={editData.payment} onChange={handleInputChange}>
//                           <option value="Paid">Paid</option>
//                           <option value="Pending">Pending</option>
//                         </select>
//                       </td>
//                       <td>
//                         <select name="status" value={editData.status} onChange={handleInputChange}>
//                           <option value="Approved">Approved</option>
//                           <option value="Unapproved">Unapproved</option>
//                         </select>
//                       </td>
//                       <td>
//                         <button onClick={handleSaveClick} className="btn save">Save</button>
//                         <button onClick={() => setEditId(null)} className="btn cancel">Cancel</button>
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td>{booking.id}</td>
//                       <td>{booking.name}</td>
//                       <td>{booking.email}</td>
//                       <td>{booking.phone}</td>
//                       <td>{booking.from}</td>
//                       <td>{booking.to}</td>
//                       <td>{booking.date}</td>
//                       <td>{booking.bustype}</td>
//                       <td>{booking.tickets}</td>
//                       <td>{booking.price}</td>
//                       <td>{booking.payment}</td>
//                       <td>{booking.status}</td>
//                       <td>
//                         <button onClick={() => handleEditClick(booking.id)} className="btn edit">Edit</button>
//                         <button onClick={() => handleDeleteClick(booking.id)} className="btn delete">Delete</button>
//                       </td>
//                     </>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={13} className="no-data">No bookings found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Managebook;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './managebook.css';

function Managebook() {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    axios.get('http://localhost/busticketbackend/controllers/api/admin/get/busbook.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error('Unexpected response format', response.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditClick = (id) => {
    setEditId(id);
    setEditData(bookings.find((booking) => booking.id === id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveClick = () => {
    axios.post('http://localhost/busticketbackend/controllers/api/admin/put/busbookupdate.php', editData)
      .then(() => {
        setBookings((prev) => prev.map((booking) => (booking.id === editData.id ? editData : booking)));
        setEditId(null);
      })
      .catch((error) => console.error('Error saving changes:', error));
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      axios.post('http://localhost/busticketbackend/controllers/api/admin/delete/busbook.php', { id })
        .then(() => setBookings((prev) => prev.filter((booking) => booking.id !== id)))
        .catch((error) => console.error('Error deleting booking:', error));
    }
  };

  return (
    <div className='wholed'>
      <div className="managea">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
              <th>Bus Type</th>
              <th>Tickets</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  {editId === booking.id ? (
                    <>
                      <td>{booking.id}</td>
                      <td><input type="text" name="name" value={editData.name} onChange={handleInputChange} /></td>
                      <td><input type="text" name="email" value={editData.email} onChange={handleInputChange} /></td>
                      <td><input type="text" name="phone" value={editData.phone} onChange={handleInputChange} /></td>
                      <td><input type="text" name="from" value={editData.from} onChange={handleInputChange} /></td>
                      <td><input type="text" name="to" value={editData.to} onChange={handleInputChange} /></td>
                      <td><input type="date" name="date" value={editData.date} onChange={handleInputChange} /></td>
                      <td><input type="text" name="bustype" value={editData.bustype} onChange={handleInputChange} /></td>
                      <td><input type="number" name="tickets" value={editData.tickets} onChange={handleInputChange} /></td>
                      <td><input type="number" name="price" value={editData.price} onChange={handleInputChange} /></td>
                      <td>
                        <select name="payment" value={editData.payment} onChange={handleInputChange}>
                          <option value="Paid">Paid</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td>
                        <select name="status" value={editData.status} onChange={handleInputChange}>
                          <option value="Approved">Approved</option>
                          <option value="Unapproved">Unapproved</option>
                        </select>
                      </td>
                      <td>
                        <button onClick={handleSaveClick} className="btn save">Save</button>
                        <button onClick={() => setEditId(null)} className="btn cancel">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{booking.id}</td>
                      <td>{booking.name}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.from}</td>
                      <td>{booking.to}</td>
                      <td>{booking.date}</td>
                      <td>{booking.bustype}</td>
                      <td>{booking.tickets}</td>
                      <td>{booking.price}</td>
                      <td>{booking.payment}</td>
                      <td>{booking.status}</td>
                      <td>
                        <button onClick={() => handleEditClick(booking.id)} className="btn edit">Edit</button>
                        <button onClick={() => handleDeleteClick(booking.id)} className="btn delete">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={13} className="no-data">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Managebook;
