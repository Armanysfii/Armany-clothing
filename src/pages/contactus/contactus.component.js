import React from "react";
import "./contactus.styles.css";
import ContactusEmail from "../../components/contactus-email/contactus-email.component";

const Contactus = () => {
  return (
    <div className="container">
      <h1 className="brand">
        <span>Armany</span> Clothing
      </h1>
      <div className="wrapper">
        <div className="company-info">
          <h3>Armany Clothing LTD</h3>
          <ul>
            <li>
              <i className="fa fa-road"></i> 1280 Steeles ave E
            </li>
            <li>
              <i className="fa fa-phone"></i> (647) 770-0037
            </li>
            <li>
              <i className="fa fa-envelope"></i> ayousefi@uoguelph.ca
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Us</h3>
          <div className="alert">Your message has been sent</div>
          <ContactusEmail />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
