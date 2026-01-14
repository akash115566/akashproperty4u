import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";

import {
  FaFacebookF,  FaTwitter,  FaLinkedinIn,  FaInstagram,  FaYoutube,  FaSearch,} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


  
      {/* Main Navbar */}
      <nav style={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "#fff",       // themeColor removed
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
        transition: "all 0.3s ease"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#111" }}><img
    src="./lo2.webp"
    alt="property4you-react"
    style={{ height: "40px", width: "80px" }}
  /></div>

          {/* Navbar Links */}
         <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "20px" }}>

            <Link to="/" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Home</Link>
                        <Link to="/service" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>About</Link>
            <div onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)} style={{ position: "relative" }}>
              <Link to="" style={{ ...linkStyle, display: "flex", alignItems: "center", color:"#111" }}>Service ▾</Link>
              {isAboutOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",   // themeColor removed
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "180px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}>
                  <Link to="/project" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Full Project Location</Link>
                  <Link to="/drone" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Drone Shot</Link>
                  <Link to="/internet" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Interview with Host/Director</Link>
                   <Link to="/special" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Special Scheme Planning</Link>
                                 <Link to="/brokerage" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Brokerage Scheme</Link>
                </div>
              )}
            </div>
            {/* <Link to="/award" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Award</Link> */}

<Link
  to="/"
  state={{ scrollTo: "top-projects" }}
  onClick={handleLinkClick}
  style={{ ...linkStyle, color: "#111" }}
>
  Top Project
</Link>

            <Link to="/media" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Media</Link>
            <Link to="/contact" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Contact</Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ display: "none", flexDirection: "column", cursor: "pointer", gap: "5px" }}>
            <span style={{ width: "25px", height: "3px", background: "#111" }}></span>
            <span style={{ width: "25px", height: "3px", background: "#111" }}></span>
            <span style={{ width: "25px", height: "3px", background: "#111" }}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", background: "#fff", padding: "10px 0", width:"100%"}}>
            <Link to="/" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Home</Link>
                        <Link to="/service" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>About</Link>
            <div style={{ width: "100%", textAlign: "center" }}>
             <div
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();   // 🔥 kisi bhi parent click ko roke
    setIsAboutOpen((prev) => !prev);
  }}
  style={{
    ...linkStyle,
    display: "block",
    cursor: "pointer",
    color: "#111"
  }}
>
  Service ▾
</div>

              {isAboutOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "5px" }}>
                  <Link to="/project" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Full Project Location</Link>
                  <Link to="/drone" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Drone Shot</Link>
                  <Link to="/internet" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Interview with Host/Director</Link>
                   <Link to="/special" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Special Scheme Planning</Link>
                                 <Link to="/brokerage" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#111" }}>Brokerage Scheme</Link>
                   
                </div>
              )}
            </div>
            {/* <Link to="/award" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Award</Link> */}

         <Link to="/"state={{ scrollTo: "top-projects" }}onClick={handleLinkClick}style={{ ...linkStyle, color: "#111" }}>Top Project</Link>

            <Link to="/media" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Media</Link>
            <Link to="/contact" onClick={handleLinkClick} style={{ ...linkStyle, color:"#111" }}>Contact</Link>
          </div>
        )}

        <style>
          {`
            @media (max-width: 768px) {
              .hamburger { display: flex !important; }
              .nav-links { display: none !important; }
            }
          `}
        </style>
      </nav>
    </>
  );
};

const linkStyle = { textDecoration: "none", fontWeight: "500" };
const dropdownLinkStyle = { ...linkStyle, padding: "10px 15px", textAlign: "left" };

export default Navbar;
