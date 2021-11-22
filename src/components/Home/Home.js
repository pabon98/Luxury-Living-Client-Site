import React from "react";
import "./Home.css";
import img1 from '../../images/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png'
import img2 from '../../images/Image/Mask Group-1.png'
import img3 from '../../images/Image/Mask Group.png'
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <p className="fs-5">Projects</p>
      <h2 className="fw-bold">
        Discover the latest Interior Design <br /> available Today
      </h2>
      <div className="my-5">
       <div className="container">
       <div className="row">
          <div className="col-md-4">
            <img width="400px" height="300px" className="" src={img1} alt="" />
          </div>
          <div className="col-md-4">
          <img width="400px" height="300px" src={img2} alt="" />
          </div>
          <div className="col-md-4">
           <img width="400px" height="300px"src={img3} alt="" />
          </div>
        </div>
       </div>
      </div>
      <Service></Service>
    </div>
  );
};

export default Home;
