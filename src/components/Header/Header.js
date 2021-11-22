import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Header.css'
import img from '../../images/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const Header = () => {
    return (
        <div className="header">
        <div className="row d-flex justify-content-center align-items-center p-4">
          {/* Menubar component for showing menues */}
            <Menubar></Menubar>
          <div className="col-md-6">
            <h1 className=" fw-bolder mx-4">
              We Build <br /> Your Dream
            </h1>
            <p >Online Easte Agency, the modern way to sell your own home, <br />You can use Griffin Residential to market your property</p>
            <button className="border-0 rounded px-5 py-2 ">Booking</button>
          </div>
          <div className="col-md-6">
          <img className="w-75" src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Header;