import React from 'react'
import "./userslist.css"
import { AiFillDelete } from 'react-icons/ai'
function Userslist() {
  return (
    <>
        <div className="ud">
    <div className="containeruser">
        <table className="users-table">
            <thead>
                <tr className="table-row">
                    <th className="table-header">ID</th>
                    <th className="table-header">Traveller Name</th>
                    <th className="table-header">Place name</th>
                    <th className="table-header">Username</th>
                    <th className="table-header">Password</th>
                    <th className="table-header">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-row">
                    <td className="table-cell">1</td>
                    <td className="table-cell">vajra</td>
                    <td className="table-cell">Kerala</td>  
                    <td className="table-cell">vajra007</td>
                    <td className="table-cell">vajra#123</td>
                    <td className="table-cell">
                        <button className="delete-btn" title="Delete user">
                        <AiFillDelete />
                        </button>
                    </td>
                </tr>
                <tr className="table-row">
                <td className="table-cell">2</td>
                    <td className="table-cell">Adhi</td>
                    <td className="table-cell">Goa</td>
                    <td className="table-cell">Adhi555</td>
                    <td className="table-cell">2546</td>
                    <td className="table-cell">
                        <button className="delete-btn" title="Delete user">
                        <AiFillDelete />
                        </button>
                    </td>
                </tr>
                <tr className="table-row">
                <td className="table-cell">3</td>
                    <td className="table-cell">anas</td>
                    <td className="table-cell">Srilanka</td>
                    <td className="table-cell">anas458</td>
                    <td className="table-cell">5458</td>
                    <td className="table-cell">
                        <button className="delete-btn" title="Delete user">
                        <AiFillDelete />
                        </button>
                    </td>
                </tr>
                <tr className="table-row">
                <td className="table-cell">4</td>
                    <td className="table-cell">gowtham</td>
                    <td className="table-cell">Kashmir</td>
                    <td className="table-cell">abdulrahman</td>
                    <td className="table-cell">gowtham</td>
                    <td className="table-cell">
                        <button className="delete-btn" title="Delete user">
                        <AiFillDelete />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}

export default Userslist