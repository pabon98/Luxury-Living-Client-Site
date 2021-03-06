import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                <i class="fas fa-gopuram fa-2x"></i>
                  <span className="fs-2 ms-1 text-white ms-2">Luxury Living</span>
                  <p className="mt-4 ">
                    <small>
                      Luxury Leaving is a Appartment Sales Site
                      <br />
                      You can Choose your best <br /> Flats at resonable cost!!
                    </small>
                    <p className="mt-4 ">
                      <i className="fab fa-facebook-square fa-2x"></i>
                      <i className="fab fa-instagram-square fa-2x ms-3"></i>
                      <i className="fab fa-twitter-square fa-2x ms-3"></i>
                    </p>
                  </p>

                  <p className="mt-5">
                    <small>Zemez © . All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <Link to="/home" className="footer-menu">
                      <li>Home</li>
                    </Link>
                    <Link to="/admin" className="footer-menu">
                      <li>Admin</li>
                    </Link>
                    <Link to="/Projects" className="footer-menu">
                      <li>Projects</li>
                    </Link>
                    <Link to="/about" className="footer-menu">
                      <li> About Us </li>
                    </Link>
                    <Link to="/contact" className="footer-menu">
                      <li> contact Us </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the registration</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <button className="p-2">Registration</button>
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon"></div>
                    <div>
                      <h5>
                        <i className="fas fa-phone-square-alt"></i> +1 8 800 555
                        35 35
                      </h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="foter-phone-icon"></div>
                    <div>
                      <p>
                        160 Broadway, New York, NY 10038,
                        <br /> 102 1st Avenue, New York, NY 100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reserved">
            <hr />
            <p>© 2022 Luxury Living, All Rights Reserved. Design By Hasin Anjum Pabon</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;