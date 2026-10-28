import React, { useState } from 'react';
import { Phone, MessageSquare, Check, Copy, Award, Users, Briefcase } from 'lucide-react';

export default function Directors() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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
      share: '50% Shareholding',
      role: 'Director',
      designation: 'Construction background, Interior Designing & Project Management',
      initials: 'MG',
      phone: '+91 98251 35052',
      phoneAlt: '+91 94284 97168',
      phoneClean: '+919825135052',
      whatsapp: 'https://wa.me/919825135052?text=Hello%20Mr.%20Moiz%20Godhrawala%2C%20I%20am%20inquiring%20about%20a%20project%20with%20KUN%20INFRA%20PVT%20LTD.',
      bio: 'Moiz Zakiuddin Godhrawala holds a Bachelor of Science qualification in Interior Design and Project Management. He joined his family’s construction business in Surat, Gujarat, and has been involved in residential and commercial projects from 2001 till date. His experience across Surat and South Gujarat provides the foundation for KUN INFRA’s move into the Mumbai market and its ambition to take on projects of wider scale.',
      focus: 'His focus is on understanding the client’s vision, coordinating project execution and working to deliver outcomes that meet—and where possible exceed—client expectations.'
    },
    {
      id: 2,
      name: 'Shailesh Veljibhai Paladia',
      share: '50% Shareholding',
      role: 'Director',
      designation: 'Business Management & Growth Strategy',
      initials: 'SP',
      phone: '+91 94284 97168',
      phoneClean: '+919428497168',
      whatsapp: 'https://wa.me/919428497168?text=Hello%20Mr.%20Shailesh%20Paladia%2C%20I%20am%20inquiring%20about%20a%20project%20with%20KUN%20INFRA%20PVT%20LTD.',
      bio: 'Shailesh Veljibhai Paladia brings entrepreneurial and business-management experience from multiple sectors, including import and export, chemical manufacturing, garments and software-related businesses. His commercial perspective, management skills and forward-looking approach support KUN INFRA’s growth plans, business development and ambition to take projects to the next level.',
      focus: 'Supports business development, strategic planning, cross-sector commercial partnerships, and expanding operational capacity.'
    }
  ];

  return (
    <section
      id="leadership"
      className="bg-grid-pattern"
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#FFFFFF',
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Award size={14} style={{ color: 'var(--color-gold-base)' }} />
            <span>EXECUTIVE LEADERSHIP</span>
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            LEADERSHIP & EXPERIENCE
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            Drawing on the directors’ experience in construction, project execution, and cross-sector business management to drive disciplined infrastructure growth.
          </p>
        </div>

        {/* Directors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto 3.5rem'
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
                {/* Header with Monogram & Titles */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
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
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--color-gold-accent)',
                      letterSpacing: '0.05em'
                    }}>
                      {director.initials}
                    </span>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                      <span className="badge-gold" style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>
                        {director.role}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>
                        ({director.share})
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-navy)',
                      lineHeight: 1.25,
                      marginBottom: '0.25rem'
                    }}>
                      {director.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-dark)', fontWeight: 600, lineHeight: 1.4 }}>
                      {director.designation}
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <p style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.7,
                  color: 'var(--color-text-body)',
                  marginBottom: '1.25rem'
                }}>
                  {director.bio}
                </p>

                {/* Focus Callout */}
                <div style={{
                  backgroundColor: 'var(--color-bg-soft)',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.75rem',
                  borderLeft: '3px solid var(--color-gold-base)'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-primary-navy)',
                    marginBottom: '0.25rem'
                  }}>
                    Core Responsibility & Focus
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                    {director.focus}
                  </p>
                </div>
              </div>

              {/* Contact Actions Footer */}
              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    Direct Telephone: <strong style={{ color: 'var(--color-primary-navy)' }}>{director.phone}</strong>
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
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <a
                    href={`tel:${director.phoneClean}`}
                    className="btn btn-navy"
                    style={{ fontSize: '0.8rem', padding: '0.65rem 0.85rem' }}
                  >
                    <Phone size={14} />
                    <span>Call</span>
                  </a>
                  <a
                    href={director.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ fontSize: '0.8rem', padding: '0.65rem 0.85rem' }}
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* A Project-Led Team Strip */}
        <div style={{
          background: 'linear-gradient(135deg, #092347 0%, #041124 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          color: '#FFFFFF',
          border: '1.5px solid rgba(197, 154, 39, 0.3)',
          boxShadow: 'var(--shadow-card)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div>
            <span className="badge-dark-gold" style={{ marginBottom: '0.75rem' }}>
              DELIVERY MODEL
            </span>
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              marginBottom: '0.75rem'
            }}>
              A Project-Led Team
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7 }}>
              KUN INFRA PVT LTD currently works with a designated team of project managers, civil engineers, contractors and subcontractors. Additional professionals and specialist contractors are engaged on a project-by-project basis according to the scope, technical needs and delivery plan.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {[
              'Project Managers & Site Supervision Teams',
              'Civil & Structural Engineers',
              'Qualified Contractors & Specialist Subcontractors',
              'Tailored engagement aligned with project brief & technical scope'
            ].map((text, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-gold-light)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#F1F5F9' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
