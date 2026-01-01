import React from "react";
import "../Style/about.css";

const About = () => {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="about-banner">
        <img src="/ab1.webp" alt="Property4You Banner" />
        <div className="banner-overlay">
          {/* <h1>ABOUT US</h1> */}
        </div>
      </section>

      {/* ===== About Content ===== */}
      <section className="about-section">
        <h2>Property4You</h2>
        <h3>India’s Biggest Property TV Show</h3>

        <p>
          <strong>“Property4You”</strong> made history in 2011 when it launched as
          India’s first commercial property-focused TV show on Dilli Aaj Tak.
        </p>

        <p>
          It was the first-ever television program to showcase new residential
          and commercial projects, highlighting amenities and offers by real
          estate developers.
        </p>

        <div className="season-box">
          <h4>🔹 Season 1 (2011)</h4>
          <p>
            A pioneering initiative in real estate TV content, broadcast on
            Dilli Aaj Tak. It introduced a new category of property journalism
            with developer interviews and exclusive project showcases.
          </p>

          <h4>🔹 Season 2 (2025)</h4>
          <p>
            Now airing on India’s top national news channel <strong>AAJ TAK</strong>,
            achieving the highest TRP ratings in the real estate TV show segment.
            Focused on premium and elite property buyers.
          </p>
        </div>
      </section>

      {/* ===== Why Viewers Love ===== */}
      <section className="about-section light-bg">
        <h2>Why Viewers Love Property4You</h2>

        <ul className="about-list">
          <li>Exclusive previews of upcoming & luxury projects</li>
          <li>On-screen amenity walkthroughs</li>
          <li>Insightful real estate market commentary</li>
          <li>A trusted platform for buyers, investors & brands</li>
        </ul>

        <p>
          Property4You – Season 2 is not just a show, it’s India’s premier
          platform for property discovery. A must-watch for homebuyers,
          investors, and professionals.
        </p>
      </section>

      {/* ===== Founder Message ===== */}
      <section className="about-section">
        <h2>FOUNDER MESSAGE</h2>

        <div className="founder-box">
          <img src="/ab2.webp" alt="Miss Pooja Sharma" />
          <div>
            <h3>Miss Pooja Sharma</h3>
            <h4>Celebrity Host & Founder</h4>
            <p>
              The show’s charisma and success were amplified by its celebrity
              actress host and founder, Miss Pooja Sharma. Her dynamic screen
              presence, industry expertise, and elegant presentation style
              brought credibility and trust to viewers.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Visionary Section ===== */}
      <section className="about-section light-bg">
        <h2>The Visionary Behind the Revolution</h2>

        <div className="founder-box">
          
          <div>
            <h3>Mr. Ankur Bansal</h3>
            <h4>Co-Founder</h4>
            <p>
              Mr. Ankur Bansal, a senior media professional with 22+ years of
              experience, conceptualized Property4You by blending real estate
              marketing with TV journalism.
            </p>

            <ul className="about-list">
              <li>Turned property marketing into mass communication</li>
              <li>Connected developers directly with TV audiences</li>
              <li>Enabled pre-selling before project completion</li>
              <li>Made real estate branding transparent & impactful</li>
            </ul>
          </div>
          <img src="/ab3.webp" alt="Mr. Ankur Bansal" />
        </div>
      </section>
    </>
  );
};

export default About;
