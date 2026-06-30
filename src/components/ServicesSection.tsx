import { Button, Card } from 'ogilvy-design-system'

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">Enabling SMEs to Create, Grow, and Sustain</h2>
      <div className="services-cards">
        <Card theme="light" orientation="vertical" interactive>
          <Card.Media src="/src/assets/card1.jpg" alt="New SME Creation" shape="banner" />
          <Card.Body>
            <Card.Title>New SME Creation</Card.Title>
            <Card.Text>Taleed aims to be an instrumental partner in enabling Aramco's ecosystem and the Kingdom's SME economic development.</Card.Text>
          </Card.Body>
        </Card>

        <Card theme="light" orientation="vertical" interactive>
          <Card.Media src="/src/assets/card2.jpg" alt="SME Growth support" shape="banner" />
          <Card.Body>
            <Card.Title>SME Growth support</Card.Title>
            <Card.Text>Taleed focuses on SME development and growth through a portfolio of initiatives and support programs that enable capability building</Card.Text>
          </Card.Body>
        </Card>

        <Card theme="light" orientation="vertical" interactive>
          <Card.Media src="/src/assets/card3.jpg" alt="Building Local Capabilities" shape="banner" />
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
  )
}
