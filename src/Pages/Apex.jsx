import React, { useEffect, useState } from "react";
import "../Style/apex.css";

const images = [
  "/ba1.webp",
   "/ba2.webp",
  "/ba3.webp",
];

const Apex = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== FULL SCREEN SLIDER ===== */}
      <section className="apex-slider">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </section>

      {/* ===== HEADINGS ===== */}
      <section className="apex-heading">
        <h2>Apex Golf Avenue Phase 2 Coming Soon !!</h2>
        <h1>A Residential Project by Apex Floral Group</h1>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="apex-container">
        {/* LEFT CONTENT */}
        <div className="apex-left">
          <h3>Apex Golf Avenue Overview</h3>
          <p>
           Apex Golf Avenue is a Residential Project coming up at Sports City Noida Extension. This project has a keen outline and is will being created with all the cutting edge comforts and also essential amenities. This Residential Property is a part of 130 Acre of Lush green Sports City which has a 9 hole Golf Course fairway with other out door games facilities. 90% of the Area is opening recreational with rich green focal mood.
          </p>

          
<h3> Get Details of Apex Golf Avenue 2 <br /></h3>
          <a href="#" className="apex-link">
           
            Click Here for Apex Golf Avenue Phase 2 Details
          </a>

          <h3>Why one should buy apartments in Apex Golf Avenue, Noida Extension</h3>
          <p>
            Building a home is a dream that most have. While are lucky enough to turn it 
            into reality others cannot. Constraints of various kinds can bar one from 
            having the pleasure of moving into one’s apartment. If you are looking for 
            the perfect place to call a home, then Apex Golf Avenue will bring your search 
            to an end. Say goodbye to the worries associated with house hunting and take a 
            look at the official page that contains all details of the project.
          </p>

          <h3>About Apex India Builder</h3>
          <p>
        While making the list of reputed land developers, the name of Apex India
         Pvt Ltd will be spotted in the top slot. They have been meeting the
          residential and commercial related requirements of people for over a
           decade. The recent project that they have launched is attracting the
            eyes of probable customers as well as investors. The residential 
            project has been named the “Apex Golf Avenue”
          </p>

          <h3>About Apex Golf Avenue project</h3>
          <p>
            The project is unique in nature because of its enormity. The entire 
            project is spread over an area of 4.94 Acres, 70% of which is dedicated
             to open space. There are a total of 5 buildings, and all of them have 
             around 28 floor, all total 733 residential units. The project was
              launched in the month of January 2015. The developers of Apex Golf 
              Avenue Noida Extension is known for catering to the needs of people
               both from the middle, lower-middle class, and the upper classes. The
                design of the project is such that it will also match up to the taste of the affluent society.

About of Apex New Project click at:- Apex Alphabet

About Apex Splendor - This is use only mivan construction technology, It is new project located at Sec TechZone 4 Greater Noida West BY Apex Floral Builder. CLICK for MORE... Apex Splendour Noida Extension.
          </p>

           <section className="apex-park-section">
      <div className="apex-park-wrapper">
        
        <h2 className="apex-park-heading">
          Apex Commercial Project - Apex Park Square
        </h2>

        <p className="apex-park-desc">
          Apex Park Square is new commercial development RERA registered project
          located at Sector 16B Greater Noida West. It is a grand commercial
          project developed by prominent builder Apex Floral Group offering
          hypermarket and office spaces with lease guaranteed.
        </p>

        <h3 className="apex-sub-heading">
          Apex Golf Avenue Main Attraction
        </h3>

        <h4 className="apex-highlight">
          Living in the lap of nature
        </h4>

        <p className="apex-park-desc">
          If there is one thing that the Apex India developers will not
          compromise with, it is space and greenery. This project has been
          carefully designed with landscaped surroundings, giving residents
          fresh air, openness, and a refreshing green environment.
        </p>

        {/* ===== FEATURES ===== */}
        <div className="apex-features">
          
          <ul className="apex-feature-left">
            <li>130 Acres Integrated Sports Community</li>
            <li>Fabulous View of Wide Green Spread Golf Course</li>
            <li>Big Lap Swimming Pool</li>
            <li>In Campus Pro Shops & Restaurants</li>
            <li>Earthquake Resistance Structure</li>
          </ul>

          <ul className="apex-feature-right">
            <li>Low Density Sports Sector</li>
            <li>9 Hole Golf Course</li>
            <li>Pool Side Lounge and Cafeteria</li>
            <li>Vastu Friendly and Fengshui Layout</li>
            <li>Comfortable Access from NH-24 Ghaziabad & Noida</li>
          </ul>

        </div>
      </div>
    </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="apex-right">
          <h4>Apex Splendour New Project</h4>
          <ul>
            <li>Apex Splendour Noida Extension</li>
            <li>Apex Aura Noida Extension</li>
            <li>Apex Golf Avenue Phase 2</li>
            <li>Apex Golf Avenue 2 Offer</li>
          </ul>
            <section className="apex-form">
        <h3>To Know More</h3>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email address" />
          <input type="tel" placeholder="Enter your phone number" />
          <textarea placeholder="Enter your query"></textarea>
          <button>Send Message</button>
        </form>
      </section>
        </div>
        
      </section>

      {/* ===== QUERY FORM ===== */}
    

      {/* ===== FOOTER ===== */}
      <footer className="apex-footer">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Location</a>
          <a href="#">Layout</a>
          <a href="#">Floor Plan</a>
          <a href="#">Price</a>
          <a href="#">Contacts</a>
          <a href="#">Sitemap</a>
        </div>

        <div className="footer-info">
          <p><strong>Call Us:</strong> +91-84XXXXXXXX</p>
          <p>
            <strong>Address:</strong> Sports City Sec-1, GH-03, Greater Noida West
          </p>
        </div>

        <p className="copyright">
          © 2017 All Rights Reserved | Disclaimer & Privacy Policy
        </p>
      </footer>
    </>
  );
};

export default Apex;
