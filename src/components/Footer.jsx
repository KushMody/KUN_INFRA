import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-primary-dark)',
      color: '#FFFFFF',
      borderTop: '2px solid var(--color-gold-base)',
      position: 'relative'
    }}>
      {/* Closing Call to Action Banner (from document) */}
      <div style={{
        backgroundColor: 'var(--color-primary-navy)',
        borderBottom: '1px solid rgba(197, 154, 39, 0.25)',
        padding: '3.5rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <span className="badge-dark-gold" style={{ marginBottom: '0.75rem' }}>
                PROJECT CONSULTATION
              </span>
              <h3 style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>
                PLANNING A PROJECT? LET’S TALK.
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.65 }}>
                Share a little about your construction plans and location. Our team can discuss your requirements and the next steps for a suitable project consultation.
              </p>
            </div>

            <div>
              <a href="#contact" className="btn btn-gold" style={{ padding: '0.9rem 1.8rem' }}>
                <span>SEND A PROJECT ENQUIRY</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: Brand & Official Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--color-gold-base)',
                backgroundColor: '#FFFFFF',
                flexShrink: 0
              }}>
                <img
                  src="/logo.jpg"
                  alt="KUN INFRA PVT LTD Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF'
                }}>
                  KUN <span style={{ color: 'var(--color-gold-light)' }}>INFRA</span> PVT LTD
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-accent)'
                }}>
                  BUILDING THE FUTURE
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Construction solutions for the places where people live, work, connect and grow. Residential, commercial and civil construction across Mumbai and South Gujarat.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.78rem',
              color: 'var(--color-gold-accent)',
              backgroundColor: 'rgba(236, 200, 94, 0.08)',
              padding: '0.35rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(236, 200, 94, 0.2)'
            }}>
              <ShieldCheck size={14} />
              <span>Construction • Civil Works • Project Management</span>
            </div>
          </div>

          {/* Column 2: Board of Directors & Shareholding */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Directors (50% / 50%)
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>
                  Moiz Zakiuddin Godhrawala (50%)
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--color-gold-accent)' }}>
                  Director | Construction, Interior Design & PM
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>
                  Shailesh Veljibhai Paladia (50%)
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--color-gold-accent)' }}>
                  Director | Business Management & Growth Strategy
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Office & Direct Contacts */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Office & Inquiries
            </h4>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
              <MapPin size={17} style={{ color: 'var(--color-gold-light)', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                Plot No. D-3, 401, Everest Nivara,<br />
                Thane, Navi Mumbai – 400 703<br />
                Maharashtra, India
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Clock size={16} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                Mon to Sat, 9:30 AM – 6:30 PM
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <Mail size={16} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
              <a href="mailto:kuninfrapvtltd@gmail.com" style={{ fontSize: '0.85rem', color: '#E2E8F0', textDecoration: 'none' }}>
                kuninfrapvtltd@gmail.com
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={16} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>
                +91 94284 97168 / +91 98251 35052
              </div>
            </div>
          </div>

          {/* Column 4: Main Navigation Links */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Navigation
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'HOME', href: '#home' },
                { name: 'ABOUT US', href: '#about' },
                { name: 'SERVICES', href: '#services' },
                { name: 'PROJECTS & EXPERIENCE', href: '#experience' },
                { name: 'QUALITY & SAFETY', href: '#quality-safety' },
                { name: 'CONTACT US', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-light)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner: Final Brand Message & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.84rem',
          color: '#94A3B8'
        }}>
          <div>
            <strong>KUN INFRA PVT LTD</strong>  |  <strong>BUILDING THE FUTURE</strong><br />
            <span style={{ fontSize: '0.78rem' }}>Construction • Civil Works • Project Management • www.kuninfra.com</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>© {new Date().getFullYear()} KUN INFRA PVT LTD. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                background: 'rgba(236, 200, 94, 0.15)',
                border: '1px solid rgba(236, 200, 94, 0.3)',
                color: 'var(--color-gold-accent)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold-base)';
                e.currentTarget.style.color = '#041124';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(236, 200, 94, 0.15)';
                e.currentTarget.style.color = 'var(--color-gold-accent)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
