import React from 'react';
import { Compass, ShieldCheck, HardHat, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AboutVision() {
  const pillars = [
    {
      icon: <HardHat size={24} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Infrastructure Discipline',
      description: 'Dedicated to precision engineering, structural longevity, and standard-compliant construction practices.'
    },
    {
      icon: <Compass size={24} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Strategic Urban Growth',
      description: 'Rooted in the high-growth commercial corridor of Thane and Navi Mumbai, unlocking modern development potential.'
    },
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Executive Accountability',
      description: 'Hands-on leadership by experienced directors, ensuring rigorous project oversight and open communication.'
    },
    {
      icon: <TrendingUp size={24} style={{ color: 'var(--color-gold-base)' }} />,
      title: 'Future-Ready Solutions',
      description: 'Embracing sustainable practices and future-proof design principles to build lasting infrastructure.'
    }
  ];

  return (
    <section id="vision" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>Vision & Mission</span>
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Engineered For Excellence. <br />
            <span className="gold-text">Dedicated to Progress.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            At <strong>KUN Infra Pvt Ltd</strong>, "Building The Future" is more than our motto—it is our operational blueprint. 
            We approach modern infrastructure with a steadfast commitment to structural integrity, transparent partnerships, 
            and forward-looking civil development.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="gold-card"
              style={{
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-gold-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border-gold)'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.18rem',
                fontWeight: 700,
                color: 'var(--color-primary-navy)'
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Core Values Callout */}
        <div style={{
          background: 'linear-gradient(135deg, #092347 0%, #041124 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2rem',
          color: '#FFFFFF',
          border: '1px solid rgba(197, 154, 39, 0.3)',
          boxShadow: 'var(--shadow-card)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge-dark-gold" style={{ marginBottom: '0.75rem' }}>
              OUR COMMITMENT
            </span>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '0.85rem'
            }}>
              Uncompromising Standards in Every Venture
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.65 }}>
              Whether developing commercial structures or executing complex infrastructure works, our leadership ensures that every specification is met with rigorous quality checks, ethical adherence, and client satisfaction.
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
              'Direct Director-level communication & accountability',
              'Compliance with local civil & municipal development codes',
              'Optimal resource management & robust structural planning',
              'Rooted in Everest Nivara, a prime corporate IT & commercial ecosystem'
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#F1F5F9' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
