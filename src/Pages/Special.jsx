import React from 'react'
import "../Style/special.css"
const Special = () => {
  return (
    <>
          {/* 🔝 TOP BANNER */}
      <section className="eds-banner">
        <img
          src="/ab1.webp"
          alt="Exclusive Developer Schemes Property4You"
        />
      </section>

      {/* 📦 CONTENT SECTION */}
      <section className="eds-wrapper">
        <div className="eds-box">

          <h1>Exclusive Developer Schemes</h1>
          <h2>Exclusive Developer Schemes – Only on Property4You</h2>

          <p>
            <strong>Property 4 You</strong> offers a special segment dedicated to
            developers, where we introduce unique and customized schemes designed
            to help builders sell their projects faster and more effectively.
          </p>

          <p className="eds-highlight">
            Through our exclusive tie-ups and marketing expertise, we provide:
          </p>

          <ul>
            <li>Attractive offers for builders to showcase projects on national television</li>
            <li>Customized developer schemes tailored to project type, location, and target buyers</li>
            <li>Fast-track sales opportunities through high-visibility campaigns</li>
            <li>Lead generation support via TV promotions and digital integration</li>
          </ul>

          <p>
            But it’s not just the builders who benefit — buyers also gain access to
            heavy discounts, special deals, and value-added offers on flats and
            properties featured in these schemes.
          </p>

          <p className="eds-closing">
            With <strong>Property4You</strong>, it’s truly a win-win — empowering
            developers to achieve sales faster while giving buyers exclusive
            opportunities and greater value.
          </p>

        </div>
      </section>

    </>
  )
}

export default Special
