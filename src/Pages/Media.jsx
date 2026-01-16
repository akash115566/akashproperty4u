import React, { useState, useRef, useEffect } from "react";
import "../Style/media.css";

const images = [
  "/me1.webp","/me2.webp","/me3.webp","/me4.webp","/me5.webp",
  "/me6.webp","/me7.webp","/me8.webp","/me9.webp","/me10.webp",
];

const images8 = [
  "/me11.webp",
  "/me12.webp",
  "/me13.webp",
  "/me14.webp",
];

const videoLinks = [
  "https://www.youtube.com/embed/lI8w-ew3XEk?autoplay=1&mute=1",
  "https://www.youtube.com/embed/F0d7rJclVNY?autoplay=1&mute=1",
  "https://www.youtube.com/embed/SvOu1OIphII?autoplay=1&mute=1",
  "https://www.youtube.com/embed/GNTEf8sdaNw?autoplay=1&mute=1",
];

const Media = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let x = 0;
    const speed = 0.5;
    let requestId;

    const animate = () => {
      x -= speed;
      if (x <= -slider.scrollWidth / 2) {
        x = 0;
      }
      slider.style.transform = `translateX(${x}px)`;
      requestId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="media-page">

      {/* AWARDS */}
      <section className="awards-section5">
        <h2 className="awards-title5">Our Awards</h2>

        <div className="slider-container5">
          <div className="slider-track5" ref={sliderRef}>
            {[...images8, ...images8].map((img, i) => (
              <div className="image-card5" key={i}>
                <img src={img} alt="award" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
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

      {/* VIDEOS */}
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
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Media;
