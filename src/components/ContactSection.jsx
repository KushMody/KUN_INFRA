import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  Clock, 
  Globe, 
  CheckCircle2, 
  Check, 
  Copy, 
  Navigation, 
  ExternalLink 
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    projectLocation: '',
    projectType: 'Residential',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const fullAddress = 'Plot No. D-3, 401, Everest Nivara, Thane, Navi Mumbai – 400 703 Maharashtra, India';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Everest+Nivara+Plot+D3+Thane+Navi+Mumbai+400703';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please check the consent box to confirm that you agree to be contacted.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>START A CONVERSATION</span>
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            LET’S DISCUSS YOUR NEXT PROJECT
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
            Whether you are planning a residential, commercial or civil construction project, contact <strong>KUN INFRA PVT LTD</strong> to start a conversation about your requirements and the next steps.
          </p>
        </div>

        {/* Contact Info Grid & Form */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }}>
          {/* Left Column: Supplied Official Contact Details */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #092347 0%, #041124 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 2rem',
              color: '#FFFFFF',
              border: '1.5px solid rgba(197, 154, 39, 0.3)',
              boxShadow: 'var(--shadow-elevated)'
            }}>
              <span className="badge-dark-gold" style={{ marginBottom: '1.25rem' }}>
                OFFICIAL DETAILS
              </span>

              <h3 style={{
                fontSize: '1.55rem',
                fontWeight: 800,
                marginBottom: '1rem'
              }}>
                Contact Information
              </h3>

              <p style={{ color: '#CBD5E1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Connect directly with our directors and project management team regarding assignments, technical scopes, and consultations.
              </p>

              {/* Phones */}
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
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(236, 200, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={18} style={{ color: 'var(--color-gold-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-accent)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    Phone / WhatsApp
                  </div>
                  <div style={{ marginTop: '0.3rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a
                      href="tel:+919428497168"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      +91 94284 97168
                    </a>
                    <a
                      href="tel:+919825135052"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                    >
                      +91 98251 35052
                    </a>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '0.35rem' }}>
                    Calls and official WhatsApp inquiries
                  </div>
                </div>
              </div>

              {/* Email & Website */}
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
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(236, 200, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={18} style={{ color: 'var(--color-gold-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-accent)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    Email & Website
                  </div>
                  <a
                    href="mailto:kuninfrapvtltd@gmail.com"
                    style={{ fontSize: '0.96rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none', display: 'block', marginTop: '0.2rem' }}
                  >
                    kuninfrapvtltd@gmail.com
                  </a>
                  <div style={{ fontSize: '0.85rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                    Domain: <strong>www.kuninfra.com</strong>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(236, 200, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={18} style={{ color: 'var(--color-gold-light)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-gold-accent)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    Office Address
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#F1F5F9', marginTop: '0.25rem', lineHeight: 1.55 }}>
                    Plot No. D-3, 401, Everest Nivara, Thane, Navi Mumbai – 400 703 Maharashtra, India
                  </div>
                </div>
              </div>

              {/* Working Hours & Social Media */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.82rem',
                color: '#CBD5E1'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} style={{ color: 'var(--color-gold-light)' }} />
                  <span>Mon to Sat, 9:30 AM – 6:30 PM</span>
                </div>
                <div style={{ color: 'var(--color-gold-accent)', fontStyle: 'italic' }}>
                  Social media: Profiles to be created
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form (Strict Document Fields) */}
          <div
            className="gold-card"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF'
            }}
          >
            <h3 style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              marginBottom: '0.4rem'
            }}>
              Project Enquiry Form
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              Please provide your project brief and location details. Fields marked with * are required.
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
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '0.5rem'
                }}>
                  Enquiry Transmitted
                </h4>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.projectType}</strong> at <strong>{formData.projectLocation}</strong> has been recorded for project review by KUN INFRA PVT LTD.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      phone: '',
                      email: '',
                      projectLocation: '',
                      projectType: 'Residential',
                      message: '',
                      consent: false
                    });
                  }}
                  className="btn btn-outline-gold"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Full name & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Company / Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or organisation name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Phone Number *
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
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                    />
                  </div>
                </div>

                {/* Project Location & Type of Project */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Andheri, Thane, Pune, Surat..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Type of Project
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        backgroundColor: 'var(--color-bg-soft)',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Residential">Residential Construction</option>
                      <option value="Commercial">Commercial Offices & Retail</option>
                      <option value="Hospitality">Hotels & Resorts</option>
                      <option value="Industrial / Warehouse">Industrial Buildings & Warehouses</option>
                      <option value="Civil / Structural">Civil Contracting & Structural</option>
                      <option value="Renovation / Redevelopment">Renovation & Redevelopment</option>
                      <option value="Other">Other Project Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Brief Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Brief message / What would you like to discuss?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your construction plans, intended use, timeline, or specifications..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      backgroundColor: 'var(--color-bg-soft)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Consent Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    style={{ marginTop: '3px', cursor: 'pointer', width: '16px', height: '16px' }}
                  />
                  <label htmlFor="consent" style={{ fontSize: '0.84rem', color: 'var(--color-text-body)', cursor: 'pointer', lineHeight: 1.5 }}>
                    I agree to be contacted by KUN INFRA PVT LTD regarding this project enquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-navy"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>SEND ENQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Office Location & Responsive Interactive Map Strip */}
        <div
          className="gold-card"
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid var(--color-border)'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--color-border)'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.06em' }}>
                Corporate Registered Office Location
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginTop: '0.2rem' }}>
                Everest Nivara, Thane, Navi Mumbai
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopyAddress}
                style={{
                  background: copiedAddress ? '#DCFCE7' : 'var(--color-bg-soft)',
                  border: '1px solid ' + (copiedAddress ? '#86EFAC' : 'var(--color-border)'),
                  color: copiedAddress ? '#15803D' : 'var(--color-primary-navy)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {copiedAddress ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
              </button>

              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold"
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
              >
                <Navigation size={14} />
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div style={{
            marginTop: '1.25rem',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            minHeight: '320px',
            position: 'relative'
          }}>
            <iframe
              title="KUN INFRA PVT LTD Office Location - Everest Nivara"
              src="https://maps.google.com/maps?q=Everest%20Nivara%20Plot%20D3%20Thane%20Navi%20Mumbai%20400703&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, width: '100%', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
