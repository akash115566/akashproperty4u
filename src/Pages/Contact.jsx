import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-box">

        <h2 className="contact-title">Get in Touch</h2>

        <form className="contact-form">
          
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Contact Number</label>
          <input type="tel" placeholder="+91 9876543210" />

          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Message</label>
          <textarea placeholder="How can we help you?" rows="4"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
