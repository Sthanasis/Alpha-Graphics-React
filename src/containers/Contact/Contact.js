import React from "react";

import "./Contact.css";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const contact = () => (
  <React.Fragment>
    <Backdrop backdrop />
    <div className="Contact-Container">
      <div className="ContactMe">Contact Me</div>
      <div className="contact-phone">
        <div data-icon="phone" />
        <div className="fit-center">+30 6976 732659</div>
      </div>
      <div className="contact-email">
        <div data-icon="email" />
        <div className="fit-center">alexandros.efthymiou7@gmail.com</div>
      </div>
    </div>
  </React.Fragment>
);

export default contact;
