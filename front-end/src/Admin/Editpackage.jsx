import React from 'react'

function Editpackage() {
  return (
    <>
    <div className="main-2">
   <div className="twomain">
   <div className="container-two">
        <h1>Edit Packages</h1>
        <form action="#" method="POST" enctype="multipart/form-data">
            <div className="form-grid">
                <div className="form-group">
                    <label for="vehicle-name">Package Name:</label>
                    <input type="text" id="vehicle-name" name="vehicle-name" required/>
                </div>
                <div className="form-group">
                    <label for="vehicle-name">City Name:</label>
                    <input type="text" id="vehicle-name" name="vehicle-name" required/>
                </div>

                <div className="form-group">
                    <label for="vehicle-category">Category:</label>
                    <select id="vehicle-category" name="vehicle-category" required>
                        <option value="scooter">Abroad</option>
                        <option value="motorcycle">Local</option>
                        
                    </select>
                </div>

              
                <div className="form-group">
                    <label for="register-number">Package Id:</label>
                    <input type="text" id="register-number" name="register-number" required/>
                </div>

                <div className="form-group">
                    <label for="rental-price">Package Cost:</label>
                    <input type="number" id="rental-price" name="rental-price" min="0" step="0.01" required/>
                </div>

                <div className="form-group description-group">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>


                <div className="form-group">
                    <label for="image">Image:</label>
                    <input type="file" id="image" name="image" className="file-input" accept="image/*" required/>
                </div>
            </div>

            <button type="submit" className="submit-btn">Edit Package</button>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Editpackage