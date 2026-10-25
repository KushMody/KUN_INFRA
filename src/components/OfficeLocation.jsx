import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Building, Clock, Compass } from 'lucide-react';

export default function OfficeLocation() {
  const [copied, setCopied] = useState(false);

  const fullAddress = 'Plot No. D3, Office No. 401 Everest Nivara, Thane, Navi Mumbai, Maharashtra – 400 703';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Everest+Nivara+Plot+D3+Thane+Navi+Mumbai+400703';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location"
      className="bg-grid-pattern"
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Building size={14} style={{ color: 'var(--color-gold-base)' }} />
            <span>HEADQUARTERS & WORKSPACE</span>
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Corporate Office
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            Strategically located at <strong>Everest Nivara</strong> in the vibrant Thane-Navi Mumbai commercial hub, 
            our corporate office oversees projects, client consultations, and executive operations.
          </p>
        </div>

        {/* Office Details & Interactive Map Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Left: Structured Address Information Card */}
          <div
            className="gold-card"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span className="badge-gold">
                  OFFICIAL REGISTERED ADDRESS
                </span>
                <button
                  onClick={handleCopy}
                  style={{
                    background: copied ? '#DCFCE7' : 'var(--color-bg-soft)',
                    border: '1px solid ' + (copied ? '#86EFAC' : 'var(--color-border)'),
                    color: copied ? '#15803D' : 'var(--color-primary-navy)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Address Copied!' : 'Copy Full Address'}</span>
                </button>
              </div>

              {/* Company & Building Header */}
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--color-primary-navy)',
                marginBottom: '0.5rem'
              }}>
                KUN Infra Pvt Ltd
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-gold-dark)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem'
              }}>
                Building The Future
              </p>

              {/* Structured Address Breakdown */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'var(--color-bg-soft)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <MapPin size={20} style={{ color: 'var(--color-gold-base)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      Premises
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                      Plot No. D3, Office No. 401
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Building size={20} style={{ color: 'var(--color-gold-base)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      Commercial Complex
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                      Everest Nivara
                    </div>
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Compass size={20} style={{ color: 'var(--color-gold-base)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      City & Postal Code
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                      Thane, New Mumbai (Navi Mumbai) – 400 703
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                <Clock size={16} style={{ color: 'var(--color-gold-base)', flexShrink: 0 }} />
                <span>Operating Hours: Monday – Saturday: 9:30 AM – 6:30 PM</span>
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '2rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--color-border)'
            }}>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <Navigation size={16} />
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={handleCopy}
                className="btn btn-outline-gold"
              >
                <Copy size={15} />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Maps / Visual Frame */}
          <div
            className="gold-card"
            style={{
              padding: '1.25rem',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Visual Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 0.75rem 1rem',
              borderBottom: '1px solid var(--color-border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                  Everest Nivara • Commercial Complex
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                Navi Mumbai 400703
              </span>
            </div>

            {/* Embedded Responsive Map */}
            <div style={{
              position: 'relative',
              flex: 1,
              minHeight: '340px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginTop: '1rem',
              border: '1px solid var(--color-border)'
            }}>
              <iframe
                title="Office Location Map - Everest Nivara"
                src="https://maps.google.com/maps?q=Everest%20Nivara%20Plot%20D3%20Thane%20Navi%20Mumbai%20400703&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px', width: '100%', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Landmark Guidance Footer */}
            <div style={{
              marginTop: '1rem',
              padding: '0.85rem 1rem',
              backgroundColor: 'var(--color-bg-soft)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: 'var(--color-text-body)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}>
              <span><strong>Connectivity:</strong> Convenient access via Thane-Belapur Highway and Navi Mumbai transit corridors.</span>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-gold-dark)', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
