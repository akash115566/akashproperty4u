import React from "react";
import "../Style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🔹 LEFT : Logo + Social */}
        <div className="footer-col footer-left">
          <img src="/lo2.webp" alt="Property 4 You" className="footer-logo" />
          <h3>PROPERTY 4 YOU</h3>

          <div className="footer-social">
            <a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>

        {/* 🔹 CENTER : Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/legal">Legal Advisor</Link></li>
          </ul>
        </div>

        {/* 🔹 RIGHT : Company + Contact */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/service">About Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="footer-contact">
            <p><i className="fa-solid fa-phone"></i> +91 70424 38293</p>
            <p><i className="fa-solid fa-envelope"></i> property4you@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Property 4 You. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
