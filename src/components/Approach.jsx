import React from 'react';

const Approach = ({ scrollToSection }) => {
  return (
    <section id="approach" className="approach">
      <div className="container approach-flex">
        <div className="approach-image">
          <div className="image-mock">
            <i className="fas fa-chart-simple"></i>
            <div className="analytics-bar"></div>
          </div>
        </div>
        <div className="approach-content">
          <span className="section-tag">Our process</span>
          <h2 className="section-title left-align">
            Holistic digital <br />growth ecosystem
          </h2>
          <p>
            We don't just build websites; we integrate web development with social visibility to
            create a unified brand voice. Data-driven, creative, and results-focused.
          </p>
          <div className="approach-steps">
            <div className="step">
              <span className="step-number">01</span> <span>Discovery & strategy</span>
            </div>
            <div className="step">
              <span className="step-number">02</span> <span>Design & development (website first)</span>
            </div>
            <div className="step">
              <span className="step-number">03</span> <span>Social activation & management</span>
            </div>
            <div className="step">
              <span className="step-number">04</span> <span>Scale, analyze & optimize</span>
            </div>
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Let's talk growth <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Approach;