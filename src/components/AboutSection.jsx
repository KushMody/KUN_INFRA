import React from 'react';
import { Target, Compass, Sparkles, MapPin, CheckCircle, Shield, Award, Users, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      title: 'Trust and transparency',
      description: 'Clear communication on scope, specifications, costs, decisions and changes.',
      icon: <Shield size={24} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Quality and care',
      description: 'Attention to materials, workmanship and checks at appropriate stages of construction.',
      icon: <Award size={24} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Accountability',
      description: 'Clear responsibilities and documented client approvals for project changes.',
      icon: <CheckCircle size={24} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Planning and coordination',
      description: 'Bringing together project managers, engineers, contractors and other required professionals.',
      icon: <Users size={24} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Long-term relationships',
      description: 'Working to earn client confidence through respectful service and dependable project practices.',
      icon: <HeartHandshake size={24} style={{ color: 'var(--color-gold-base)' }} />
    }
  ];

  return (
    <section
      id="about"
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>
            ABOUT THE COMPANY
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '0.75rem',
            textTransform: 'uppercase'
          }}>
            ABOUT KUN INFRA PVT LTD
          </h2>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            color: 'var(--color-gold-dark)',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            Building with purpose. Growing with trust.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
            KUN INFRA PVT LTD is being established with an ambition to build a trusted construction business serving residential, commercial and civil construction needs. Our initial focus is Mumbai, Navi Mumbai, Thane, Pune and surrounding areas, with a longer-term ambition to expand into wider markets across India.
          </p>
        </div>

        {/* Company Background & Story Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Company Foundation Description */}
          <div className="gold-card" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              marginBottom: '1.25rem'
            }}>
              Our Foundation & Execution Model
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              The company brings together <strong>Moiz Zakiuddin Godhrawala’s</strong> long-standing involvement in construction in Surat and South Gujarat and <strong>Shailesh Veljibhai Paladia’s</strong> multi-sector business and management experience.
            </p>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Project delivery is supported by a designated team of project managers, civil engineers, contractors and subcontractors, with additional professionals engaged according to each project’s needs.
            </p>
            <div style={{
              backgroundColor: 'var(--color-bg-soft)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-gold-base)'
            }}>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-navy)', lineHeight: 1.6 }}>
                "Our aim is straightforward: understand the client’s requirements, coordinate the right people, follow agreed drawings and specifications, communicate clearly and give due attention to workmanship, safety and project control."
              </p>
            </div>
          </div>

          {/* The Story Behind KUN */}
          <div className="dark-gold-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Sparkles size={18} style={{ color: 'var(--color-gold-light)' }} />
                <span className="badge-dark-gold">BRAND ORIGIN</span>
              </div>
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1.25rem'
              }}>
                The Story Behind "KUN"
              </h3>
              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The name <strong>“KUN”</strong> reflects the idea of something coming into being. As shared by the founders, the name connects with a personal dream of working at a wider scale and seeing that ambition become reality.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-gold-accent)', lineHeight: 1.8, fontWeight: 500 }}>
                It represents the spirit of turning a vision into something tangible—one project at a time.
              </p>
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#CBD5E1',
              fontSize: '0.85rem'
            }}>
              <MapPin size={16} style={{ color: 'var(--color-gold-light)' }} />
              <span>Coverage: Mumbai, Navi Mumbai, Thane, Pune & surrounding areas</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          <div className="gold-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-gold-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Target size={22} style={{ color: 'var(--color-gold-base)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-navy)' }}>
                Vision
              </h3>
            </div>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
              To become a trusted and reliable construction company known for executing good infrastructure and building projects, earning clients’ confidence through quality, accountability and professional project delivery.
            </p>
          </div>

          <div className="gold-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-gold-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Compass size={22} style={{ color: 'var(--color-gold-base)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-navy)' }}>
                Mission
              </h3>
            </div>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
              To bring clients’ construction plans to life through careful coordination, responsible execution, transparent communication and a consistent focus on workmanship, safety and value.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.6rem' }}>
              OPERATING PRINCIPLES
            </span>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              textTransform: 'uppercase'
            }}>
              Our Values
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {values.map((val, idx) => (
              <div
                key={idx}
                className="gold-card"
                style={{
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-soft)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {val.icon}
                </div>
                <h4 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)'
                }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Area Strip */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          border: '1.5px solid var(--color-border-gold)',
          boxShadow: 'var(--shadow-card)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <MapPin size={16} style={{ color: 'var(--color-gold-base)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-gold-dark)', letterSpacing: '0.06em' }}>
                Operational Reach
              </span>
            </div>
            <h4 style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--color-primary-navy)',
              marginBottom: '0.4rem'
            }}>
              Coverage Area & Geographical Focus
            </h4>
          </div>
          <div>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '0.5rem' }}>
              <strong>Initial Focus:</strong> Mumbai, Navi Mumbai, Thane, Pune and surrounding areas within approximately 100 km of Mumbai, subject to project fit and team availability.
            </p>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              <strong>Future Ambition:</strong> Expand progressively into wider markets across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
