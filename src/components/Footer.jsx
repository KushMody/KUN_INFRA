import React from 'react';
import { Phone, MapPin, ArrowUp, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-primary-dark)',
      color: '#FFFFFF',
      borderTop: '2px solid var(--color-gold-base)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Column 1: Company & Brand Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--color-gold-base)',
                backgroundColor: '#FFFFFF',
                flexShrink: 0
              }}>
                <img
                  src="/logo.jpg"
                  alt="KUN Infra Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF'
                }}>
                  KUN <span style={{ color: 'var(--color-gold-light)' }}>INFRA</span>
                </div>
                <div style={{
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-accent)'
                }}>
                  Building The Future
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              KUN Infra Pvt Ltd is a premier infrastructure entity dedicated to executing high-standard civil, commercial, and structural works with uncompromising integrity.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-gold-accent)' }}>
              <ShieldCheck size={14} />
              <span>Registered Private Limited Entity</span>
            </div>
          </div>

          {/* Column 2: Board of Directors & Governance */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Board of Directors
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>
                  Moiz Zakiuddin Godhrawala
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-accent)', marginBottom: '0.35rem' }}>
                  Director
                </div>
                <a
                  href="tel:+919825135052"
                  style={{
                    color: '#E2E8F0',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Phone size={12} color="var(--color-gold-light)" />
                  <span>+91 98251 350 52</span>
                </a>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>
                  Shailesh Veljibhai Paladia
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-accent)' }}>
                  Director
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Registered Office */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Corporate Office
            </h4>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <MapPin size={18} style={{ color: 'var(--color-gold-light)', flexShrink: 0, marginTop: '3px' }} />
              <div style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                <strong>Everest Nivara</strong><br />
                Office No. 401, Plot No. D3,<br />
                Thane, New Mumbai (Navi Mumbai)<br />
                Maharashtra – 400 703
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Everest+Nivara+Plot+D3+Thane+Navi+Mumbai+400703"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-gold-accent)',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Get Directions to Office →</span>
            </a>
          </div>

          {/* Column 4: Quick Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--color-gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Corporate Overview', href: '#overview' },
                { name: 'Vision & Values', href: '#vision' },
                { name: 'Board of Directors', href: '#leadership' },
                { name: 'Capabilities', href: '#capabilities' },
                { name: 'Office & Directions', href: '#location' },
                { name: 'Contact Inquiries', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
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

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#94A3B8'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>KUN Infra Pvt Ltd</strong>. All rights reserved. Building The Future.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Thane • Navi Mumbai • Maharashtra</span>
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
