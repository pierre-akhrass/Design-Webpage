import { useEffect, useState } from "react";
import "./PartnersSection.scss";

const partners = [
  { logo: "/images/partners/partner-1.png", name: "Partner 1" },
  { logo: "/images/partners/partner-2.png", name: "Partner 2" },
  { logo: "/images/partners/partner-3.png", name: "Partner 3" },
  { logo: "/images/partners/partner-4.png", name: "Partner 4" },
  { logo: "/images/partners/partner-5.png", name: "Partner 5" },
  { logo: "/images/partners/partner-6.png", name: "Partner 6" },
];

const visibleItems = 5;

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((current) =>
      current === partners.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const interval = window.setInterval(goNext, 4000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="partners-section">
      <h2 className="partners-section__title">Our Partners</h2>

      <div className="partners-section__strip">
        <div
          className="partners-section__track"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleItems)}%)`,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <button
              key={`${partner.name}-${index}`}
              type="button"
              className="partners-section__logo"
              onClick={goNext}
              aria-label={partner.name}
            >
              <img src={partner.logo} alt={partner.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}