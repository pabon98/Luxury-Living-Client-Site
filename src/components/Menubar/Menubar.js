import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 33069.png';
import './Menubar.css'

const Menubar = () => {
    return (
        <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-img">
                <img className="w-75" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                  {/* Using Link from react router dom */}
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/admin" className="items">
                    <li>Admin</li>
                  </Link>
                  <Link to="/projects" className="items">
                    <li>Projects</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About</li>
                  </Link>
                  <Link to="contact" className="items">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;