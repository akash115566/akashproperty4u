import React from "react";
import "../Style/privacy.css"

const Privacy = () => {
  return (
<>

     <section className="project-banner">
        <img src="/pr1.webp" alt="Project Banner" />
        <div className="project-banner-overlay">
          {/* <h1>Understanding Our Privacy & Policy</h1> */}
        </div>
      </section>
    <section className="terms-section">
      <div className="terms-container">

        {/* 🔹 Main Heading */}
        <h1 className="terms-title">Privacy Policy – Property 4 You</h1>

        {/* 🔹 Sub Heading */}
        <h2 className="terms-subtitle">
        At Property 4 You, we value the privacy of our viewers, clients, and partners. This Privacy Policy outlines how we collect, use, protect, and handle your personal information in relation to our TV show, digital platforms, and promotional services.
        </h2>

        {/* 🔹 Content */}
        <div className="terms-content">

          <h3>1. Information We Collect</h3>
          <p>
          Name, email address, phone number, and city
Project details (from builders or developers)
Inquiries made via our website, phone, or email
Feedback or testimonials
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
           Connecting buyers with developers/builders
Responding to your inquiries and requests
Sharing show-related updates, offers, or schemes
Improving our services and user experience
          </p>

          <h3>3. Information Sharing</h3>
          <p>
            We do not sell, trade, or rent users’ personal information to third parties. Information may be shared with our trusted partners (e.g., verified builders) only to serve your request or inquiry, and with your prior consent. We may share data if required by law or legal processes.
          </p>

          <h3>4. Data Security</h3>
          <p>
          We follow standard security practices to protect your personal data from unauthorized access, misuse, or disclosure.
          </p>

          <h3>5. Third-Party Links</h3>
          <p>
          Our show or website may include links to third-party sites (e.g., builders' websites). We are not responsible for the privacy practices or content of these external sites.
          </p>

          <h3>6. User Consent</h3>
          <p>
           By interacting with Property 4 You (through TV, website, or phone), you agree to the terms of this Privacy Policy and consent to the collection and use of your information as described.
          </p>

          <h3>7. Changes to the Policy</h3>
          <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on our official platforms with an updated effective date.
          </p>

          <h3>8. Contact Us</h3>
          <p>
           For any privacy-related concerns or requests, please contact:
          </p>

          <h3>Use of Visuals and Branding</h3>
          <p>
            All visuals, videos, and branding materials aired in the show are the
            property of Property 4 You and cannot be reused or republished
            without written permission.
          </p>

          <h3>Legal Jurisdiction</h3>
          <p>
            <strong>📧 Email: property4you@gmail.com<br/>
📞 Phone: 7042438293</strong> 
          </p>

        </div>
      </div>
    </section>
    </>
  );
};

export default Privacy;
