import React from 'react';
import { Building, Hammer, Shield, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: <Building size={28} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Commercial & Corporate Hubs',
      description: 'Developing high-standard commercial premises, modern office developments, and business spaces equipped for technological demands.',
      points: ['Modern structural layouts', 'High-traffic commercial efficiency', 'Institutional finishes']
    },
    {
      icon: <Hammer size={28} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Civil & Structural Engineering',
      description: 'End-to-end civil execution ranging from foundational ground engineering to robust multi-tier structural developments.',
      points: ['Rigorous RCC & steel frameworks', 'Soil & seismic consideration', 'Advanced material engineering']
    },
    {
      icon: <Layers size={28} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Industrial & Utility Development',
      description: 'Serving key industrial belts like Thane & Navi Mumbai with durable, functionally optimized warehousing and logistics spaces.',
      points: ['Heavy industrial flooring', 'Logistics ingress & egress planning', 'Turnkey civil management']
    },
    {
      icon: <Shield size={28} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Regulatory & Quality Compliance',
      description: 'Ensuring every phase of construction conforms strictly to municipal regulations, fire safety standards, and environmental norms.',
      points: ['Full statutory code adherence', 'Milestone-based quality audits', 'Safety-first site governance']
    }
  ];

  return (
    <section id="capabilities" style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>Core Expertise</span>
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Infrastructure Capabilities
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            Empowering clients and stakeholders with disciplined execution across diverse infrastructure domains.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '2rem'
        }}>
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="gold-card"
              style={{
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg-soft)',
                  border: '1.5px solid var(--color-border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {cap.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {cap.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem'
                }}>
                  {cap.description}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.25rem'
              }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {cap.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--color-gold-base)', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
