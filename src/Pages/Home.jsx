import React, { useState, useRef, useEffect } from "react"; // <-- Hooks import added
import { useLocation } from "react-router-dom";
import "../Style/home.css"

const Home = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/ba1.webp", "/ba2.webp", "/ba3.webp", "/ba4.webp", "/ba5.webp","/ba6.webp"];
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);






  const cardsData = [
  {
    img: "/h1.webp",
    title: "Project 1",
    desc: "Apex Golf Avenue is a residential project developed by Floral Realcon Pvt Ltd in Noida Extension (Greater Noida West).",
  },
  {
    img:"/h2.webp",
    title: "Spectrum at metro",
    desc: "Spectrum at Metro, located in Sector 75, Noida, is a large commercial project developed by Spectrum Group. It offers a mix of retail shops, office spaces.",
  },
  {
    img:"/h3.webp",
    title: "Prateek Edifice",
    desc: "Prateek Edifice developed by Prateek Group, is a premium residential project in Sector 107, Delhi NCR , offering 2 and 3 BHK apartments.",
  },
  {
    img: "/h4.webp",
    title: "Aggrawal Heights",
    desc: "Aggrawal developed by Aggrawal Heights, is a premium residential project in Sector 107, Delhi NCR , offering 2 and 3 BHK apartments.",
  },
  {
    img: "/h5.webp",
    title: "Apex Athena",
    desc: "Apex Athena offers Greek-style living in Noida’s most prestigious location—meticulously planned for elegance and comfort.",
  },
  {
    img:"/h6.webp",
    title: "Amaatra Homes",
    desc: "Amaatra Homes, developed by Amaatra Group, is a premium residential project in Sector 10, Greater Noida West, offering 2 and 3 BHK apartments.",
  },
   {
    img:"/h7.webp",
    title: "VVIP Homes",
    desc: "VVIP Homes in Greater Noida West offers 2/3/4 BHK podium-based luxury across 8 acres with 81% open area, clubhouse, spa, gym & in-house theatre.",
  },
  {
    img:"/h8.webp",
    title: "Rishabh Group",
    desc: "Rishabh Group, Since 1992, RISHABH GROUP has built trust through quality homes—crafted with integrity, expertise, and a legacy of excellence.",
  },
];

const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);



  const channelImages = [
    "/1.webp",
    "/channel2.png",
    "/channel3.png",
    "/channel4.png",
    "/channel5.png",
    "/channel6.png",
  ];

  return (
    <>
      <section>
        <div className="slider" ref={slideRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            className="slider-track"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, i) => (
              <img key={i} src={src} alt={`slide-${i}`} style={{ width: "100%", flexShrink: 0 }} />
            ))}
          </div>
        </div>
      </section>

   
    <section className="hot-deals">
      <h2 className="hot-deals-heading">HOT DEALS</h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} className="card-img" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
            <div className="card-buttons single-button">
              <a href="/details" className="btn btn-primary">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </section>





<section className="project-section">
  <div className="section-header">
    <h2>HIGH RISE PROJECTS</h2>
  </div>

  <div className="cards-grid">
    {[
      {
        img: "/h9.webp",
        // title: "Luxury High Rise Tower",
      },
      {
        img: "/h10.webp",
        // title: "Modern Residential Project",
      },
      {
        img: "/h11.webp",
        // title: "Premium Commercial Space",
      },
      {
        img: "/h12.webp",
        // title: "Smart Living Apartments",
      },
      {
        img: "/h13.webp",
        // title: "Ultra Luxury Skyscraper",
      },
    ].map((project, index) => (
      <div className="project-card" key={index}>
        
        {/* Image */}
        <img src={project.img} alt={project.title} />

        {/* Text */}
        <h3 className="project-title">{project.title}</h3>

        {/* Button / Link */}
        <a href="/project-details" className="card-link">
          View Project
        </a>

      </div>
    ))}
  </div>
</section>


      {/* ================= TOP RESIDENTIAL PROJECTS ================= */}
   <section className="project-section" id="top-projects">
  <div className="section-header">
    <h2>TOP RESIDENTIAL PROJECTS</h2>
  </div>

  <div className="cards-grid">
    {[
      {
        img: "/h14.webp",
        title: "VIP Homes",
        desc: "Vip Homes, is a real estate project in Greater Noida West, offering 2/3/4 BHK apartments. It is an 8-acre, podium-based project featuring a clubhouse.",
        link: "/project-details/vip-homes",
      },
      {
        img: "/h15.webp",
        title: "Sun Twilight",
        desc: "Sun Twilight Sun Twilight – Four-side open luxury villas in lush Greater Noida, blending iconic design, prime connectivity & nature’s serenity.",
        link: "/project-details/elite-residency",
      },
      {
        img: "/h16.webp",
        title: "Fortune Residency",
        desc: "Fortune Residency, Fortune Residency, a high-rise society located in Ghaziabad. This residential project is a Ready To Move society.",
        link: "/project-details/skyline-apartments",
      },
      {
        img: "/h17.webp",
        title: "Nirala Aspire",
        desc: "Nirala Aspire offers 3BHK low-rise luxury flats in Sector 16B, Noida Extension—fully furnished, well-connected, and packed with elite amenities.",
        link: "/project-details/royal-greens",
      },
      {
        img: "/h18.webp",
        title: "White House",
        desc: "White House, is a real estate project in Sector 75 Noida, offering 2/3/4 BHK apartments.",
        link: "/project-details/urban-nest",
      },
      {
        img: "/h19.webp",
        title: "Vrindavan Homes",
        desc: "Vrindavan Homes Since 2011, Vrindavan Homes offers MVDA-approved buy/rent/resale in Mathura-Vrindavan with ethical service & timeless property value.",
        link: "/project-details/palm-heights",
      },
      {
        img: "/h20.webp",
        title: "Apex Floral",
        desc: "Apex Floral with 20+ years of excellence, blends award-winning design, quality, and global partnerships in premium real estate developments.",
        link: "/project-details/dream-city",
      },
      {
        img: "/h21.webp",
        title: "Apex Kremlin",
        desc: "Apex Kremlin, Siddharth Vihar offers 2/3/4 BHK luxury homes on 7 lush acres with elite amenities, nature-inspired design & prime NH24 connectivity.",
        link: "/project-details/green-valley",
      },
      {
        img:"/h22.webp",
        title: "Nirala Estate",
        desc: "Nirala Estate, is a residential project located in Techzone 4, Greater Noida West, also known as Noida Extension. It offers 2 and 3 BHK apartments.",
        link: "/project-details/prime-residency",
      },
    ].map((project, index) => (
      <div className="project-card" key={index}>

        {/* Image */}
        <img src={project.img} alt={project.title} />

        {/* Title */}
        <h3>{project.title}</h3>

        {/* Description */}
        <p>{project.desc}</p>

        {/* Link */}
        <a href={project.link} className="card-link">
         Read More
        </a>

      </div>
    ))}
  </div>
