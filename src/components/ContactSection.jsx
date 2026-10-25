import React, { useState } from 'react';
import { Send, Phone, MessageSquare, MapPin, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Infrastructure Project Consultation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>DIRECT ENGAGEMENT</span>
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Connect With Leadership
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            Have a project requirement, commercial infrastructure inquiry, or strategic partnership proposal? Reach out directly to <strong>KUN Infra Pvt Ltd</strong>.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Direct Contact Hub */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #092347 0%, #041124 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 2rem',
              color: '#FFFFFF',
              border: '1.5px solid rgba(197, 154, 39, 0.3)',
              boxShadow: 'var(--shadow-card)'
            }}>
              <span className="badge-dark-gold" style={{ marginBottom: '1.25rem' }}>
                DIRECT HOTLINE
              </span>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                Instant Director Access
              </h3>

              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                We believe in direct and transparent executive communication without unnecessary bureaucracy. Speak directly with our director.
              </p>

              {/* Contact Item: Phone */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(236, 200, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} style={{ color: 'var(--color-gold-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-gold-accent)', fontWeight: 700 }}>
                    Moiz Zakiuddin Godhrawala (Director)
                  </div>
                  <a
                    href="tel:+919825135052"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      display: 'block',
                      marginTop: '0.2rem'
                    }}
                  >
                    +91 98251 350 52
                  </a>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                    Voice calls & official WhatsApp available
                  </div>
                </div>
              </div>

              {/* Contact Item: Office */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(236, 200, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} style={{ color: 'var(--color-gold-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--color-gold-accent)', fontWeight: 700 }}>
                    Registered Corporate Address
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#F1F5F9', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    Plot No. D3, Office No. 401 Everest Nivara, Thane, Navi Mumbai, Maharashtra 400703
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <a
                  href="tel:+919825135052"
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                >
                  <Phone size={16} />
                  <span>Call Direct</span>
                </a>
                <a
                  href="https://wa.me/919825135052?text=Hello%20Mr.%20Moiz%2C%20I%20am%20reaching%20out%20regarding%20KUN%20Infra%20Pvt%20Ltd."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div
            className="gold-card"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF'
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              marginBottom: '0.5rem'
            }}>
              Send an Official Inquiry
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              Please provide your project details below and our management will review your request.
            </p>

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                backgroundColor: 'var(--color-bg-soft)',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--color-border-gold)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#DCFCE7',
                  color: '#15803D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '0.5rem'
                }}>
                  Inquiry Received
                </h4>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                  Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Your communication has been dispatched to KUN Infra Pvt Ltd leadership. We will be in touch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      subject: 'Infrastructure Project Consultation',
                      message: ''
                    });
                  }}
                  className="btn btn-outline-gold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      backgroundColor: 'var(--color-bg-soft)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold-base)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold-base)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold-base)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Inquiry Nature
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: 'var(--color-bg-soft)',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Infrastructure Project Consultation">Infrastructure Project Consultation</option>
                    <option value="Commercial Development Proposal">Commercial Development Proposal</option>
                    <option value="Vendor / Sub-Contractor Association">Vendor / Sub-Contractor Association</option>
                    <option value="Direct Management Discussion">Direct Management Discussion</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Message / Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements, location, or inquiry scope..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      backgroundColor: 'var(--color-bg-soft)',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold-base)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-navy"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Official Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
