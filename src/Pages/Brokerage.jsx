import React from "react";
import "../Style/brokerage.css";
// import bannerImg from "../assets/brokerage-banner.jpg"; // apni image ka path

const Brokerage = () => {
  return (
    <div className="brokerage-page">

      {/* 🔶 TOP BANNER */}
      <div className="brokerage-banner">
        <img src="/br1.webp" alt="Brokerage Scheme Banner" />
        <div className="banner-overlay">
          <h1>Brokerage Scheme</h1>
        </div>
      </div>

      {/* 🔶 CONTENT SECTION */}
      <div className="brokerage-content-wrapper">
        <div className="brokerage-content">

          <h2>Brokerage Scheme Introduced in Season 2 of Property4You</h2>

          <p>
            In Season 2 of Property4You, we proudly introduce a dedicated
            <strong> Brokerage Scheme </strong>
            designed to provide end-to-end sales support for developers and builders.
            This initiative is especially beneficial for builders without large
            in-house sales teams or sufficient manpower to drive project sales
            independently.
          </p>

          <h3>Under this scheme:</h3>

          <ul>
            <li>
              Property 4 You provides professional sales support through its
              experienced team.
            </li>
            <li>
              We help generate genuine leads from our TV audience and convert
              them into successful bookings.
            </li>
            <li>
              In return, a brokerage or commission will be charged by the
              Property4You team as per agreed terms.
            </li>
          </ul>

          <p>
            This model ensures a hassle-free sales process for developers while
            allowing them to reach a wider buyer base across India through our TV
            show promotions.
          </p>

          <div className="highlight-text">
            Property4You – Not Just Promotion, But Real Sales Support
          </div>

        </div>
      </div>

    </div>
  );
};

export default Brokerage;
