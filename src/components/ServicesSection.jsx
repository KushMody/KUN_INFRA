import React from 'react';
import { 
  Home, 
  Building2, 
  Hotel, 
  Warehouse, 
  Hammer, 
  KeyRound, 
  Wrench, 
  Layers, 
  ClipboardCheck 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'Construction of residential buildings and apartments, along with bungalows and villas. Work is planned around the project brief, approved drawings, specifications and intended use of the property.',
      icon: <Home size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'commercial',
      title: 'Commercial Offices & Retail',
      description: 'Construction solutions for office spaces, retail units, showrooms and shopping complexes, with coordination of trades and project requirements according to the agreed scope.',
      icon: <Building2 size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'hospitality',
      title: 'Hotels & Resorts',
      description: 'Construction support for hospitality projects such as hotels and resorts, coordinated around project specifications, operating needs and appointed professional teams.',
      icon: <Hotel size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'industrial',
      title: 'Industrial Buildings & Warehouses',
      description: 'Construction for industrial buildings and warehouses, based on the technical scope, site requirements and applicable professional approvals for each project.',
      icon: <Warehouse size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'civil-structural',
      title: 'Civil Contracting & Structural Construction',
      description: 'Civil and structural construction work coordinated to approved drawings, specifications and site requirements. Project scope and technical responsibilities are confirmed before commencement.',
      icon: <Hammer size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'turnkey',
      title: 'Turnkey Construction',
      description: 'A coordinated construction solution across the agreed package of works, with clear scope definition, specifications, responsibilities, progress communication and handover arrangements.',
      icon: <KeyRound size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'renovation',
      title: 'Renovation & Redevelopment',
      description: 'Selected renovation and redevelopment projects, planned around the existing property, client requirements, site conditions and appropriate technical input.',
      icon: <Wrench size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Large-Scale Civil Works',
      description: 'Selected infrastructure and larger civil works that match the company’s project capability, available team and specialist resources. Suitability is assessed project by project.',
      icon: <Layers size={26} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      id: 'consultancy',
      title: 'Project Management & Construction Consultancy',
      description: 'Project coordination and management support, including coordination of project managers, engineers, contractors and other required professionals, as agreed for the assignment.',
      icon: <ClipboardCheck size={26} style={{ color: 'var(--color-gold-base)' }} />
    }
  ];

  return (
    <section
      id="services"
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <span>PROJECT CAPABILITIES</span>
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            OUR SERVICES
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
            Comprehensive construction solutions planned around agreed briefs, approved drawings, professional supervision, and disciplined site execution.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((item, index) => (
            <div
              key={item.id}
              className="gold-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Service Header: Icon & Sequence Number */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-soft)',
                    border: '1.5px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'rgba(9, 35, 71, 0.15)'
                  }}>
                    0{index + 1}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-navy)',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-text-body)',
                  lineHeight: 1.7
                }}>
                  {item.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  KUN INFRA PVT LTD
                </span>
                <a
                  href="#contact"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary-navy)'}
                >
                  <span>Enquire</span> →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
