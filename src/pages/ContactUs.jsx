import React, { useState, useEffect } from 'react';
import '../styles/contactus.css';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState({});

  // Contact information data
  const infoCards = [
    {
      icon: '📞',
      label: 'Contact Us',
      lines: ['Landline: 0303 1114647', 'Hotline: 0303 8847336']
    },
    {
      icon: '📍',
      label: 'Head Office',
      lines: ['783 Quaid Block, Bahria Town, Lahore', 'Phone: 0345 8432667']
    },
    {
      icon: '🏭',
      label: 'Site Office',
      lines: ['2km Okara Toll Plaza, Main GT Road, Sahiwal', 'Phone: 0300 9692667']
    },
    {
      icon: '🇬🇧',
      label: 'UK Office',
      lines: ['158 Weyhouse, 15 Church St, Weybridge, Surrey, KT13 8NA', 'Call: +44 7796 448679']
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('sending');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  // Phone icon component
  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
    </svg>
  );

  // Location icon component
  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  // Email icon component
  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const getIcon = (iconType) => {
    switch(iconType) {
      case '📞':
        return <PhoneIcon />;
      case '📍':
      case '🏭':
        return <LocationIcon />;
      case '🇬🇧':
        return <LocationIcon />;
      default:
        return <EmailIcon />;
    }
  };

  return (
    <div className="contact-page contact-full-width">
      {/* Animated background shapes */}
      <div className="bg-shapes">
        <div className="bg-shape bg-shape--1"></div>
        <div className="bg-shape bg-shape--2"></div>
        <div className="bg-shape bg-shape--3"></div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Info */}
          <div className="col-md-6">
            <div className="animate-on-scroll" id="contact-header">
              <h1 className="contact-title">Let's chat.</h1>
              <p className="contact-subtitle">
                Let's create something together
              </p>
            </div>

            {/* Map */}
            <div className="map-container animate-on-scroll" id="contact-map">
              <iframe
                title="Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0274147462097!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1635959562691!5m2!1sen!2s"
                className="contact-map"
                loading="lazy"
                allowFullScreen
              ></iframe>
              <div className="map-overlay"></div>
            </div>

            {/* Contact Info Cards */}
            <div className="contact-info-stack">
              {infoCards.map((item, idx) => (
                <div
                  key={idx}
                  className={`contact-info-card animate-on-scroll ${isVisible[`card-${idx}`] ? 'visible' : ''}`}
                  id={`card-${idx}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="card-content">
                    <div className="card-icon-wrapper">
                      <span className="card-icon">{getIcon(item.icon)}</span>
                    </div>
                    <div className="card-text-content">
                      <div className="card-label">{item.label}</div>
                      {item.lines.map((line, i) => (
                        <p key={i} className="card-text">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-md-6">
            <div className="contact-form-wrapper">
              <div className="contact-form-container animate-on-scroll" id="contact-form">
                <h4 className="form-title">Send us a message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder=" "
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <label className="floating-label">Full Name*</label>
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder=" "
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <label className="floating-label">Email Address*</label>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-input"
                      placeholder=" "
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                    <label className="floating-label">Subject*</label>
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder=" "
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                    <label className="floating-label">Type your message*</label>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="status-message status-success">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="status-message status-error">
                      ✗ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}