import React from 'react'
import "../Style/internet.css"
const Internet = () => {
  return (
   <>
      {/* 🔝 TOP BANNER */}
      <section className="banner">
        <img
          src="/dr1.webp"
          alt="Property 4 You Season 2"
        />
      </section>

      {/* 📦 CONTENT SECTION */}
      <section className="content-wrapper">
        <div className="content-box">

          <h1>
            Exclusive Interviews in Season 2 – With Celebrity Host Miss Pooja Sharma
          </h1>

          <p>
            In the much-awaited <strong>Season 2 of Property 4 You</strong>, the show
            introduces a brand-new interview segment hosted by celebrity{" "}
            <strong>Miss Pooja Sharma</strong>.
          </p>

          <p>
            This special section spotlights upcoming and leading developers,
            giving them a platform to share their success stories, vision, and
            unique ideas they bring to the market for today’s homebuyers and
            investors.
          </p>

          <p className="highlight">
            Through these insightful conversations, viewers will gain a deeper understanding of:
          </p>

          <ul>
            <li>What makes each project stand out</li>
            <li>The developer's commitment to quality and innovation</li>
            <li>Future growth plans and buyer-centric offerings</li>
            <li>Honest views on market trends and challenges</li>
          </ul>

          <p>
            Miss Pooja Sharma’s engaging interview style and strong industry
            presence will bring out the real stories behind the brands, adding
            depth, authenticity, and trust to the show.
          </p>

          <p className="closing">
            <strong>Property 4 You – Season 2</strong> is not just about showcasing
            properties — it’s about connecting people with the minds and
            visionaries behind the developments.
          </p>

        </div>
      </section>
      </>
  )
}

export default Internet
