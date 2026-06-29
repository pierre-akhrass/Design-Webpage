import { Card, CardMedia, CardBody, CardTitle, CardText } from 'ogilvy-design-system';
import './FocusAreas.scss';

// ── Figma asset URLs (valid 7 days – replace with production images) ──────────
const imgSustainability = 'https://www.figma.com/api/mcp/asset/61b9ba51-a387-437f-9d63-dea69f49610a';
const imgManufacturing  = 'https://www.figma.com/api/mcp/asset/19c71521-caa1-4fde-8f8e-4921422ebbdf';
const imgIndustrial     = 'https://www.figma.com/api/mcp/asset/1f8cd901-875c-46f7-a5d3-2df9f5d88ae0';
const imgDigital        = 'https://www.figma.com/api/mcp/asset/54109c6d-ad36-4578-a741-b6d79171d59d';

// ── Card data ─────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 'sustainability',
    image: imgSustainability,
    alt: 'Solar panel field representing sustainability',
    title: 'Sustainabilty',
    description:
      'Supporting the identification and enablement of SME investments that advance sustainability goals and long-term value creation for the Kingdom.',
  },
  {
    id: 'manufacturing',
    image: imgManufacturing,
    alt: 'Manufacturing facility interior',
    title: 'Manufacturing',
    description:
      'Identifying and enabling promising manufacturing opportunities that strengthen local production, supply chains, and industrial competitiveness.',
  },
  {
    id: 'industrial',
    image: imgIndustrial,
    alt: 'Industrial facility at sunset',
    title: 'Industrial',
    description:
      'Enabling SME opportunities that enhance industrial performance, efficiency, and resilience across critical sectors.',
  },
  {
    id: 'digital',
    image: imgDigital,
    alt: 'Circuit board representing digital innovation',
    title: 'Digital',
    description:
      'Supporting high-potential digital and AI-enabled SME opportunities that drive innovation, productivity, and ecosystem-wide impact.',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function FocusAreas() {
  return (
    <section className="focus-areas">
      <h2 className="focus-areas__title">Four Key Focus Areas</h2>

      <div className="focus-areas__grid">
        {CARDS.map((card) => (
          <Card key={card.id} className="focus-areas__card">
            <CardMedia src={card.image} alt={card.alt} />
            <CardBody>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.description}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
