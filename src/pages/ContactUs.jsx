import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SEO } from '../components/SEO';
import '../styles/contactus.css';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  // Dynamic header text
  const greetings = ["Let's talk.", "Get in touch.", "Contact us."];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % greetings.length;
      setCurrentGreeting(greetings[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Contact information data
  const infoCards = [
    {
      icon: '📞',
      label: 'Call Us',
      lines: ['Landline: 042-3644228267', 'Hotline: 0303 8847336']
    },
    {
      icon: '📍',
      label: 'Head Office',
      lines: ['Ghaznavi Block Plot # 29 commercial Area, Bahria Town Lahore', 'Phone: 0345-8432667']
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

  const teamMembers = [
    { name: "Ali Akbar", role: "Sales Inquiries", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AA" },
    { name: "Ashiq Hussain", role: "Technical Support", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AH" },
    { name: "Ali Raza", role: "General Questions", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AR" }
  ];

  // Form validation
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    try {
      // Send email using EmailJS
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
  
  const getIconComponent = (iconType) => {
    const icons = {
      '📞': <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>,
      '📍': <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
      '🏭': <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
      '🇬🇧': <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>,
    };
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">{icons[iconType]}</svg>;
  };

  return (
    <div className="contact-page-wrapper" data-navbar-theme="light">
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Greenland Zone for dairy farming solutions, equipment inquiries, and farm consultancy. Visit our head office in Bahria Town Lahore or site office in Sahiwal."
        keywords="contact Greenland Zone, dairy farming inquiry, farm consultation, dairy equipment support, Pakistan dairy solutions"
        url="https://greenlandzone.com/contact"
      />
      <div className="contact-page">
        <div className="contact-background">
          <div className="contact-shape shape1"></div>
          <div className="contact-shape shape2"></div>
        </div>

        <div className="contact-container">
          <header className="contact-header">
            <h1 className="contact-title" key={currentGreeting}>
              {currentGreeting.split("").map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="contact-subtitle">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
          </header>

          <div className="contact-content-grid">
            {/* Left Column - Info */}
            <div className="contact-info-column">
              <div className="contact-info-stack">
                {infoCards.map((item, idx) => (
                  <div key={idx} className="info-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="info-card-icon-wrapper">
                      {getIconComponent(item.icon)}
                    </div>
                    <div className="info-card-text">
                      <h3 className="info-card-label">{item.label}</h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="info-card-line">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Section */}
              <div className="map-section">
                <h2 className="section-title">Our Head Office</h2>
                <div className="map-container">
                  <iframe 
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0274147462097!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s" 
                    loading="lazy"
                    title="Head Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-column">
              <div className="contact-form-container">
                <h2 className="form-title">Send a Message</h2>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input
                      type="text" id="name" name="name"
                      className="form-input" placeholder=" "
                      value={form.name} onChange={handleChange}
                    />
                    <label htmlFor="name" className="form-label">Full Name</label>
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  <div className="form-group">
                    <input
                      type="email" id="email" name="email"
                      className="form-input" placeholder=" "
                      value={form.email} onChange={handleChange}
                    />
                    <label htmlFor="email" className="form-label">Email Address</label>
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  <div className="form-group">
                    <input
                      type="text" id="subject" name="subject"
                      className="form-input" placeholder=" "
                      value={form.subject} onChange={handleChange}
                    />
                    <label htmlFor="subject" className="form-label">Subject</label>
                    {errors.subject && <p className="form-error">{errors.subject}</p>}
                  </div>

                  <div className="form-group">
                    <textarea
                      id="message" name="message"
                      className="form-input" placeholder=" "
                      value={form.message} onChange={handleChange}
                      rows="5"
                    />
                    <label htmlFor="message" className="form-label">Your Message</label>
                    {errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" className="submit-button"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <div className="status-message success">
                      Message sent! We'll be in touch soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="status-message error">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ and Team sections */}
          <div className="additional-info-grid">
            <div className="faq-section">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-stack">
                {faqData.map((faq, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                    <div className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <span>{faq.question}</span>
                      <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="team-section">
              <h2 className="section-title">Meet Our Team</h2>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member">
                    <img src={member.avatar} alt={member.name} />
                    <div className="team-member-name">{member.name}</div>
                    <div className="team-member-role">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}