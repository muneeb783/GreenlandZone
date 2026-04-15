import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/contactus.css';

const greetings = ["Let's talk.", "Get in touch.", "Contact us."];

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(i => (i + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const infoCards = [
    {
      icon: '📞',
      label: 'Call Us',
      lines: ['Landline: 042-3644228267', 'Hotline: 0303 8847336']
    },
    {
      icon: '📍',
      label: 'Head Office',
      lines: ['Ghaznavi Block Plot #29, Bahria Town Lahore', 'Phone: 0345-8432667']
    },
    {
      icon: '🏭',
      label: 'Site Office',
      lines: ['2km Okara Toll Plaza, GT Road, Sahiwal', 'Phone: 0300 9692667']
    }
  ];

  const faqData = [
    {
      question: "What types of dairy equipment do you offer?",
      answer: "We offer a comprehensive range of dairy farming operation management solutions including farm environment, animal performance, and feeding efficiency enhancers. We provide cooling systems, milking parlors, feeding equipment, and hygiene products to enhance farm productivity and animal welfare."
    },
    {
      question: "Do you provide installation and support?",
      answer: "Yes, we provide full installation services for all dairy operation equipment. Our team also offers ongoing technical support and periodic maintenance to ensure your mechanization meets excellence always."
    },
    {
      question: "Can I get a customized solution for my farm?",
      answer: "Absolutely. We specialize in creating tailored solutions that fit the unique needs and scale of your dairy farm. Contact us for a free consultation and quote."
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('sending');
    try {
      await emailjs.send(
        'service_8h0t8jg',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: '783.muneeb@gmail.com',
        },
        '4e2b9TEOJsej1d830'
      );
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const getIconSvg = (iconType) => {
    if (iconType === '📞') return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    );
    if (iconType === '📍') return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    );
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 20h20v2H2v-2z"/><path d="M4 6l6 4V6l6 4V4h4v16H4V6z"/>
      </svg>
    );
  };

  return (
    <div className="cu-page">
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Greenland Zone for dairy farming solutions, equipment inquiries, and farm consultancy. Visit our head office in Bahria Town Lahore or site office in Sahiwal."
        keywords="contact Greenland Zone, dairy farming inquiry, farm consultation, dairy equipment support, Pakistan dairy solutions"
        url={siteUrl + '/contact'}
      />

      {/* ── Split Hero ───────────────────────────────── */}
      <section className="cu-hero" data-navbar-theme="light">

        {/* Left: brand panel */}
        <div className="cu-brand-panel">
          <div className="cu-brand-noise" aria-hidden="true" />
          <div className="cu-brand-glow" aria-hidden="true" />

          <div className="cu-brand-body">
            <span className="cu-eyebrow">Contact Us</span>

            <h1 className="cu-headline">
              <span className="cu-greeting" key={currentGreeting}>
                {greetings[currentGreeting]}
              </span>
            </h1>

            <p className="cu-tagline">
              From Grass to Glass — we're with you every step of the way.
            </p>

            <ul className="cu-info-list">
              {infoCards.map((card) => (
                <li key={card.label} className="cu-info-item">
                  <div className="cu-info-icon-wrap">
                    {getIconSvg(card.icon)}
                  </div>
                  <div className="cu-info-text">
                    <span className="cu-info-label">{card.label}</span>
                    {card.lines.map((line, i) => (
                      <span key={i} className="cu-info-line">{line}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="cu-brand-divider" />
            <p className="cu-brand-footnote">
              Bahria Town Lahore &bull; GT Road Sahiwal &bull; Pakistan
            </p>
          </div>
        </div>

        {/* Right: form panel */}
        <div className="cu-form-panel">
          <div className="cu-form-body">
            <div className="cu-form-header">
              <h2 className="cu-form-title">Send a message</h2>
              <p className="cu-form-subtitle">We respond within 24 hours on business days.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="cu-form">
              <div className="cu-field">
                <input
                  type="text" id="cu-name" name="name"
                  className={`cu-input${form.name ? ' cu-input--filled' : ''}${errors.name ? ' cu-input--error' : ''}`}
                  placeholder=" "
                  value={form.name} onChange={handleChange}
                />
                <label htmlFor="cu-name" className="cu-label">Full Name</label>
                {errors.name && <span className="cu-error">{errors.name}</span>}
              </div>

              <div className="cu-field">
                <input
                  type="email" id="cu-email" name="email"
                  className={`cu-input${form.email ? ' cu-input--filled' : ''}${errors.email ? ' cu-input--error' : ''}`}
                  placeholder=" "
                  value={form.email} onChange={handleChange}
                />
                <label htmlFor="cu-email" className="cu-label">Email Address</label>
                {errors.email && <span className="cu-error">{errors.email}</span>}
              </div>

              <div className="cu-field">
                <input
                  type="text" id="cu-subject" name="subject"
                  className={`cu-input${form.subject ? ' cu-input--filled' : ''}${errors.subject ? ' cu-input--error' : ''}`}
                  placeholder=" "
                  value={form.subject} onChange={handleChange}
                />
                <label htmlFor="cu-subject" className="cu-label">Subject</label>
                {errors.subject && <span className="cu-error">{errors.subject}</span>}
              </div>

              <div className="cu-field">
                <textarea
                  id="cu-message" name="message" rows="5"
                  className={`cu-input cu-textarea${form.message ? ' cu-input--filled' : ''}${errors.message ? ' cu-input--error' : ''}`}
                  placeholder=" "
                  value={form.message} onChange={handleChange}
                />
                <label htmlFor="cu-message" className="cu-label">Your Message</label>
                {errors.message && <span className="cu-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="cu-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="cu-submit-spinner" />
                    Sending…
                  </>
                ) : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="cu-status cu-status--success">
                  ✓ Message sent — we'll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="cu-status cu-status--error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────── */}
      <section className="cu-map-section" data-navbar-theme="light">
        <div className="cu-map-inner">
          <div className="cu-map-header">
            <span className="cu-eyebrow cu-eyebrow--dark">Our Location</span>
            <h2 className="cu-section-title">Head Office</h2>
            <p className="cu-section-sub">Ghaznavi Block, Bahria Town Lahore</p>
          </div>
          <div className="cu-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.8259672753991!2d74.17129288585336!3d31.35335800649205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855b693a67967%3A0xfe5faf5691431764!2sGREENLAND%20ZONE%20HEAD%20OFFICE!5e0!3m2!1sen!2sus!4v1769966478921!5m2!1sen!2sus"
              loading="lazy"
              title="Head Office Location"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="cu-faq-section" data-navbar-theme="light">
        <div className="cu-faq-inner">
          <div className="cu-faq-heading-block">
            <span className="cu-eyebrow cu-eyebrow--dark">Common Questions</span>
            <h2 className="cu-section-title">Frequently Asked</h2>
          </div>

          <div className="cu-faq-list">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`cu-faq-item${openFaq === i ? ' cu-faq-item--open' : ''}`}
              >
                <button
                  className="cu-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="cu-faq-num">0{i + 1}</span>
                  <span className="cu-faq-question">{faq.question}</span>
                  <span className="cu-faq-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className="cu-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
