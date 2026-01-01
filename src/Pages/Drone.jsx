import React from "react";
import "../Style/drone.css";

const Drone = () => {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="drone-banner">
        <img src="/dr1.webp" alt="Drone Shoot Banner" />
        <div className="drone-banner-overlay">
          {/* <h1>DRONE SHOOT SEGMENT</h1> */}
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="drone-section">
        <div className="drone-box">
          <h2>Drone Shoot Segment – Aerial Showcase on Property 4 You</h2>

          <p>
            <strong>Property 4 You</strong> introduces a special drone shoot
            segment, offering high-definition aerial coverage for developers
            who want to highlight their project’s elevation, layout, and
            surroundings from a unique top-view perspective.
          </p>

          <p>
            This cinematic drone footage adds unmatched value to project
            presentations, showcasing:
          </p>

          <ul>
            <li>Complete project elevation and architectural design</li>
            <li>Internal roadways, open spaces, amenities, and landscaping</li>
            <li>Connectivity with nearby landmarks and infrastructure</li>
            <li>Overall scale and beauty of the development from above</li>
          </ul>

          <p>
            This segment is ideal for developers aiming to impress and engage
            potential buyers with a grand visual experience of their properties.
          </p>

          <p>
            With <strong>Property 4 You’s</strong> professional team and advanced
            drone technology, we ensure your project stands out on national
            television with stunning visuals that capture every angle.
          </p>
        </div>
      </section>
    </>
  );
};

export default Drone;
