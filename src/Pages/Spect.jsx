import React, { useState } from "react";
import "../Style/spect.css";

const sliderImages = [
  "/ba7.jpg",
  "/ba8.jpg",
 "/ba9.jpg",
 "/ba10.jpg",
];

const Spect = () => {
  const [current, setCurrent] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="spect-navbar">
        <div className="logo">SPECTRUM</div>

        <ul className="nav-links">
          <li>Home</li>

          <li onClick={() => setOpenMenu(openMenu === "company" ? null : "company")}>
            Company
            {openMenu === "company" && (
              <ul className="dropdown">
                <li>About Us</li>
                <li>Management</li>
                <li>Vision & Mission</li>
              </ul>
            )}
          </li>

          <li onClick={() => setOpenMenu(openMenu === "projects" ? null : "projects")}>
            Projects
            {openMenu === "projects" && (
              <ul className="dropdown">
                <li>Spectrum Metro I</li>
                <li>Spectrum Metro II</li>
              </ul>
            )}
          </li>

          <li onClick={() => setOpenMenu(openMenu === "media" ? null : "media")}>
            Media
            {openMenu === "media" && (
              <ul className="dropdown">
                <li>News</li>
                <li>Press Release</li>
                <li>Events</li>
              </ul>
            )}
          </li>

          <li>Blog</li>

          <li onClick={() => setOpenMenu(openMenu === "gallery" ? null : "gallery")}>
            Photo Gallery
            {openMenu === "gallery" && (
              <ul className="dropdown">
                <li>Project Gallery</li>
                <li>Event Gallery</li>
              </ul>
            )}
          </li>

          <li>Contact Us</li>
        </ul>
      </nav>

      {/* ================= SLIDER ================= */}
      <section className="spect-slider">
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className={`spect-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <button className="slider-btn prev" onClick={prevSlide}>‹</button>
        <button className="slider-btn next" onClick={nextSlide}>›</button>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="spect-why">
        <div className="spect-overlay">
          <div className="spect-why-content">
            <h3>Why</h3>
            <h2>Spectrum@Metro</h2>

            <p>
              Noida-NCR has added many commercial developments to the nation.
              Spectrum@Metro at Sector-75, Noida marks a new era in commercial
              investment and international lifestyle trends.
            </p>

            <p>
              Under the aegis of <strong>SPECTRUM GROUP</strong>, Spectrum@Metro
              is a benchmark commercial & retail destination.
            </p>

            <a href="#" className="spect-link">
              Discover About Spectrum Group
            </a>
          </div>
        </div>
         <section className="spect-promises">
        <div className="promise">
          <h4>Promise of Great Location</h4>
          <p>Sector 50 Metro Station at doorstep</p>
        </div>

        <div className="promise">
          <h4>Promise of Footfall</h4>
          <p>Catchment of over 8 lakh</p>
        </div>

        <div className="promise">
          <h4>Promise of Convenience</h4>
          <p>Parking for more than 5000 cars</p>
        </div>

        <div className="promise">
          <h4>Promise of Quality</h4>
          <p>Unmatched construction quality</p>
        </div>
      </section>
      </section>

      {/* ================= PROMISES ================= */}
     

      {/* ================= PROJECTS ================= */}
      <section className="spect-projects">
        <h2>Ongoing Projects</h2>

        <div className="project-cards">
          <div className="project-card">
            <img src="/sp2.jpg" alt="Spectrum Metro I" />
            <h3>Spectrum Metro I</h3>
            <p>Central Noida<br />Sector 75, Noida</p>
            <ul>
              <li>No. Of Tower: 4</li>
              <li>Type: Commercial</li>
              <li>Product: Retail, Service Apartment, Food Court, Multiplex</li>
              <li>Status: Ready to Move / Under Construction</li>
            </ul>
          </div>

          <div className="project-card">
            <img src="/sp3.jpg" alt="Spectrum Metro II" />
            <h3>Spectrum Metro II</h3>
            <p>Central Noida<br />Sector 75, Noida</p>
            <ul>
              <li>No. Of Tower: 5</li>
              <li>Type: Commercial</li>
              <li>Product: Retail, Service Apartment, Food Court, Multiplex</li>
              <li>Status: Under Construction</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spect;
