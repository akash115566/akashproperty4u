import React, { useState } from "react";
import "../Style/contact.css"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919927239876"; // 🔥 country code ke sath (no +)

    const text = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };
  return (
    <div className="contact-page">
      <div className="contact-box">

        <h2 className="contact-title">Get in Touch</h2>

        <form className="contact-form"  onSubmit={handleSubmit}>
          
          <label>Full Name</label>
          <input  type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required />

          <label>Contact Number</label>
          <input  type="tel"
          name="phone"
          placeholder="+91 9876543210"
          value={formData.phone}
          onChange={handleChange}
          required/>

          <label>Email Address</label>
          <input  type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}/>

          <label>Message</label>
          <textarea name="message"
          placeholder="How can we help you?"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
