import React from "react";
import FormInput from "../form-input/form-input.component.js";
import CustomButton from "../custom-button/custom-button.component.js";
import "./contactusemail.styles.css";
class ContactusEmail extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <a className="contactButton" href="mailTo:ayousefi@uoguelph.ca">
          GET IN TOUCH WITH EMAIL
        </a>
        <br></br>
        <a
          className="contactButton"
          href="https://www.linkedin.com/in/arman-yousefi-babb1669/"
        >
          Visit LinkedIn
        </a>
      </div>
    );
  }
}

export default ContactusEmail;
