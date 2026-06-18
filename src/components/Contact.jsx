import React, { useRef } from 'react';

const Contact = () => {
  const formFeedbackRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const feedback = formFeedbackRef.current;

    if (!name || !email || !message) {
      feedback.textContent = '❌ Please fill in all fields.';
      feedback.style.color = '#d9534f';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = '❌ Please enter a valid email address.';
      feedback.style.color = '#d9534f';
      return;
    }

    feedback.textContent = '✓ Thanks! Our team will reach out within 24 hours.';
    feedback.style.color = '#2c6e2f';
    form.reset();
    setTimeout(() => {
      feedback.textContent = '';
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>
              Ready to <span className="highlight">amplify</span> your brand?
            </h2>
            <p>
              Get a professional website, skyrocket social presence, and own your digital space.
              NezaWeb partners with you at every stage.
            </p>
            <div className="contact-details">
              <div>
                <i className="fas fa-envelope"></i> nezaweb.rw@gmail.com
              </div>
              <div>
                <i className="fas fa-phone-alt"></i> 0780539886
              </div>
              <div className="social-icons">
                <a href="https://instagram.com/nezaweb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/nezaweb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://tiktok.com/@nezaweb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://facebook.com/nezaweb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email address" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary full-width">
              Send message <i className="fas fa-paper-plane"></i>
            </button>
            <p className="form-feedback" ref={formFeedbackRef}></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;