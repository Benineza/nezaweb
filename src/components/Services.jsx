import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What we deliver</span>
          <h2 className="section-title">
            Core digital solutions for <br /> modern brands
          </h2>
          <p className="section-subtitle">
            Tailored strategies that combine expert development, design, and social engine.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card featured-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>
              Web Development <span className="badge-main">Core</span>
            </h3>
            <p>
              Professional, high-performance websites that convert visitors into loyal
              customers. Fully responsive, modern UI/UX, and SEO-ready architecture.
            </p>
            <ul className="service-list">
              <li><i className="fas fa-check-circle"></i> Custom design & development</li>
              <li><i className="fas fa-check-circle"></i> E‑commerce & CMS solutions</li>
              <li><i className="fas fa-check-circle"></i> Speed & security optimization</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-chalkboard-user"></i>
            </div>
            <h3>Social Media Management</h3>
            <p>
              Turn followers into communities. Strategic content, consistent branding, and
              engagement across Instagram, X, TikTok, Facebook & LinkedIn.
            </p>
            <ul className="service-list">
              <li><i className="fas fa-check-circle"></i> Content calendars & creation</li>
              <li><i className="fas fa-check-circle"></i> Community management</li>
              <li><i className="fas fa-check-circle"></i> Growth analytics & reporting</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Branding & Digital Design</h3>
            <p>
              Cohesive identity that resonates across every touchpoint. Logo, visual language,
              brand guidelines, and digital assets.
            </p>
            <ul className="service-list">
              <li><i className="fas fa-check-circle"></i> Visual identity & strategy</li>
              <li><i className="fas fa-check-circle"></i> UI/UX for web & social</li>
              <li><i className="fas fa-check-circle"></i> Motion & static assets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;