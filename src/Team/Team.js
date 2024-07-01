import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Team.css'

const TeamSection = () => {
  return (
    <section className="container-1 " >
      <div className="align-self-center  pt-5" style={{ textAlign: 'center' }}>
        <h3>Our Team</h3>
      </div>
      <div className="row justify-content-around">
        <div className="mawoe col-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Noagbe Mawoe M. (Project Coordinator)</h5>
              <p className="card-text">A Computer Enthusiast who loves to learn new things.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Role :</strong></li>
              <li className="list-group-item">Front-End Development, Back-End Development, ML Trainer</li>
              <li className="list-group-item"><strong>Contacts Below:</strong></li>
            </ul>
            <div className="card-body">
              <Link to="https://www.linkedin.com/in/mawoe-norgbey-519ba9315">LinkedIn</Link>,
              <Link to="#">norgbeymawoe@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="seti col-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Setiana Ayi-Adoboe</h5>
              <p className="card-text">A Computer Enthusiast who loves to learn new things.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Role :</strong></li>
              <li className="list-group-item">Database Development, ML Trainer</li>
              <li className="list-group-item"><strong>Contacts Below:</strong></li>
            </ul>
            <div className="card-body">
              <Link to="https://www.linkedin.com/in/">LinkedIn</Link>,
              <Link to="#">adoboesetiana@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="nana col-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="col-md-6 float-md-end mb-3 ms-md-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nana Gyan</h5>
              <p className="card-text">A Computer Enthusiast who loves to learn new things.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Role :</strong></li>
              <li className="list-group-item">Back-End Development, ML Trainer</li>
              <li className="list-group-item"><strong>Contacts Below:</strong></li>
            </ul>
            <div className="card-body">
              <Link to="https://www.linkedin.com/in/">LinkedIn</Link>,
              <Link to="#">nanagyan12@gmailcom</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
