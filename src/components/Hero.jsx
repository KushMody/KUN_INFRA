import React from 'react';
import { ArrowRight, MessageSquare, Building2, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-grid-pattern"
        style={{
          position: 'relative',
          paddingTop: '4rem',
          paddingBottom: '5.5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-ivory)'
        }}
      >
        {/* Ambient Lighting Gradients */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197, 154, 39, 0.14) 0%, rgba(255, 255, 255, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-10%',
            width: '500px',
            height: '500px',
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
            {/* Left Column: Official Hero Content */}
            <div>
              {/* Eyebrow */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="badge-gold">
                  <ShieldCheck size={14} style={{ color: 'var(--color-gold-base)' }} />
                  <span>CONSTRUCTION • CIVIL WORKS • PROJECT MANAGEMENT</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 style={{
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: 900,
                color: 'var(--color-primary-navy)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                BUILDING THE <span className="gold-text">FUTURE</span>
              </h1>

              {/* Supporting Headline */}
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-gold-dark)',
                lineHeight: 1.45,
                marginBottom: '1.5rem',
                maxWidth: '580px'
              }}>
                Construction solutions for the places where people live, work, connect and grow.
              </p>

              {/* Introductory Paragraph */}
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--color-text-body)',
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}>
                <strong>KUN INFRA PVT LTD</strong> is building its presence across Mumbai and surrounding markets with a focus on residential, commercial and civil construction. Drawing on the directors’ experience in construction and business, we aim to bring together quality workmanship, professional supervision, transparent communication and disciplined project execution on every assignment.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href="#services" className="btn btn-navy">
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btn btn-gold">
                  <MessageSquare size={16} />
                  <span>TALK TO OUR TEAM</span>
                </a>
              </div>
            </div>

            {/* Right Column: Verified Corporate Presentation Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '450px',
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
                  maxWidth: '280px',
                  margin: '0 auto 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(9, 35, 71, 0.08)'
                }}>
                  <img
                    src="/logo.jpg"
                    alt="KUN INFRA PVT LTD - Building The Future"
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

                <h2 style={{
                  fontSize: '1.4rem',
                  color: 'var(--color-primary-navy)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  marginBottom: '0.25rem'
                }}>
                  KUN INFRA PVT LTD
                </h2>
                <p style={{
                  fontSize: '0.82rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--color-gold-dark)',
                  marginBottom: '1.5rem'
                }}>
                  BUILDING THE FUTURE
                </p>

                {/* Directors Shareholding Note */}
                <div style={{
                  backgroundColor: 'var(--color-bg-soft)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  marginBottom: '1.25rem',
                  textAlign: 'left'
                }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    Directors & Shareholding
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.2rem' }}>
                    • Moiz Zakiuddin Godhrawala (50%)
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                    • Shailesh Veljibhai Paladia (50%)
                  </div>
                </div>

                {/* Registered Address */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  textAlign: 'left',
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5
                }}>
                  <MapPin size={16} style={{ color: 'var(--color-gold-base)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    Plot No. D-3, 401, Everest Nivara, Thane, Navi Mumbai – 400 703 Maharashtra, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section: A Construction Partner with a Long-Term Vision */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>
              OUR APPROACH
            </span>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
              color: 'var(--color-primary-navy)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              A Construction Partner with a Long-Term Vision
            </h2>

            <p style={{
              fontSize: '1.12rem',
              color: 'var(--color-text-body)',
              lineHeight: 1.8,
              marginBottom: '1.25rem'
            }}>
              Every project begins with a vision and depends on careful planning, coordinated execution and attention to detail. <strong>KUN INFRA PVT LTD</strong> brings a practical, client-focused approach to construction, supported by project managers, civil engineers, contractors and specialist teams appointed according to each project’s needs.
            </p>

            <p style={{
              fontSize: '1.08rem',
              color: 'var(--color-text-body)',
              lineHeight: 1.8,
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--color-bg-soft)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-gold-base)',
              textAlign: 'left'
            }}>
              Our roots in <strong>Surat and South Gujarat</strong>, together with our growing presence in the <strong>Mumbai region</strong>, shape our approach: understand the brief, plan responsibly, communicate clearly and work toward a durable result.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
