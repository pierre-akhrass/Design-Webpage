import { Card, CardMedia, CardBody, CardStat, CardTitle } from 'ogilvy-design-system';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './ImpactStats.scss';

// ── Figma asset URLs (valid 7 days – replace with production assets) ──────────
// node 1172:442 – card 1: briefcase + trend chart (combined, 75×73 px)
const imgBusinesses = 'https://www.figma.com/api/mcp/asset/4c3b002a-8ad9-46e2-9984-4e16880432ff';
// node 1172:401 – card 2: building / store (75×56 px)
const imgBuilding   = 'https://www.figma.com/api/mcp/asset/dd4776b8-a9ce-489b-9e6f-bf989ce56f2e';
// node 1172:424 – card 3: person at laptop (71×59 px)
const imgPerson     = 'https://www.figma.com/api/mcp/asset/7ffd834a-ec10-42f8-9051-5534c2ae4dfa';

// ── Stat card data ────────────────────────────────────────────────────────────
const STATS = [
  { id: 'businesses',    image: imgBusinesses, value: '17',    label: 'Helped new businesses establish in KSA' },
  { id: 'smes',          image: imgBuilding,   value: '2900+', label: 'SME\u2019s Supported' },
  { id: 'opportunities', image: imgPerson,     value: '40',    label: 'Localization Investment Opportunities' },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function ImpactStats() {
  return (
    <section className="impact-stats">
      <SectionTitle className="impact-stats__title">
        Aramco Taleed&apos;s Impact at a Glance
      </SectionTitle>

      <div className="impact-stats__grid">
        {STATS.map((stat) => (
          <Card key={stat.id} className="impact-stats__card">
            <CardMedia src={stat.image} alt="" />
            <CardBody>
              <CardStat value={stat.value} />
              <CardTitle>{stat.label}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
