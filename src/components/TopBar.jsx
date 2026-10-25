import React, { useState } from 'react';
import { Phone, MapPin, Clock, Copy, Check } from 'lucide-react';

export default function TopBar() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+91 98251 350 52';

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      backgroundColor: 'var(--color-primary-dark)',
      color: '#E2E8F0',
      fontSize: '0.82rem',
      borderBottom: '1px solid rgba(197, 154, 39, 0.25)',
      padding: '0.45rem 0',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Left: Location & Hours */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1' }}>
            <MapPin size={13} style={{ color: 'var(--color-gold-light)' }} />
            <span>Everest Nivara, Thane, Navi Mumbai – 400 703</span>
          </div>
          <div style={{ display: 'none', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }} className="topbar-hours">
            <Clock size={13} style={{ color: 'var(--color-gold-light)' }} />
            <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
          </div>
        </div>

        {/* Right: Quick Direct Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
          <span style={{ color: 'var(--color-gold-accent)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            DIRECTOR INQUIRIES:
          </span>
          <a
            href="tel:+919825135052"
            style={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-light)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
          >
            <Phone size={13} style={{ color: 'var(--color-gold-light)' }} />
            <span>+91 98251 350 52</span>
          </a>
          <button
            onClick={handleCopyPhone}
            title="Copy Phone Number"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: copied ? '#4ADE80' : '#E2E8F0',
              padding: '0.2rem 0.45rem',
              borderRadius: '4px',
              fontSize: '0.72rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'all 0.2s ease'
            }}
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
