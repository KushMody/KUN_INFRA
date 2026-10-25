import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Award, Check, Copy, Share2, Shield, UserCheck } from 'lucide-react';

export default function Directors() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const phoneRaw = '+919825135052';
  const phoneDisplay = '+91 98251 350 52';

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(true);
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedPhone(false);
      setToastMessage('');
    }, 2500);
  };

  const directors = [
    {
      id: 1,
      name: 'Moiz Zakiuddin Godhrawala',
      role: 'Director',
      designation: 'Executive Director & Corporate Liaison',
      initials: 'MG',
      phone: phoneDisplay,
      phoneClean: phoneRaw,
      whatsapp: 'https://wa.me/919825135052?text=Hello%20Mr.%20Moiz%20Godhrawala%2C%20I%20am%20inquiring%20about%20KUN%20Infra%20Pvt%20Ltd.',
      bio: 'Leading strategic corporate direction, stakeholder partnerships, and operational governance for KUN Infra Pvt Ltd. Available for direct business, project, and investor inquiries.',
      highlights: [
        'Corporate Project Oversight',
        'Direct Executive Contact',
        'Strategic Partnerships & Procurement'
      ]
    },
    {
      id: 2,
      name: 'Shailesh Veljibhai Paladia',
      role: 'Director',
      designation: 'Director & Strategic Operations',
      initials: 'SP',
      phone: null, // As not provided in prompt, kept clean & accurate
      bio: 'Directing infrastructure growth, engineering planning, compliance, and long-term vision to cement KUN Infra Pvt Ltd as a dependable partner in Maharashtra.',
      highlights: [
        'Infrastructure Strategic Execution',
        'Quality & Technical Governance',
        'Operational Excellence'
      ]
    }
  ];

  return (
    <section
      id="leadership"
      className="bg-grid-pattern"
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Toast Notification */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              backgroundColor: 'var(--color-primary-dark)',
              color: '#FFFFFF',
              border: '1.5px solid var(--color-gold-base)',
              padding: '0.85rem 1.4rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              zIndex: 9999,
              fontSize: '0.9rem',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            <Check size={16} color="var(--color-gold-light)" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Award size={14} style={{ color: 'var(--color-gold-base)' }} />
            <span>EXECUTIVE GOVERNANCE</span>
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Board of Directors
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            The leadership of <strong>KUN Infra Pvt Ltd</strong> brings decisive management, technical experience, 
            and ethical dedication to guide our mission of Building The Future.
          </p>
        </div>

        {/* Directors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1050px',
          margin: '0 auto'
        }}>
          {directors.map((director) => (
            <div
              key={director.id}
              className="gold-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Stripe */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--gold-gradient)'
              }} />

              <div>
                {/* Header with Monogram & Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  {/* Monogram Badge */}
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'var(--navy-gradient)',
                    border: '2px solid var(--color-gold-base)',
                    boxShadow: 'var(--shadow-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--color-gold-accent)',
                      letterSpacing: '0.05em'
                    }}>
                      {director.initials}
                    </span>
                  </div>

                  <div>
                    <span className="badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
                      {director.role}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-navy)',
                      marginTop: '0.35rem',
                      lineHeight: 1.25
                    }}>
                      {director.name}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      KUN Infra Pvt Ltd
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-body)',
                  marginBottom: '1.5rem'
                }}>
                  {director.bio}
                </p>

                {/* Key Responsibilities / Highlights */}
                <div style={{
                  backgroundColor: 'var(--color-bg-soft)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.75rem',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.5rem'
                  }}>
                    Leadership Scope
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {director.highlights.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-main)' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--color-gold-base)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Actions Footer */}
              <div>
                {director.phone ? (
                  <div style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        Direct Telephone:
                      </div>
                      <button
                        onClick={() => handleCopy(director.phoneClean, 'Phone number')}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--color-gold-dark)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        {copiedPhone ? <Check size={13} color="#16A34A" /> : <Copy size={13} />}
                        <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a
                        href={`tel:${director.phoneClean}`}
                        className="btn btn-navy"
                        style={{ fontSize: '0.85rem', padding: '0.65rem 0.85rem' }}
                      >
                        <Phone size={14} />
                        <span>Call Direct</span>
                      </a>
                      <a
                        href={director.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                        style={{ fontSize: '0.85rem', padding: '0.65rem 0.85rem' }}
                      >
                        <MessageSquare size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      Corporate Communication:
                    </div>
                    <a
                      href="#contact"
                      className="btn btn-outline-gold"
                      style={{ fontSize: '0.85rem', padding: '0.65rem 0.85rem', width: '100%' }}
                    >
                      <Mail size={14} />
                      <span>Send Inquiries via Corporate Office</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
