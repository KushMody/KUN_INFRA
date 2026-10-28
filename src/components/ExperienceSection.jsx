import React from 'react';
import { MapPin, Navigation, Compass, Building, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const gujaratLocations = ['Surat', 'Navsari', 'Dandi', 'Bharuch'];
  const mumbaiLocations = ['Andheri', 'Malad', 'Borivali'];

  return (
    <section
      id="experience"
      className="bg-grid-pattern"
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>TRACK RECORD & GEOGRAPHIC FOCUS</span>
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            EXPERIENCE THAT MOVES FORWARD
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
            Construction experience is built through coordination, site learning and attention to detail. The directors’ background includes residential high-rise and commercial projects in Surat and South Gujarat, with experience associated with Surat, Navsari, Dandi and Bharuch.
          </p>
        </div>

        {/* Dual Region Experience Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Card 1: Surat & South Gujarat Foundation */}
          <div
            className="gold-card"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '4px solid var(--color-primary-navy)'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge-gold">ESTABLISHED ROOTS</span>
              </div>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '1rem'
              }}>
                Surat & South Gujarat Foundation
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                The directors' extensive construction background spans over two decades of residential high-rise developments, civil execution, and commercial structures across the industrial and urban centers of South Gujarat.
              </p>

              {/* Verified Locations Badges */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  Associated Experience Hubs:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {gujaratLocations.map((loc) => (
                    <div
                      key={loc}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'var(--color-bg-soft)',
                        padding: '0.5rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-navy)'
                      }}
                    >
                      <MapPin size={14} style={{ color: 'var(--color-gold-base)' }} />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)'
            }}>
              Rooted in family construction legacy active since 2001
            </div>
          </div>

          {/* Card 2: Growing Presence in Mumbai */}
          <div
            className="gold-card"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '4px solid var(--color-gold-base)'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge-gold">CURRENT EXPANSION</span>
              </div>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '1rem'
              }}>
                A Growing Presence in Mumbai
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                <strong>KUN INFRA PVT LTD</strong> is developing its presence across Mumbai and nearby markets. The company has stated that residential and commercial projects are under way in key urban hubs across the Mumbai metropolitan region.
              </p>

              {/* Active Mumbai Project Locations */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                  Projects Under Way:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {mumbaiLocations.map((loc) => (
                    <div
                      key={loc}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'var(--color-gold-subtle)',
                        padding: '0.5rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-gold)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--color-gold-dark)'
                      }}
                    >
                      <Building size={14} style={{ color: 'var(--color-gold-base)' }} />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)',
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)'
            }}>
              Active residential & commercial assignments as provided by the company
            </div>
          </div>
        </div>

        {/* Portfolio Verification Policy Callout */}
        <div style={{
          backgroundColor: 'var(--color-bg-soft)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.25rem',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ maxWidth: '780px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '0.35rem' }}>
              Portfolio Transparency & Verified Project Release
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              In accordance with our commitment to transparency, this experience section is text-led. As our active portfolio develops, this section will be expanded with verified project descriptions, progress photographs and project-specific information approved for public release.
            </p>
          </div>

          <a href="#contact" className="btn btn-navy" style={{ fontSize: '0.82rem', padding: '0.7rem 1.3rem' }}>
            <span>Discuss A Project Brief</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
