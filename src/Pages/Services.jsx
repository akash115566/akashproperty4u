import React from "react";
import "../Style/services.css"

const servicesData = [
  {
    img: "/se1.webp",
    title: "Full Projects Location",
    desc: "Complete site coverage to highlight the project's location, surroundings, and accessibility.",
    link: "/Project"
  },
  {
    img: "/se2.webp",
    title: "Drone Shoot",
    desc: "High-quality drone visuals to capture stunning aerial shots of the property and environment.",
    link: "Drone"
  },
  {
    img: "/se3.webp",
    title: "Interview with Host/Director",
    desc: "Engaging interviews to showcase project vision, leadership, and transparency to clients.",
    link: "/Internet"
  },
  {
    img: "/se4.webp",
    title: "Special Scheme Planning",
    desc: "Strategic schemes tailored for specific launches, festive seasons, or limited-time offers.",
    link: "/Special"
  },
  {
    img: "/se5.webp",
    title: "Brokerage Scheme",
    desc: "Attractive brokerage models designed to engage and reward your sales partners effectively.",
    link: "/Brokerage"
  },
];


const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* Heading */}
        <h1 className="services-title">Our Services</h1>

        {/* Cards */}
        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div className="service-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="service-btn" target="_blank" rel="noreferrer">
          More Details
        </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
