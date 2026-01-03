import React from "react";
import "../Style/terms.css"

const Terms = () => {
  return (
    <section className="terms-section">
      <div className="terms-container">

        {/* 🔹 Main Heading */}
        <h1 className="terms-title">Terms and Conditions</h1>

        {/* 🔹 Sub Heading */}
        <h2 className="terms-subtitle">
          Property 4 You – Real Estate Promotional TV Show
        </h2>

        {/* 🔹 Content */}
        <div className="terms-content">

          <h3>Platform Purpose Only</h3>
          <p>
            Property 4 You is a real estate promotional TV show that acts solely as
            a platform to showcase builders’ projects. The show does not make any
            personal or official claims regarding the quality, legality, or
            guarantees of the properties featured.
          </p>

          <h3>No Endorsement of Fake Projects</h3>
          <p>
            Property 4 You does not support or promote any fake or fraudulent
            builder projects. All project information is provided by the
            builders/developers themselves.
          </p>

          <h3>No Buyer Pressure</h3>
          <p>
            The show or its team members never force or influence any viewer or
            buyer to invest or purchase any property featured on the show.
          </p>

          <h3>No Sales Commitments</h3>
          <p>
            Property 4 You does not commit to any kind of sales or booking
            assurance on behalf of any builder or project.
          </p>

          <h3>No Responsibility Despite Commission Structure</h3>
          <p>
            In cases where Property 4 You works on a percentage or commission
            basis with a builder, the show will still not be responsible for the
            builder’s actions, promises, or project delivery.
          </p>

          <h3>No Liability for Builder Fraud</h3>
          <p>
            If a builder commits fraud or misleads a buyer in any way, Property 4
            You shall not be held liable or accountable. All legal or financial
            matters are to be resolved directly between the builder and the
            buyer.
          </p>

          <h3>Information Accuracy</h3>
          <p>
            While efforts are made to present accurate and updated project
            details, Property 4 You does not guarantee the completeness or
            correctness of any content provided by the builder.
          </p>

          <h3>Viewer Discretion Advised</h3>
          <p>
            Buyers and investors are advised to verify all project-related
            details (such as approvals, legal status, pricing, and amenities)
            directly with the builder before making any financial commitment.
          </p>

          <h3>Use of Visuals and Branding</h3>
          <p>
            All visuals, videos, and branding materials aired in the show are the
            property of Property 4 You and cannot be reused or republished
            without written permission.
          </p>

          <h3>Legal Jurisdiction</h3>
          <p>
            Any disputes related to Property 4 You shall fall under the
            jurisdiction of <strong>[Your City/State’s]</strong> courts.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Terms;
