// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./book.css";

// function Book() {
//   const [buses, setBuses] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost/busticketbackend/controllers/api/User/Get/busimg.php")
//       .then((response) => {
//         setBuses(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching buses:", error);
//       });
//   }, []);

//   return (
//     <div className="main-book">
//       <h2 className="book-heading">AVAILABLE BUSES</h2>
//       <div className="bus-list">
//         {buses.length > 0 ? (
//           buses.map((bus) => (
//             <div className="bus-card" key={bus.id}>
//               <img
//                 src={`http://localhost/busticketbackend/controllers/api/User/upload/${bus.file}`}
//                 alt={bus.bus_name}
//                 className="bus-image"
//               />
//               <div className="bus-details">
//                 <h3 className="bus-name">{bus.bus_name}</h3>
//                 <p className="bus-route">Route: {bus.from} → {bus.to}</p>
//                 <p className="bus-date">Date: {bus.date}</p>
//                 <p className="bus-type">Type: {bus.bus_type}</p>
//                 <p className="bus-price">Price: ₹{bus.price}</p>
//               </div>
             
//               <Link
//   to={`/twodetail`}
//   state={{
//     id: bus.id,
//     price: bus.price,
//     from: bus.from,
//     to: bus.to,
  
    
//   }}
// >
//   <button className="book-button">Book Now</button>
// </Link>

//             </div>
//           ))
//         ) : (
//           <p className="no-buses">No buses available.</p>
//         )} 
//       </div>
//     </div>
//   );
// }

// export default Book;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./book.css";

function Book() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/busticketbackend/controllers/api/User/Get/busimg.php")
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching buses:", error);
      });
  }, []);

  return (
    <div className="main-book">
      <h2 className="book-heading">AVAILABLE BUSES</h2>
      <div className="bus-list">
        {buses.length > 0 ? (
          buses.map((bus) => (
            <div className="bus-card" key={bus.id}>
              <img
                src={`http://localhost/busticketbackend/controllers/api/User/upload/${bus.file}`}
                alt={bus.bus_name}
                className="bus-image"
              />
              <div className="bus-details">
                <h3 className="bus-name">{bus.bus_name}</h3>
                <p className="bus-route">Route: {bus.from} → {bus.to}</p>
                <p className="bus-date">Date: {bus.date}</p>
                <p className="bus-type">Type: {bus.bus_type}</p>
                <p className="bus-price">Price: ₹{bus.price}</p>
              </div>

              <Link
                to={`/twodetail`}
                state={{
                  id: bus.id,
                  price: bus.price,
                  from: bus.from,
                  to: bus.to,
                  bus_name: bus.bus_name, // Added
                  bus_type: bus.bus_type, // Added
                }}
              >
                <button className="book-button">Book Now</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-buses">No buses available.</p>
        )}
      </div>
    </div>
  );
}

export default Book;
