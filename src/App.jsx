import { useEffect, useState } from "react";
import "./App.css";

const heroCarouselImages = [
  `${import.meta.env.BASE_URL}hero-1.jpg`,
  // Only one image is available right now — add these back once we have more.
  // `${import.meta.env.BASE_URL}hero-2.jpg`,
  // `${import.meta.env.BASE_URL}hero-3.jpg`,
];

const REGISTRATION_URL =
  "https://tms.ezfacility.com/OnlineRegistrations/Register.aspx?CompanyID=8390&GroupID=4104306";

const CONTACT_EMAIL = "jwanderlingh@wingsarena.com";

const QR_CODE_SRC = `${import.meta.env.BASE_URL}registration_qr.png`;

const scheduleDates = [
  "Sept. 8, 2026",
  "Sept. 15, 2026",
  "Sept. 22, 2026",
  "Sept. 29, 2026",
  "Oct. 6, 2026",
  "Oct. 13, 2026",
  "Oct. 20, 2026",
  "Oct. 27, 2026",
  "Nov. 3, 2026",
  "Nov. 10, 2026",
];

const programHighlights = [
  {
    number: "01",
    title: "All Skill + Ability Levels",
    copy:
      "Whether you're learning the game or looking to sharpen your skills, classes are open to players across all experience levels.",
  },
  {
    number: "02",
    title: "Professional Hockey Coaching",
    copy:
      "Train with Wings Arena Professional Hockey Coaches through organized, on-ice instruction.",
  },
  {
    number: "03",
    title: "Build Game-Ready Fundamentals",
    copy:
      "Develop confidence and strengthen the fundamentals that translate directly to recreational and competitive hockey.",
  },
];

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Rotation is paused while there's only one image to show.
    if (heroCarouselImages.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCarouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      {heroCarouselImages.map((image, index) => (
        <img
          className={
            index === activeIndex
              ? "hero-carousel-image hero-carousel-image-active"
              : "hero-carousel-image"
          }
          src={image}
          alt=""
          aria-hidden={index !== activeIndex}
          key={image}
        />
      ))}

      {heroCarouselImages.length > 1 ? (
        <div className="hero-carousel-dots">
          {heroCarouselImages.map((image, index) => (
            <span
              className={
                index === activeIndex
                  ? "hero-carousel-dot hero-carousel-dot-active"
                  : "hero-carousel-dot"
              }
              key={image}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <main className="adult-hockey-page">
      <section className="hero">
        <div className="hero-center-line" />

        <div className="hero-inner">
          <div className="hero-copy">
            <img
              className="hero-watermark"
              src={`${import.meta.env.BASE_URL}wings-logo.png`}
              alt=""
              aria-hidden="true"
            />

            <h1>
              Adult Hockey
              <span>Classes</span>
            </h1>

            <p className="hero-description">
              Learn at your pace. Build your skills. Feel more confident on the ice.
            </p>

            <div className="hero-actions">
              <a
                className="hero-primary-button"
                href="#registration"
              >
                Register Now
              </a>
            </div>
          </div>

          <HeroCarousel />
        </div>

        <div className="hero-bottom-stripe" />
      </section>

      <section className="intro-section">
        <div className="section-container">
          <div className="section-heading intro-heading">
            <h2>
              Hockey Is For Everyone!
            </h2>

            <p>
              It’s never too late to start playing hockey. Whether you’re
              brand new to the game or looking to build on what you already
              know, our Adult Hockey Classes are a great way to learn,
              improve, and feel more confident on the ice.
            </p>
          </div>

          <div className="highlight-grid">
            {programHighlights.map((highlight) => (
              <article
                className="highlight-card"
                key={highlight.number}
              >
                <div className="highlight-number">
                  {highlight.number}
                </div>

                <div className="highlight-rule" />

                <h3>{highlight.title}</h3>

                <p>{highlight.copy}</p>
              </article>
            ))}
          </div>

          <p className="intro-summary">
            Classes focus on the core skills every hockey player needs,
            including skating technique, balance and edge control,
            stickhandling, passing, shooting, and basic positioning. Players
            will work on putting those skills together in practical drills
            and game situations, building the confidence and awareness
            needed to play more comfortably and effectively with others.
          </p>
        </div>
      </section>

      <section
        className="schedule-section"
        id="schedule"
      >
        <div className="section-container">
          <div className="section-heading schedule-heading">
            <h2>Schedule</h2>
          </div>

          <div className="schedule-shell">
            <div className="schedule-header">
              <div>DAY</div>
              <div>TIME</div>
              <div>DATES</div>
            </div>

            <div className="schedule-body">
              <div
                className="schedule-value schedule-day"
                data-label="DAY"
              >
                Tuesdays
              </div>

              <div
                className="schedule-value schedule-time"
                data-label="TIME"
              >
                7:25 AM – 8:25 AM
              </div>

              <div
                className="schedule-dates"
                data-label="DATES"
              >
                {scheduleDates.map((date) => (
                  <span
                    className="date-pill"
                    key={date}
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="registration-section"
        id="registration"
      >
        <div className="registration-background-mark registration-background-mark-one">
          W
        </div>

        <div className="registration-background-mark registration-background-mark-two">
          W
        </div>

        <div className="section-container registration-container">
          <div className="section-heading registration-heading">
            <p className="section-eyebrow section-eyebrow-light">
              RESERVE YOUR SPOT
            </p>

            <h2>Registration</h2>

            <p>
              Choose the full 10-class session or just drop-in for a single class (if space permits).
            </p>
          </div>

          <div className="pricing-grid">
            <article className="price-card price-card-primary">
              <div className="price-card-topline">
                Full Session
              </div>

              <div className="price">
                <span className="currency">$</span>
                450
              </div>

              <div className="price-description">
                10 Classes
              </div>

            </article>

            <article className="price-card">
              <div className="price-card-topline">
                Drop-In
              </div>

              <div className="price">
                <span className="currency">$</span>
                50
              </div>

              <div className="price-description">
                Per Class
              </div>

            </article>
          </div>

          <div className="registration-action-area">
            <div className="qr-area">
              <p className="scan-label">
                SCAN OR CLICK BELOW TO REGISTER
              </p>

              <div className="qr-frame">
                <span className="qr-corner qr-corner-top-left" />
                <span className="qr-corner qr-corner-top-right" />
                <span className="qr-corner qr-corner-bottom-left" />
                <span className="qr-corner qr-corner-bottom-right" />

                {QR_CODE_SRC ? (
                  <img
                    className="qr-image"
                    src={QR_CODE_SRC}
                    alt="Adult Hockey Classes registration QR code"
                  />
                ) : (
                  <div className="qr-placeholder">
                    <div className="fake-qr">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <strong>QR CODE</strong>

                    <small>
                      Registration
                    </small>
                  </div>
                )}
              </div>

              <a
                className="registration-button"
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="questions-card">
            <div>
              <span className="questions-label">
                QUESTIONS?
              </span>

              <strong>
                We’re happy to help.
              </strong>
            </div>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;