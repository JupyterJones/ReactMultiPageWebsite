import React from "react";
import pict from './images/Home.png';
function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={pict} alt="My tiny home"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Just stop by and pin a note to my front door. Remember the way it looks.
               I have no address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
