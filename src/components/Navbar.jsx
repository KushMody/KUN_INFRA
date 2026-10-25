import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

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
    { name: 'Overview', href: '#overview' },
    { name: 'About & Vision', href: '#vision' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Corporate Office', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(251, 251, 249, 0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid rgba(226, 232, 240, 0.6)',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(9, 35, 71, 0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem'
      }}>
        {/* Brand Logo & Name */}
        <a
          href="#overview"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div style={{
            position: 'relative',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1.5px solid var(--color-gold-base)',
            boxShadow: '0 2px 8px rgba(197, 154, 39, 0.25)',
            flexShrink: 0,
            backgroundColor: '#FFFFFF'
          }}>
            <img
              src="/logo.jpg"
              alt="KUN Infra Pvt Ltd Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--color-primary-navy)',
              lineHeight: 1.15
            }}>
              KUN <span style={{ color: 'var(--color-gold-base)' }}>INFRA</span>
            </div>
            <div style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginTop: '1px'
            }}>
              Building The Future
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            listStyle: 'none'
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: 'var(--color-text-body)',
                    letterSpacing: '0.01em',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                    padding: '0.3rem 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary-navy)';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a
            href="tel:+919825135052"
            className="btn btn-gold nav-cta-btn"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.85rem',
              display: 'inline-flex'
            }}
          >
            <Phone size={14} />
            <span>+91 98251 350 52</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--color-primary-navy)'
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
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
                href="tel:+919825135052"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-navy"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={15} />
                <span>Call Director: +91 98251 350 52</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
