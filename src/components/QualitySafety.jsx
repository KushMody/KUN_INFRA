import React from 'react';
import { 
  FileCheck, 
  CheckCircle, 
  PackageCheck, 
  HardHat, 
  MessagesSquare, 
  FileEdit, 
  Receipt, 
  Key,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function QualitySafety() {
  const commitments = [
    {
      title: 'Work to approved drawings',
      description: 'Use the approved drawings, agreed scope and specifications as the basis for site execution.',
      icon: <FileCheck size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Quality checks',
      description: 'Plan appropriate quality checks during construction and address observations through the responsible team.',
      icon: <CheckCircle size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Material checks',
      description: 'Evaluate materials and suppliers according to project specifications and the requirements of the assignment.',
      icon: <PackageCheck size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Site safety and housekeeping',
      description: 'Promote orderly, responsible work practices and site safety appropriate to the project and applicable requirements.',
      icon: <HardHat size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Clear communication',
      description: 'Provide progress updates and keep relevant project decisions visible to the client and project team.',
      icon: <MessagesSquare size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Documented changes',
      description: 'Record client approvals for agreed changes to scope, specifications or other project requirements.',
      icon: <FileEdit size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Clear commercial terms',
      description: 'Set out the scope, quotation, payment terms, responsibilities and exclusions clearly for each assignment.',
      icon: <Receipt size={22} style={{ color: 'var(--color-gold-base)' }} />
    },
    {
      title: 'Handover and defect resolution',
      description: 'Agree handover requirements and a process for recording and resolving relevant defects or outstanding items.',
      icon: <Key size={22} style={{ color: 'var(--color-gold-base)' }} />
    }
  ];

  const steps = [
    {
      step: '1. Understand',
      action: 'Discuss the client’s requirements, project use, location, priorities and available information.'
    },
    {
      step: '2. Define',
      action: 'Clarify the proposed scope, drawings, specifications, responsibilities, exclusions and commercial terms.'
    },
    {
      step: '3. Coordinate',
      action: 'Arrange the project team, contractors, materials and site activities appropriate to the agreed scope.'
    },
    {
      step: '4. Execute and monitor',
      action: 'Carry out work with site supervision, quality checks, safety practices and progress communication.'
    },
    {
      step: '5. Review and hand over',
      action: 'Review completed scope, record outstanding items and coordinate the agreed handover and defect-resolution process.'
    }
  ];

  return (
    <section
      id="quality-safety"
      style={{
        padding: '5.5rem 0',
        backgroundColor: 'var(--color-bg-ivory)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <span className="badge-gold" style={{ marginBottom: '0.85rem' }}>
            <ShieldCheck size={14} style={{ color: 'var(--color-gold-base)' }} />
            <span>STANDARDS & COMMITMENTS</span>
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: 'var(--color-primary-navy)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            QUALITY IS BUILT INTO THE PROCESS
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-body)', lineHeight: 1.75 }}>
            Good construction relies on clear planning, careful coordination and checks at the right stages. KUN INFRA’s intended approach is to work to approved drawings and specifications, maintain appropriate site safety practices, check materials and workmanship, document changes and keep clients informed.
          </p>
        </div>

        {/* 8 Intended Working Practices Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4.5rem'
        }}>
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="gold-card"
              style={{
                padding: '1.85rem 1.6rem',
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
                border: '1.5px solid var(--color-border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontSize: '1.12rem',
                fontWeight: 700,
                color: 'var(--color-primary-navy)',
                lineHeight: 1.3
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-body)',
                lineHeight: 1.65
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5-Step Project Approach Workflow */}
        <div style={{
          background: 'linear-gradient(145deg, #092347 0%, #041124 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.5rem',
          color: '#FFFFFF',
          border: '1.5px solid rgba(197, 154, 39, 0.3)',
          boxShadow: 'var(--shadow-elevated)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge-dark-gold" style={{ marginBottom: '0.75rem' }}>
              STRUCTURED EXECUTION
            </span>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 800,
              marginBottom: '0.75rem'
            }}>
              Our Project Approach
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.96rem', lineHeight: 1.6 }}>
              A disciplined five-step journey from initial client briefing to formal project review and handover.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(197, 154, 39, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-accent)',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  {step.step}
                </div>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E2E8F0',
                  lineHeight: 1.6
                }}>
                  {step.action}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem',
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#94A3B8'
          }}>
            <span>Project-specific quality and safety arrangements are agreed according to the scope and requirements of each assignment.</span>
            <a href="#contact" className="btn btn-gold" style={{ fontSize: '0.8rem', padding: '0.65rem 1.25rem' }}>
              <span>Initiate Project Consultation</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
