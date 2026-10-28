import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageSquare, Phone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'QUALITY & SAFETY', href: '#quality-safety' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(251, 251, 249, 0.98)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(9, 35, 71, 0.08)' : '0 1px 3px rgba(0,0,0,0.03)',
        transition: 'all 0.25s ease'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        gap: '1.5rem'
      }}>
        {/* Brand Logo & Name */}
        <a
          href="#home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0,
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{
            position: 'relative',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid var(--color-gold-base)',
            boxShadow: '0 2px 8px rgba(197, 154, 39, 0.25)',
            flexShrink: 0,
            backgroundColor: '#FFFFFF'
          }}>
            <img
              src="/logo.jpg"
              alt="KUN INFRA PVT LTD Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.18rem',
              fontWeight: 800,
              letterSpacing: '0.03em',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.15,
              whiteSpace: 'nowrap'
            }}>
              KUN <span style={{ color: 'var(--color-gold-base)' }}>INFRA</span> PVT LTD
            </div>
            <div style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-dark)',
              marginTop: '2px',
              whiteSpace: 'nowrap'
            }}>
              BUILDING THE FUTURE
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.4rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ whiteSpace: 'nowrap' }}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-text-body)',
                    letterSpacing: '0.04em',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    whiteSpace: 'nowrap',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-body)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a
            href="#contact"
            className="btn btn-gold nav-cta-btn"
            style={{
              padding: '0.52rem 1.15rem',
              fontSize: '0.78rem',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              borderRadius: '6px'
            }}
          >
            <MessageSquare size={13} style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap' }}>DISCUSS A PROJECT</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.45rem',
              cursor: 'pointer',
              color: 'var(--color-primary-navy)'
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '2px solid var(--color-gold-base)',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)'
        }} className="mobile-drawer">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid #F1F5F9'
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} color="var(--color-gold-base)" />
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '0.5rem' }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
              >
                <MessageSquare size={15} />
                <span>DISCUSS A PROJECT</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
