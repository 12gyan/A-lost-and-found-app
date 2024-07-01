import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'; // Assuming you have saved the provided CSS in this file
import Pic from './images/profile2.png'
const Profile = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: 'your@gmail.com',
    bio: '',
    birthday: 'May 3, 1995',
    country: 'Ghana',
    phone: '+233 ',
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: '',
    notifications: {
      itemFound: true,
      itemDescriptionMatch: true,
      newsAndAnnouncements: true,
      weeklyUpdates: false,
    },
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      notifications: { ...formData.notifications, [name]: checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section style={{ minHeight: '60vh' }} className='section-2'>
      <div className="container light-style flex-grow-1 container-p-y">
        <h3 className="font-weight-bold py-3 mb-4">Account settings</h3>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className={`list-group-item list-group-item-action ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => handleTabClick('general')}
                >
                 <h4>General</h4> 
                </a>
                <a
                  className={`list-group-item list-group-item-action ${activeTab === 'change-password' ? 'active' : ''}`}
                  onClick={() => handleTabClick('change-password')}
                >
                  <h4>Change Password</h4>
                </a>
                <a
                  className={`list-group-item list-group-item-action ${activeTab === 'info' ? 'active' : ''}`}
                  onClick={() => handleTabClick('info')}
                >
                  <h4>Info</h4>
                </a>
                <a
                  className={`list-group-item list-group-item-action ${activeTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => handleTabClick('notifications')}
                >
                  <h4>Notifications</h4>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                {activeTab === 'general' && (
                  <div className="tab-pane fade show active" id="account-general">
                    <div className="card-body media align-items-center">
                      <img src={Pic} alt="Profile" className="d-block ui-w-80" />
                      <div className="media-body ml-4">
                        <label className="btn btn-primary mt-2">
                          Upload new photo
                          <input type="file" className="account-settings-fileinput" />
                        </label>
                        &nbsp;
                        <button type="button" className="btn btn-secondary md-btn-flat mt-2">
                          Reset
                        </button>
                        <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control mb-1"
                          value={formData.username}
                          name="username"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.name}
                          name="name"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input
                          type="text"
                          className="form-control mb-1"
                          value={formData.email}
                          name="email"
                          onChange={handleInputChange}
                        />
                        <div className="alert alert-warning mt-3">
                          Your email is not confirmed. Please check your inbox.
                          <br />
                          <a href="javascript:void(0)">Resend confirmation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'change-password' && (
                  <div className="tab-pane fade show active" id="account-change-password">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Current password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="currentPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="newPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Repeat new password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="repeatNewPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'info' && (
                  <div className="tab-pane fade show active" id="account-info">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Bio</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Write short description about yourself"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Birthday</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.birthday}
                          name="birthday"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                        >
                          <option value="Ghana">Ghana</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Togo">Togo</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                      <h6 className="mb-4">Contacts</h6>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.phone}
                          name="phone"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'notifications' && (
                <div className="tab-pane fade show active" id="account-notifications">
                    <div className="card-body pb-2">
                    <h3 className="mb-4">Activity</h3>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            name="itemFound"
                            checked={formData.notifications.itemFound}
                            onChange={handleCheckboxChange}
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Email me when you found my Item</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            name="itemDescriptionMatch"
                            checked={formData.notifications.itemDescriptionMatch}
                            onChange={handleCheckboxChange}
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                            Email me when an item that matches my item's description is found.
                        </span>
                        </label>
                    </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                    <h3 className="mb-4">Application</h3>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            name="newsAndAnnouncements"
                            checked={formData.notifications.newsAndAnnouncements}
                            onChange={handleCheckboxChange}
                        />
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">News and announcements</span>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="switcher">
                        <input
                            type="checkbox"
                            className="switcher-input"
                            name="weeklyUpdates"
                            checked={formData.notifications.weeklyUpdates}
                            onChange={handleCheckboxChange}/>
                        <span className="switcher-indicator">
                            <span className="switcher-yes"></span>
                            <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Weekly updates on your progress</span>
                        </label>
                    </div>
                    </div>
                </div>
            )}

              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Save changes
          </button>
          &nbsp;
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
