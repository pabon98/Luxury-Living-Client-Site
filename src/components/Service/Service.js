import React from 'react';
import box1 from '../../images/Icon/affordable 1.png'
import box2 from '../../images/Icon/apartment 1.png'
import box3 from '../../images/Icon/lessee 1.png'
import Contact from '../Contact/Contact';
import './Service.css'

const Service = () => {
    return (
        <div className="container">
            <div className="my-4">
           <p className="fs-5">Service</p>
           <h2 className="fw-bold">
        We are an agency tailored to all <br /> clients needs that always delivers</h2>
        <div className="my-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-3 shadow p-3 mb-5 bg-body rounded">
                 <img className="w-25" src={box1} alt="" />
                 <h3>Office Interior Design</h3>
                 <h3>$299</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.</p>
                </div>
                <div className="col-md-3 ms-4 shadow p-3 mb-5 bg-body rounded">
                <img className="w-25" src={box2} alt="" />
                 <h3>Showroom Design</h3>
                 <h3>$399</h3>
                 <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, molestiae.</p>
                </div>
                <div className="col-md-3 ms-4 shadow p-3 mb-5 bg-body rounded">
                <img className="w-25" src={box3} alt="" />
                 <h3>Residential/home</h3>
                 <h3>$499</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cupiditate!</p>
                </div>
            </div>
            <button className="explore">Explore more</button>
        </div>
        <Contact></Contact>
        </div>
        </div>
    );
};

export default Service;