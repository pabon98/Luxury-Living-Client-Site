import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <p className="fs-5">Contact</p>
      <h2 className="fw-bolder">Let us Handle Your, <br /> project, professionally </h2>
      <form action="" className="my-2">
        <input
          className="me-2"
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
        <input type="text" name="" id="" placeholder="Last Name" /> <br />
        <input
          className="me-2 mt-3"
          type="text"
          name=""
          id=""
          placeholder="Email Address"
        />
        <input type="text" name="" id="" placeholder="Phone Number" />
        <br /> <br />
        <textarea id="" name="" rows="4" cols="50">
        </textarea> <br />
        <button className="message">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
