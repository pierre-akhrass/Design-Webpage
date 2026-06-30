import { Button, Media } from 'ogilvy-design-system'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <Media src="/src/assets/video-image.png" alt="Taleed video" ratio="video" />
      </div>
      <div className="hero-content">
        <h1>Taleed, an engine of <br /> opportunities</h1>
        <p>
          Taleed is Aramco's comprehensive program dedicated to creating, growing, and sustaining Small & Medium Enterprises (SMEs) in the Kingdom.
        </p>
        <p>
          Acting as a catalyst for change, it unlocks capital, develops commercial ecosystems, drives SME growth, and nurtures scalable, sustainable job creation. By transforming aspirations into achievements and forging strategic alliances, Taleed empowers SMEs to thrive and achieve lasting impact.
        </p>
        <Button variant="filled" className="rounded-btn hero-btn">Find out More</Button>
      </div>
    </section>
  )
}
