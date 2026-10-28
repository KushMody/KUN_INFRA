import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      backgroundColor: '#030d1c',
      color: '#CBD5E1',
      fontSize: '0.78rem',
      borderBottom: '1px solid rgba(197, 154, 39, 0.22)',
      padding: '0.42rem 0',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        gap: '1rem',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        {/* Left: Office & Operating Hours */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1' }}>
            <MapPin size={13} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
            <span>Plot No. D-3, 401, Everest Nivara, Thane, Navi Mumbai – 400 703</span>
          </div>

          <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
            <Clock size={13} style={{ color: 'var(--color-gold-light)', flexShrink: 0 }} />
            <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
          </div>
        </div>

        {/* Right: Direct Phones & Email */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          marginLeft: 'auto',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}>
          <a
            href="mailto:kuninfrapvtltd@gmail.com"
            style={{
              color: '#CBD5E1',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-light)'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
          >
            <Mail size={13} style={{ color: 'var(--color-gold-light)' }} />
            <span>kuninfrapvtltd@gmail.com</span>
          </a>

          <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <Phone size={13} style={{ color: 'var(--color-gold-light)' }} />
            <a
              href="tel:+919428497168"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-light)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
            >
              +91 94284 97168
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>/</span>
            <a
              href="tel:+919825135052"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-light)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
            >
              +91 98251 35052
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
