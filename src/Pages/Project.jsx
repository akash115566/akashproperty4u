import React from "react";
import "../Style/project.css";

const Project = () => {
  return (
    <>
      {/* ===== Banner ===== */}
      <section className="project-banner">
        <img src="/pr1.webp" alt="Project Banner" />
        <div className="project-banner-overlay">
          {/* <h1>PROPERTY 4 YOU – SEASON 2</h1> */}
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="project-content">
        <h2>
          Exclusive Interviews in Property 4 You – Season 2 with Celebrity Host
          Miss Pooja Sharma
        </h2>

        <p>
          In the much-awaited Season 2 of <strong>Property 4 You</strong>, the show
          brings a new interview segment hosted by renowned celebrity Miss Pooja
          Sharma. This engaging section highlights visionary developers, their
          success stories, and unique contributions to the real estate market.
        </p>

        <p>
          The interviews focus on connecting today’s homebuyers and investors
          with developers who are shaping the future of real estate.
        </p>

        <h3>Viewers Will Discover:</h3>

        <ul className="project-list">
          <li>What makes each project unique in today’s market</li>
          <li>Developer’s focus on quality, trust, and innovation</li>
          <li>Future-ready growth plans and buyer-centric solutions</li>
          <li>Honest insights on market trends and real estate challenges</li>
        </ul>

        <p>
          With her engaging interview style and industry expertise, Miss Pooja
          Sharma brings out authentic stories that resonate with property buyers,
          investors, and industry professionals.
        </p>

        <p>
          <strong>Property 4 You – Season 2</strong> goes beyond showcasing
          properties — it connects you with the minds and visionaries behind the
          developments.
        </p>
      </section>
    </>
  );
};

export default Project;
