import React, { useEffect, useRef } from 'react';

const Hero = ({ scrollToSection }) => {
  const heroVisualRef = useRef(null);
  const statsContainerRef = useRef(null);

  // Mouse move effect for floating cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.floating-card');
      const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
      cards.forEach((card, idx) => {
        const speed = 1 + idx * 0.3;
        card.style.transform = `translate(${xAxis / speed}px, ${yAxis / speed}px)`;
      });
    };

    const heroVisual = heroVisualRef.current;
    if (heroVisual) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Stats counter animation
  useEffect(() => {
    const animateNumbers = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const finalVal = stat.innerText;
        const numeric = parseInt(finalVal, 10);
        if (!isNaN(numeric)) {
          let current = 0;
          const increment = numeric / 50;
          const updateCounter = () => {
            current += increment;
            if (current < numeric) {
              stat.innerText = Math.floor(current) + (finalVal.includes('+') ? '+' : '');
              requestAnimationFrame(updateCounter);
            } else {
              stat.innerText = finalVal;
            }
          };
          updateCounter();
        }
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumbers();
          statsObserver.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const statsContainer = statsContainerRef.current;
    if (statsContainer) statsObserver.observe(statsContainer);

    return () => statsObserver.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge">✧ Digital Growth Partners</div>
          <h1 className="hero-title">
            Elevate your brand's <span className="highlight">digital presence</span> with NezaWeb
          </h1>
          <p className="hero-description">
            We craft professional websites, amplify social media visibility, and build lasting
            online authority. From web development to strategic social management — grow
            seamlessly across Instagram, X, TikTok, Facebook & beyond.
          </p>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Start your journey <i className="fas fa-arrow-right"></i>
            </a>
            <a
              href="#services"
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Explore services
            </a>
          </div>
          <div className="trust-stats" ref={statsContainerRef}>
            <div className="stat">
              <span className="stat-number">100+</span>{' '}
              <span className="stat-label">brands elevated</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>{' '}
              <span className="stat-label">client retention</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>{' '}
              <span className="stat-label">⭐ client rating</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" ref={heroVisualRef}>
          <div className="floating-card card-1">
            <i className="fas fa-code"></i>
            <p>Web Dev</p>
          </div>
          <div className="floating-card card-2">
            <i className="fas fa-chart-line"></i>
            <p>Growth</p>
          </div>
          <div className="floating-card card-3">
            <i className="fas fa-hashtag"></i>
            <p>Social</p>
          </div>
          <div className="hero-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;