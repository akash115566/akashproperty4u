import React, { useState } from "react";
import "../style/media.css";

const awardImages = [
  "/me11.webp",
   "/me12.webp",
   "/me13.webp",
  "/me14.webp",
];


const images = [
"/me1.webp",
   "/me2.webp",
   "/me3.webp",
 "/me4.webp",
 "/me5.webp",
   "/me6.webp",
   "/me7.webp",
 "/me8.webp",
 "/me9.webp",
   "/me10.webp",
   
];

const Media = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? awardImages.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === awardImages.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="media-page">

      {/* ================= AWARD GALLERY ================= */}
      <section className="award-gallery">
        <h2 className="section-title">Award Gallery</h2>

        <div className="carousel-wrapper">
          <button className="carousel-btn" onClick={prevSlide}>❮</button>

          <div className="carousel-track">
            {awardImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="award"
                className={`carousel-img ${
                  i === index ||
                  i === (index + 1) % 4 ||
                  i === (index + 2) % 4
                    ? "show"
                    : "hide"
                }`}
              />
            ))}
          </div>

          <button className="carousel-btn" onClick={nextSlide}>❯</button>
        </div>

        <div className="award-text">
          <h3>Award</h3>
          <h4>Excellence Award in Broadcast</h4>
          <p>We got Excellence Award in Broadcast.</p>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="image-gallery">
  <h2 className="section-title">Image Gallery</h2>

  <div className="image-grid">
    {images.map((img, i) => (
      <div className="img-box" key={i}>
        <img src={img} alt="Gallery" />
        <div className="img-overlay">Property4You Event</div>
      </div>
    ))}
  </div>
</section>

      {/* ================= VIDEOS ================= */}
      <section className="video-section">
        <h2 className="section-title">Videos</h2>

        <div className="video-grid">
          {Array.from({ length: 19 }).map((_, i) => (
            <video key={i} controls>
              <source src={`/videos/v${i + 1}.mp4`} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Media;
