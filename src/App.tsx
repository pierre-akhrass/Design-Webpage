import { useState } from 'react'
import { Navbar, NavItem, Button, Media, Card } from 'ogilvy-design-system'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar
        logo={{ src: "/src/assets/logo.png", alt: 'Logo', href: '/' }}
        colorMode="dark"
        actions={
          <Button variant="filled" className="rounded-btn" iconRight={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>Get Connected</Button>
        }
      >
        <NavItem label="About Us" href="/"  />
        <NavItem label="Services" href="https://vite.dev/" />
        <NavItem label="Ecosystem Partnerships" href="https://chat.vite.dev/" />
        <NavItem label="Events" href="https://github.com/vitejs/vite" />
        <NavItem label="News" href="https://github.com/vitejs/vite" />
      </Navbar>

      <section className="hero-section">
        <div className="hero-media">
          <Media  src="/src/assets/video-image.png" alt="Taleed video" ratio="video"  />
        </div>
        <div className="hero-content">
          <h1>Taleed, an engine of <br/> opportunities</h1>
          <p>
            Taleed is Aramco's comprehensive program dedicated to creating, growing, and sustaining Small & Medium Enterprises (SMEs) in the Kingdom.
          </p>
          <p>
            Acting as a catalyst for change, it unlocks capital, develops commercial ecosystems, drives SME growth, and nurtures scalable, sustainable job creation. By transforming aspirations into achievements and forging strategic alliances, Taleed empowers SMEs to thrive and achieve lasting impact.
          </p>
          <Button variant="filled" className="rounded-btn hero-btn">Find out More</Button>
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Enabling SMEs to Create, Grow, and Sustain</h2>
        <div className="services-cards">
          <Card theme="light" orientation="vertical" interactive>
            <Card.Media src="/src/assets/card-1.jpg" alt="New SME Creation" shape="banner" />
            <Card.Body>
              <Card.Title>New SME Creation</Card.Title>
              <Card.Text>Taleed aims to be an instrumental partner in enabling Aramco's ecosystem and the Kingdom's SME economic development.</Card.Text>
            </Card.Body>
          </Card>

          <Card theme="light" orientation="vertical" interactive>
            <Card.Media src="/src/assets/card-2.jpg" alt="SME Growth support" shape="banner" />
            <Card.Body>
              <Card.Title>SME Growth support</Card.Title>
              <Card.Text>Taleed focuses on SME development and growth through a portfolio of initiatives and support programs that enable capability building</Card.Text>
            </Card.Body>
          </Card>

          <Card theme="light" orientation="vertical" interactive>
            <Card.Media src="/src/assets/card-3.jpg" alt="Building Local Capabilities" shape="banner" />
            <Card.Body>
              <Card.Title>Building Local Capabilities</Card.Title>
              <Card.Text>We empower Saudi talent for future job requirements, entrepreneurship, and SME sustainability</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="services-cta">
          <Button variant="filled" className="rounded-btn hero-btn">Discover Services</Button>
        </div>
      </section>

    </>
  )
}

export default App
