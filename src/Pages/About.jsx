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
        <h2>Why Viewers Love- <span>Property4You: Real Estate TV Program</span></h2>

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
      <section className="about-section" >
        <h2 style={{ backgroundColor: "#2565bfff", color: "#fff" }}>FOUNDER MESSAGE</h2>

        <div className="founder-box" style={{ justifyContent:'space-around'}}>
          <div> <img src="/ab2.webp" alt="Miss Pooja Sharma" /></div>
         
          <div style={{textAlign:"center", width:"700px"}}>
            <h2>Celebrity Host & Founder</h2>
            <h3>Miss Pooja Sharma</h3>

            <p>
              The show’s charisma and success were amplified by its celebrity actress host and founder, Miss Pooja Sharma. Her dynamic screen presence, deep industry knowledge, and elegant presentation style brought charm, credibility, and connection to the viewers.
            </p>
            <h4>A Show That Left a Lasting Impact</h4>
            <ul>
              <li>Revolutionized real estate marketing through media.</li>
              <li>Became a benchmark in TV property shows.</li>
              <li>Connected developers with lakhs of potential buyers.</li>
              <li> Played a key role in shaping property buying behavior across India.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Visionary Section ===== */}
      <section className="about-section light-bg">
       

        <div className="founder-box" style={{ justifyContent:'space-around'}}>

          <div style={{textAlign:"center", width:"700px"}} >
             <h2 >The Visionary Behind the Revolution</h2>
            <h3>Mr. Ankur Bansal</h3>
            <h4>Co-Founder</h4>
            <p>
             The <span>backbone and co-founder</span> of Property4You,<span> Mr. Ankur Bansal, </span>is a<span> Senior media person</span> with 22 years of experience across India’s leading television networks.
            </p>
            <p>His deep understanding of media dynamics and audience psychology played a<span> crucial role</span> in conceptualizing and executing this groundbreaking show. It was<span> his visionary idea</span> to blend<span> real estate marketing with TV journalism,</span> serving both developers and buyers in a unique way.</p>
 <p>At a time when traditional advertising ruled,<span> Mr. Bansal introduced</span> a bold idea: <span>showcasing projects through visual storytelling —</span> highlighting features, amenities, and offers through mainstream media.</p>
           <h2>🏆 His Idea Sparked a New Era in Property Branding:</h2>
            <ul className="about-list">
              <li>Turned property marketing into mass communication</li>
              <li>Connected developers directly with TV audiences</li>
              <li>Enabled pre-selling before project completion</li>
              <li>Made real estate branding transparent & impactful</li>
            </ul>
            <p>Thanks to the<span> leadership of Mr. Ankur Bansal</span> and the elegance of<span> Miss Pooja Sharma</span>, Property4You evolved into<span> a trusted brand and a powerful platform</span> for real estate promotion.</p>
          </div>
          <div>
          <img src="/ab3.webp" alt="Mr. Ankur Bansal" /></div>
        </div>
      </section>
    </>
  );
};

export default About;
