import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Found.css';

const FoundItemForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    itemName: '',
    timeFound: '',
    dateFound: '',
    category: '',
    subcategory: '',
    locationFound: '',
    ownerName: '',
    itemColour: '',
    itemSize: '',
    itemDescription: '',
    handTo: '',
    itemImage: null  // To store the selected file
  });
  const [showModal, setShowModal] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');

  const subcategories = {
    Cards: ["School ID", "Ghana Card", "ATM Card", "Driver's License", "Voters ID Card", "NHIS Card", "Others"],
    Electronics: ["Mobile Phones", "Laptops", "Smart Watches", "Chargers", "Computer Accessories", "Others"],
    Books: ["Text Books", "Exercise Books", "Story Books", "Others"],
    Clothing: ["Shirt", "Dress", "Scarf", "Shoes", "Boots", "Caps", "Hats", "Others"],
    Accessories: ["Glasses", "School Bags", "Hand Bags", "Ear Ring", "Bracelets", "Rings", "Necklaces", "Pendents", "Pictures", "Others"],
    Others: ["Others"]
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.files[0] }));
    } else if (e.target.type === 'checkbox') {
      setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));
    } else {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const confirmation = `
        <strong>First Name:</strong> ${formData.firstName}<br>
        <strong>Last Name:</strong> ${formData.lastName}<br>
        <strong>Phone Number:</strong> ${formData.phoneNumber}<br>
        <strong>Item Name:</strong> ${formData.itemName}<br>
        <strong>Time Found:</strong> ${formData.timeFound}<br>
        <strong>Date Found:</strong> ${formData.dateFound}<br>
        <strong>Category:</strong> ${formData.category}<br>
        <strong>Sub-Category:</strong> ${formData.subcategory}<br>
        <strong>Location Found:</strong> ${formData.locationFound}<br>
        <strong>Owner's Name:</strong> ${formData.ownerName}<br>
        <strong>Item's Colour:</strong> ${formData.itemColour}<br>
        <strong>Item Size:</strong> ${formData.itemSize}<br>
        <strong>Description:</strong> ${formData.itemDescription}<br>
        <strong>Handed to Campus Security:</strong> ${formData.handTo ? 'Yes' : 'No'}<br>
      `;
      setConfirmationText(confirmation);
      setShowModal(true);
    } else {
      e.target.classList.add('was-validated');
    }
  };

  const handleConfirm = () => {
    console.log('Submitting found item report...');
    setShowModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      itemName: '',
      timeFound: '',
      dateFound: '',
      category: '',
      subcategory: '',
      locationFound: '',
      ownerName: '',
      itemColour: '',
      itemSize: '',
      itemDescription: '',
      handTo: '',
      itemImage: null
    });
  };

  useEffect(() => {
    const subcategorySelect = document.getElementById('subcategory');
    if (formData.category) {
      subcategorySelect.innerHTML = '<option selected disabled value="">Select sub-category</option>';
      subcategories[formData.category].forEach(subcategory => {
        const option = document.createElement('option');
        option.value = subcategory;
        option.textContent = subcategory;
        subcategorySelect.appendChild(option);
      });
    } else {
      subcategorySelect.innerHTML = '<option selected disabled value="">Select sub-category</option>';
    }
  }, [formData.category]);

  return (
    <section style={{ minHeight: '60vh',paddingTop:'70px' }} className="section mt-5">
      <h1 className="m-3 pb-3">Report Found Items</h1>
      <h4 className="m-3">Fill this form</h4>
      <form id="found-item-form" className="row g-3 needs-validation m-3" onSubmit={handleSubmit} noValidate>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <div className="input-group has-validation">
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Please input a valid phone number.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide the item's name.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="timeFound" className="form-label">Time Found</label>
          <select
            className="form-select"
            id="timeFound"
            name="timeFound"
            value={formData.timeFound}
            onChange={handleChange}
            required
          >
            <option selected disabled value="">Select time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
          <div className="invalid-feedback">Please select a time.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="dateFound" className="form-label">Date Found</label>
          <input
            type="date"
            className="form-control"
            id="dateFound"
            name="dateFound"
            value={formData.dateFound}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please select a date.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Item Category</label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option selected disabled value="">Select category</option>
            <option value="Cards">Cards</option>
            <option value="Electronics">Electronic Devices</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
            <option value="Others">Others</option>
          </select>
          <div className="invalid-feedback">Please make a selection.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="subcategory" className="form-label">Item Sub-Category</label>
          <select
            className="form-select"
            id="subcategory"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            required
          >
            <option selected disabled value="">Select sub-category</option>
          </select>
          <div className="invalid-feedback">Please make a selection.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="locationFound" className="form-label">Location Found</label>
          <input
            type="text"
            className="form-control"
            id="locationFound"
            name="locationFound"
            value={formData.locationFound}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide the location the item was found.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="ownerName" className="form-label">Owner's Name (If known)</label>
          <input
            type="text"
            className="form-control"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="itemColour" className="form-label">Item's Colour</label>
          <input
            type="text"
            className="form-control"
            id="itemColour"
            name="itemColour"
            value={formData.itemColour}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide the item's colour.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="itemSize" className="form-label">Item Size</label>
          <select
            className="form-select"
            id="itemSize"
            name="itemSize"
            value={formData.itemSize}
            onChange={handleChange}
            required
          >
            <option selected disabled value="">Select size</option>
            <option>Really Small</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Big</option>
            <option>Very Big</option>
          </select>
          <div className="invalid-feedback">Please select a size description</div>
        </div>
        <div className="col-12">
          <label htmlFor="itemDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="itemDescription"
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleChange}
            required
          ></textarea>
          <div className="invalid-feedback">Please provide a description of the item.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="itemImage" className="form-label">Image of the Item</label>
          <input
            type="file"
            className="form-control"
            id="itemImage"
            name="itemImage"
            onChange={handleChange}
            accept="image/*"
          />
          <div className="invalid-feedback">Example invalid form file feedback.</div>
        </div>
        <div className="col-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="handTo"
              name="handTo"
              checked={formData.handTo}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="handTo">
              Would you prefer to hand this item to the campus security (Preferred).
            </label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="handToOwner"
              name="handTo"
              checked={!formData.handTo}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="handToOwner">
              Would you prefer to hand this item to the owner. This may take a while.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button id="submit-btn" className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>

      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Found Item Details</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: confirmationText }}></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Edit</button>
              <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </section>
  );
};

export default FoundItemForm;
