import React from "react";
import "../Style/legal.css";

const Legal = () => {
  return (
    <section className="legal-section">

      {/* 🔹 Banner */}
      <div className="legal-banner">
        <img src="/lo3.webp" alt="Legal Advisor Banner" />
      </div>

      {/* 🔹 Info Section */}
      <div className="legal-info">
        <h1>Legal Advisor – Dr. Dhananjay Kumar Mishra</h1>
        <p>
          Dr. Dhananjay Kumar Mishra is the Legal Advisor of Pooja Movie Creations Group. 
          He brings a wealth of legal expertise and academic excellence to the organization.
        </p>

        <p>
          Holding a Ph.D. from G.D. Goenka University and an LL.B. from Banaras Hindu University (BHU), 
          Dr. Mishra has built a distinguished career in law and academia.
        </p>

        <p>His areas of expertise include:</p>
        <ul>
          <li>Jurisprudence</li>
          <li>Criminal Law</li>
          <li>Criminology, Penology, and Victimology</li>
          <li>Professional Ethics in Law</li>
        </ul>

        <p>
          In addition to his academic contributions, Dr. Mishra is an active Supreme Court lawyer, 
          providing legal counsel at the highest level of the Indian judiciary.
        </p>

        <p>
          His guidance ensures that Pooja Movie Creations Group operates with integrity, 
          compliance, and legal excellence.
        </p>
      </div>
      
    </section>
  );
};

export default Legal;
