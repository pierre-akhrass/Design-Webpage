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

const repeatedPartners = [...partners, ...partners];

export default function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goNext = () => {
    setIsAnimating(true);
    setActiveIndex((current) => current + 1);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      goNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (activeIndex >= partners.length) {
      setIsAnimating(false);
      setActiveIndex(0);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  };

  return (
    <section className="partners-section">
      <h2 className="partners-section__title">Our Partners</h2>

      <div className="partners-section__strip">
        <div
          className={`partners-section__track ${
            isAnimating ? "is-animating" : ""
          }`}
          style={{
            transform: `translateX(calc(var(--partners-logo-width) * -${activeIndex}))`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {repeatedPartners.map((partner, index) => (
            <button
              key={`${partner.name}-${index}`}
              type="button"
              className="partners-section__logo"
              onClick={goNext}
              aria-label={partner.name}
            >
              <img src={partner.logo} alt={partner.name} draggable="false" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}