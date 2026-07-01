import { useEffect, useState } from "react";
import "./HeroSection.scss";

const slides = [
  {
    image: "/images/hero-slide-1.jpg",
    title: (
      <>
        Specialized Offerings
        <br />
        for SMEs to Lead,
        <br />
        Optimize, and Thrive
      </>
    ),
  },
  {
    image: "/images/hero-slide-2.jpg",
    title: (
      <>
        Empowering Businesses
        <br />
        with Smart Digital
        <br />
        Solutions
      </>
    ),
  },
  {
    image: "/images/hero-slide-3.jpg",
    title: (
      <>
        Building Growth
        <br />
        Through Innovation
        <br />
        and Partnership
      </>
    ),
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const interval = window.setInterval(goNext, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="home-hero">
      <div
        className="home-hero__track"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="home-hero__slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <button
        className="home-hero__click-area"
        onClick={goNext}
        aria-label="Next slide"
        type="button"
      />

      <div className="home-hero__overlay" />

      <div className="home-hero__content">
        <h1>{slides[activeIndex].title}</h1>

        <a href="#services" className="home-hero__button">
          <span>Find Out More</span>
          <span className="home-hero__button-icon">→</span>
        </a>
      </div>

      <div className="home-hero__pagination">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>

        <span className="home-hero__progress">
          <span
            style={{
              width: `${((activeIndex + 1) / slides.length) * 100}%`,
            }}
          />
        </span>

        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}