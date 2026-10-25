import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowRight, Building2, Award, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="overview"
      className="bg-grid-pattern"
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Subtle Ambient Glow Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 154, 39, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(9, 35, 71, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Brand Statement & Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge-gold">
                <ShieldCheck size={14} style={{ color: 'var(--color-gold-base)' }} />
                <span>KUN INFRA PVT LTD • CORPORATE PROFILE</span>
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.12,
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              letterSpacing: '-0.01em',
              marginBottom: '1rem'
            }}>
              Building <br />
              <span className="gold-text">The Future.</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              lineHeight: 1.7,
              color: 'var(--color-text-body)',
              marginBottom: '2rem',
              maxWidth: '540px'
            }}>
              <strong>KUN Infra Pvt Ltd</strong> stands at the forefront of modern infrastructure development.
              Guided by experienced leadership and based in the thriving commercial corridor of Thane and Navi Mumbai, 
              we build robust foundations, visionary architectural spaces, and sustainable tomorrow.
            </p>

            {/* Direct Information Badges from Supplied Content */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '2.5rem',
              background: '#FFFFFF',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              maxWidth: '540px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <Building2 size={20} style={{ color: 'var(--color-gold-base)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Corporate Registered Office
                  </div>
                  <div>Plot No. D3, Office No. 401 Everest Nivara, Thane, Navi Mumbai – 400 703</div>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Phone size={18} style={{ color: 'var(--color-gold-base)', flexShrink: 0 }} />
                <div style={{ fontSize: '0.92rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--color-primary-navy)' }}>Director Hotline: </span>
                  <a
                    href="tel:+919825135052"
                    style={{ color: 'var(--color-primary-navy)', fontWeight: 700, textDecoration: 'none' }}
                  >
                    +91 98251 350 52
                  </a>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginLeft: '0.4rem' }}>
                    (Moiz Z. Godhrawala)
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#leadership" className="btn btn-navy">
                <span>Meet The Directors</span>
                <ArrowRight size={16} />
              </a>
              <a href="#location" className="btn btn-outline-gold">
                <MapPin size={16} />
                <span>Visit Corporate Office</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Logo Card */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #FAF8F5 100%)',
                padding: '2.5rem 2rem',
                border: '1.5px solid var(--color-border-gold)',
                boxShadow: 'var(--shadow-elevated), 0 0 35px rgba(197, 154, 39, 0.12)',
                textAlign: 'center'
              }}
            >
              {/* Gold Corner Accents */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                width: '18px',
                height: '18px',
                borderTop: '2px solid var(--color-gold-base)',
                borderLeft: '2px solid var(--color-gold-base)'
              }} />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '18px',
                height: '18px',
                borderTop: '2px solid var(--color-gold-base)',
                borderRight: '2px solid var(--color-gold-base)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                width: '18px',
                height: '18px',
                borderBottom: '2px solid var(--color-gold-base)',
                borderLeft: '2px solid var(--color-gold-base)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                width: '18px',
                height: '18px',
                borderBottom: '2px solid var(--color-gold-base)',
                borderRight: '2px solid var(--color-gold-base)'
              }} />

              {/* Logo Presentation */}
              <div style={{
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto 1.5rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(9, 35, 71, 0.06)'
              }}>
                <img
                  src="/logo.jpg"
                  alt="KUN Infra Pvt Ltd - Building The Future"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div className="gold-divider">
                <span className="gold-divider-diamond" />
              </div>

              {/* Sub-text card */}
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: 'var(--color-primary-navy)',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '0.25rem'
              }}>
                KUN INFRA PVT LTD
              </h2>
              <p style={{
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--color-gold-dark)',
                marginBottom: '1.25rem'
              }}>
                Building The Future
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--color-border)'
              }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Entity Status
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    Private Limited
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Corporate Hub
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    Thane / Navi Mumbai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