</section>

      {/* ================= NEW RESIDENTIAL PLOT PROJECTS ================= */}
     <section className="project-section">
  <div className="section-header">
    <h2>NEW RESIDENTIAL PLOT PROJECTS</h2>
  </div>

  <div className="cards-grid">
    {[
      {
        img: "/h23.webp",
        title: "Harit Awaas Yojna",
      },
      {
        img:"/h24.webp",
        title: "Green Valley Plots",
      },
      {
        img: "/h25.webp",
        title: "Smart City Plots",
      },
      {
        img: "/h26.webp",
        title: "Prime Location Plots",
      },
    ].map((project, index) => (
      <div className="project-card" key={index}>

        {/* Image */}
        <div className="card-image">
          <img src={project.img} alt={project.title} />
        </div>

        {/* Heading */}
        <h3 className="project-title">{project.title}</h3>

        {/* Button */}
        <a href="/contact" className="btn-contact">
          Contact Us
        </a>

      </div>
    ))}
  </div>
</section>







       {/* ================= TOP REAL ESTATE SCHEME ================= */}
      <section>
        <div className="orange-header">
          <h2>TOP REAL ESTATE SCHEME</h2>
        </div>
        <img
          src="/top-scheme.jpg"
          alt="Top Real Estate Scheme"
          className="full-width-img"
        />
      </section>

      {/* ================= HAPPY CLIENTS TESTIMONIALS ================= */}
      <section className="section-padding">
        <div className="orange-header">
          <h2>HAPPY CLIENTS TESTIMONIALS</h2>
        </div>

        <div className="video-grid four-column">
          {[1, 2, 3, 4].map((v) => (
            <div className="video-card" key={v}>
              <video src={`/client${v}.mp4`} controls />
              <h4>#Property 4 YOU</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CELEBRITY CLIENTS TESTIMONIALS ================= */}
      <section className="section-padding">
        <h2 className="center-heading">CELEBRITY CLIENTS TESTIMONIALS</h2>

        <div className="video-grid four-column">
          {[1, 2, 3, 4].map((v) => (
            <div className="video-card" key={v}>
              <video src={`/celebrity${v}.mp4`} controls />
              <h4>#Actor Sonu Sood</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR ESTEEMED CLIENTS ================= */}
      <section className="section-padding">
  <h2 className="center-heading">Our Esteemed Clients</h2>

  <div className="image-grid seven-column">
    {[
      { img: "/h27.webp", name: "Client 1" },
      { img: "/h28.webp", name: "Client 2" },
      { img: "/h29.webp", name: "Client 3" },
      { img: "/h30.webp", name: "Client 4" },
      { img: "/h31.webp", name: "Client 5" },
      { img: "/h32.webp", name: "Client 6" },
      { img: "/h33.webp", name: "Client 7" },
      { img: "/h34.webp", name: "Client 8" },
      { img: "/h35.webp", name: "Client 9" },
      { img: "/h36.webp", name: "Client 10" },
      { img: "/h37.webp", name: "Client 11" },
      { img: "/h38.webp", name: "Client 12" },
      { img: "/h39.webp", name: "Client 13" },
      { img: "/h40.webp", name: "Client 14" },
      { img: "/h41.webp", name: "Client 15" },
      { img: "/h42.webp", name: "Client 16" },
      { img: "/h43.webp", name: "Client 17" },
      { img: "/h44.webp", name: "Client 18" },
    ].map((client, index) => (
      <img
        key={index}
        src={client.img}
        alt={client.name}
        className="client-logo"
      />
    ))}
  </div>
</section>


      {/* ================= TV SHOW CHANNELS ================= */}
      {/* <section className="section-padding tv-section">
      <div className="tv-content">
        <div className="tv-left">
          <img src="/lo2.webp" alt="Property4You TV Show" />
        </div>

        <div className="tv-right">
          <h2>PROPERTY4YOU TV SHOW APPROVED ON THESE NATIONAL CHANNELS</h2>

          <div className="channel-slider2">
            <div className="slider-track2">
              {channelImages.map((src, index) => (
                <img key={index} src={src} alt={`Channel ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
};

export default Home;
