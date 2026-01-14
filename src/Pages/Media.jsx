import React, { useState } from "react";
import "../Style/media.css"

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

const videoLinks = [
  "https://www.youtube.com/embed/lI8w-ew3XEk?autoplay=1&mute=1",
  "https://www.youtube.com/embed/F0d7rJclVNY?autoplay=1&mute=1",
  "https://www.youtube.com/embed/SvOu1OIphII?autoplay=1&mute=1",
  "https://www.youtube.com/embed/GNTEf8sdaNw?autoplay=1&mute=1",
  "https://www.youtube.com/embed/4dFlWmFLyDc?autoplay=1&mute=1",
  "https://www.youtube.com/embed/plAcay25ByE?autoplay=1&mute=1",
  "https://www.youtube.com/embed/RZRDF1k3cF4?autoplay=1&mute=1",
  "https://www.youtube.com/embed/1iyIvk71--U?autoplay=1&mute=1",
  "https://www.youtube.com/embed/eC6yXSbLKws?autoplay=1&mute=1",
  "https://www.youtube.com/embed/FY7zFllmknQ?autoplay=1&mute=1",
  "https://www.youtube.com/embed/ld_W1nvwXr0?autoplay=1&mute=1",
  "https://www.youtube.com/embed/LL1Y8dA_e44?autoplay=1&mute=1",
  "https://www.youtube.com/embed/G7D2joHVhiI?autoplay=1&mute=1",
  "https://www.youtube.com/embed/kDGxj2yQvmw?autoplay=1&mute=1",
  "https://www.youtube.com/embed/uydTOHnHMIM?autoplay=1&mute=1",
  "https://www.youtube.com/embed/CruwOajievE?autoplay=1&mute=1",
  "https://www.youtube.com/embed/q9gXuxSWnXg?autoplay=1&mute=1",
  "https://www.youtube.com/embed/tdZFRo42SBo?autoplay=1&mute=1",
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
        {videoLinks.map((link, i) => (
          <div className="video-wrapper" key={i}>
            <iframe
              src={link}
              title={`video-${i}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default Media;
