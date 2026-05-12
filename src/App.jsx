import { useState, useEffect } from 'react'
import {
  Menu, X, HardHat, Wrench, CheckCircle2, Star, Phone, Mail,
  MapPin, ArrowRight, ChevronDown, Shield, Clock,
  Users, Award, Building2, Home, Zap
} from 'lucide-react'
import './index.css'

// SVG inline para íconos de redes sociales eliminados de lucide-react v1+
function InstagramIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none"/>
    </svg>
  )
}

function FacebookIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICES = [
  {
    icon: Building2,
    title: 'Construcción',
    description: 'Proyectos desde cero y obra civil completa. Transformamos tus ideas en estructuras sólidas y duraderas.',
    features: ['Obra nueva residencial', 'Obra civil comercial', 'Fundaciones y estructuras', 'Dirección técnica'],
  },
  {
    icon: Home,
    title: 'Refacciones',
    description: 'Renovación de espacios y modernización de ambientes. Dale nueva vida a tu hogar o negocio.',
    features: ['Renovación de cocinas', 'Baños completos', 'Ampliaciones', 'Remodelación integral'],
  },
  {
    icon: Wrench,
    title: 'Reparaciones',
    description: 'Mantenimiento preventivo y correctivo. Solucionamos cualquier inconveniente de forma rápida y eficaz.',
    features: ['Plomería y sanitarios', 'Impermeabilización', 'Fisuras y humedad', 'Mantenimiento edilicio'],
  },
]

const WHY_ITEMS = [
  { icon: Shield, title: 'Calidad Garantizada', desc: 'Materiales de primera línea y mano de obra certificada en cada proyecto.' },
  { icon: Clock, title: 'Cumplimiento de Plazos', desc: 'Respetamos los tiempos acordados. Tu tiempo es tan valioso como el nuestro.' },
  { icon: Users, title: 'Equipo Profesional', desc: 'Más de 10 años de experiencia y un equipo de especialistas en cada área.' },
  { icon: Award, title: 'Empresa Verificada', desc: 'Matriculados y habilitados. Trabajamos con total transparencia y respaldo legal.' },
  { icon: Star, title: 'Clientes Satisfechos', desc: 'Nuestra mayor satisfacción es ver el resultado final en los ojos de nuestros clientes.' },
  { icon: Zap, title: 'Respuesta Rápida', desc: 'Cotización gratuita en menos de 24 horas. Sin demoras, sin sorpresas.' },
]

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop', alt: 'Construcción en obra' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop', alt: 'Remodelación de interiores' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', alt: 'Refacción de baño' },
  { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop', alt: 'Diseño moderno' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop', alt: 'Construcción residencial' },
  { url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&h=400&fit=crop', alt: 'Obra civil' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Renovación de cocina' },
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop', alt: 'Trabajo en plomería' },
  { url: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=400&fit=crop', alt: 'Pintura y terminaciones' },
]

const SERVICE_OPTIONS = [
  'Seleccioná un servicio',
  'Construcción desde cero',
  'Ampliación de vivienda',
  'Refacción integral',
  'Remodelación de cocina',
  'Remodelación de baño',
  'Impermeabilización',
  'Reparaciones generales',
  'Mantenimiento edilicio',
  'Otro',
]

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? '#fff' : 'transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 38, height: 38, background: '#2563eb', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <HardHat size={20} color="#fff" />
            </div>
            <span style={{
              fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 20,
              color: scrolled ? '#1e293b' : '#fff',
            }}>
              Total<span style={{ color: '#60a5fa' }}>Service</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
            className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{
                  fontWeight: 500, fontSize: 14, textDecoration: 'none',
                  color: scrolled ? '#475569' : 'rgba(255,255,255,0.9)',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#60a5fa'}
                  onMouseLeave={e => e.target.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.9)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" style={{
                background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 14,
                padding: '10px 20px', borderRadius: 10, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                onMouseLeave={e => e.target.style.background = '#2563eb'}
              >
                Cotizar ahora
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 8,
              color: scrolled ? '#1e293b' : '#fff', borderRadius: 8,
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: '#fff', borderTop: '1px solid #f1f5f9',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderRadius: '0 0 16px 16px',
          }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} style={{
                    display: 'block', padding: '14px 24px', color: '#475569',
                    fontWeight: 500, textDecoration: 'none', fontSize: 15,
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ padding: '8px 16px 16px' }}>
                <a href="#contacto" onClick={() => setOpen(false)} style={{
                  display: 'block', background: '#2563eb', color: '#fff',
                  textAlign: 'center', fontWeight: 700, padding: '14px', borderRadius: 10,
                  textDecoration: 'none', fontSize: 15,
                }}>
                  Cotizar ahora
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,58,138,0.82) 50%, rgba(15,23,42,0.88) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(96,165,250,0.35)',
          color: '#93c5fd', fontSize: 13, fontWeight: 600,
          padding: '6px 16px', borderRadius: 999, marginBottom: 28,
        }}>
          <CheckCircle2 size={14} />
          Empresa verificada · Argentina
        </div>

        <h1 style={{
          fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
          fontSize: 'clamp(36px, 6vw, 68px)', color: '#fff',
          lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1px',
        }}>
          Soluciones pensadas<br />
          <span style={{ color: '#60a5fa' }}>para satisfacer</span><br />
          tus necesidades
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(203,213,225,0.9)', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Construcción, refacciones y reparaciones con calidad profesional.
          Tu proyecto en las mejores manos.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
          <a href="#contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#2563eb', color: '#fff', fontWeight: 700,
            fontSize: 16, padding: '16px 32px', borderRadius: 14,
            textDecoration: 'none', boxShadow: '0 8px 30px rgba(37,99,235,0.4)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Solicitar Cotización Gratis <ArrowRight size={18} />
          </a>
          <a href="#servicios" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff', fontWeight: 600, fontSize: 15,
            padding: '16px 28px', borderRadius: 14, textDecoration: 'none',
            backdropFilter: 'blur(8px)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            Ver nuestros servicios
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 520, margin: '64px auto 0' }}>
          {[
            { number: '+500', label: 'Proyectos realizados' },
            { number: '+10', label: 'Años de experiencia' },
            { number: '100%', label: 'Clientes satisfechos' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 32px)', color: '#60a5fa' }}>
                {stat.number}
              </div>
              <div style={{ color: '#94a3b8', fontSize: 12, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', animation: 'bounce 2s infinite' }}>
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicios" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block', background: '#eff6ff', color: '#2563eb',
            fontSize: 12, fontWeight: 700, padding: '6px 16px', borderRadius: 999,
            marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Nuestros Servicios
          </span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: '#1e293b', marginBottom: 16 }}>
            Todo lo que tu obra necesita
          </h2>
          <p style={{ color: '#64748b', fontSize: 18, maxWidth: 480, margin: '0 auto' }}>
            Desde la planificación hasta el acabado final, cubrimos cada etapa de tu proyecto.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="service-card" style={{
                background: '#fff', border: '1px solid #f1f5f9', borderRadius: 20,
                padding: 40, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                position: 'relative', overflow: 'hidden', transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)', borderRadius: '20px 20px 0 0' }} />

                <div className="service-icon-wrap" style={{ width: 56, height: 56, background: '#eff6ff', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, transition: 'background 0.3s' }}>
                  <Icon size={26} color="#2563eb" className="service-icon" />
                </div>

                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 22, color: '#1e293b', marginBottom: 12 }}>
                  {service.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                  {service.description}
                </p>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#475569' }}>
                      <CheckCircle2 size={15} color="#3b82f6" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contacto" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 28,
                  color: '#2563eb', fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}>
                  Solicitar este servicio <ArrowRight size={15} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── WHY US ───────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div className="why-grid">
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block', background: 'rgba(59,130,246,0.2)',
              border: '1px solid rgba(59,130,246,0.25)', color: '#93c5fd',
              fontSize: 12, fontWeight: 700, padding: '6px 16px', borderRadius: 999,
              marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              ¿Por qué elegirnos?
            </span>
            <h2 style={{
              fontFamily: 'Montserrat, sans-serif', fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff',
              lineHeight: 1.15, marginBottom: 20,
            }}>
              Soluciones pensadas<br />
              <span style={{ color: '#60a5fa' }}>para vos</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.7, maxWidth: 460, marginBottom: 36 }}>
              En Total Service entendemos que cada cliente tiene necesidades únicas.
              Diseñamos soluciones a medida con el más alto estándar de calidad y
              un servicio personalizado de principio a fin.
            </p>
            <a href="#contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#2563eb', color: '#fff', fontWeight: 700,
              fontSize: 15, padding: '14px 28px', borderRadius: 12,
              textDecoration: 'none', boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Hablar con un experto <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: reasons grid */}
          <div className="why-items-grid">
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: 22, transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ width: 40, height: 40, background: 'rgba(59,130,246,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={18} color="#60a5fa" />
                  </div>
                  <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 8 }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────

function Gallery() {
  return (
    <section id="portfolio" style={{ padding: '96px 0', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #ec4899, #a855f7)',
            color: '#fff', fontSize: 13, fontWeight: 700,
            padding: '6px 16px', borderRadius: 999, marginBottom: 16,
          }}>
            <InstagramIcon size={15} color="#fff" />
            @total.service.argentina
          </div>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: '#1e293b', marginBottom: 12 }}>
            Nuestros trabajos
          </h2>
          <p style={{ color: '#64748b', fontSize: 18, maxWidth: 480, margin: '0 auto' }}>
            Cada proyecto es una historia de transformación. Mirá lo que logramos para nuestros clientes.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} style={{
              position: 'relative', overflow: 'hidden', borderRadius: 16,
              aspectRatio: '1/1', background: '#e2e8f0',
              gridColumn: i === 0 ? 'span 2' : undefined,
              gridRow: i === 0 ? 'span 2' : undefined,
            }}
              className="gallery-item"
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img src={img.url} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} loading="lazy" />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(30,58,138,0.85) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.3s',
                display: 'flex', alignItems: 'flex-end', padding: 16,
              }}>
                <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="https://www.instagram.com/total.service.argentina" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '2px solid #1e293b', color: '#1e293b', fontWeight: 700,
            fontSize: 15, padding: '12px 28px', borderRadius: 12, textDecoration: 'none',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1e293b' }}
          >
            <InstagramIcon size={18} color="currentColor" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  const inputStyle = {
    width: '100%', background: '#fff', border: '1.5px solid #e2e8f0',
    borderRadius: 12, padding: '13px 16px', color: '#1e293b',
    fontSize: 14, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
  }
  const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }

  return (
    <section id="contacto" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div className="contact-grid">
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block', background: '#eff6ff', color: '#2563eb',
              fontSize: 12, fontWeight: 700, padding: '6px 16px', borderRadius: 999,
              marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              Contacto
            </span>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: '#1e293b', marginBottom: 16, lineHeight: 1.15 }}>
              ¿Tenés un proyecto<br />en mente?
            </h2>
            <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
              Contanos qué necesitás y te enviamos una cotización sin cargo en menos de 24 horas.
              Sin compromisos, sin letra chica.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {[
                { icon: Phone, label: 'Teléfono / WhatsApp', value: '+54 11 XXXX-XXXX' },
                { icon: Mail, label: 'Email', value: 'info@totalservice.com.ar' },
                { icon: MapPin, label: 'Zona de cobertura', value: 'Buenos Aires y GBA' },
                { icon: InstagramIcon, label: 'Instagram', value: '@total.service.argentina' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 44, height: 44, background: '#eff6ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={19} color="#2563eb" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                      <div style={{ color: '#1e293b', fontWeight: 600, fontSize: 14 }}>{item.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right */}
          <div style={{ background: '#f8fafc', borderRadius: 24, padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={30} color="#16a34a" />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 24, color: '#1e293b', marginBottom: 8 }}>
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: '#64748b', fontSize: 15 }}>
                  Te contactaremos a la brevedad con tu cotización gratuita.
                </p>
                <button onClick={() => setSent(false)} style={{ marginTop: 24, background: 'none', border: 'none', color: '#2563eb', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 24, color: '#1e293b', marginBottom: 6 }}>
                  Cotización Gratuita
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>
                  Completá el formulario y te respondemos en 24 hs.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>Nombre completo *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Juan García" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Teléfono / WhatsApp *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+54 11 XXXX-XXXX" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Tipo de servicio *</label>
                    <select name="service" required value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt === 'Seleccioná un servicio' ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Descripción del proyecto</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                      placeholder="Contanos brevemente qué necesitás..."
                      style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = '#3b82f6'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', background: '#2563eb', color: '#fff', fontWeight: 700,
                    fontSize: 16, padding: '16px', borderRadius: 12, border: 'none',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    boxShadow: '0 4px 20px rgba(37,99,235,0.3)', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    Solicitar cotización gratis <ArrowRight size={18} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8' }}>
                    Sin cargo · Sin compromiso · Respondemos en 24 hs
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '64px 24px' }}>
        <div className="footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }} className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, background: '#2563eb', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HardHat size={20} color="#fff" />
              </div>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 20, color: '#fff' }}>
                Total<span style={{ color: '#60a5fa' }}>Service</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
              Construcción, refacciones y reparaciones con más de 10 años de experiencia.
              Soluciones pensadas para satisfacer las necesidades de nuestros clientes.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://www.instagram.com/total.service.argentina" target="_blank" rel="noopener noreferrer"
                style={{ width: 36, height: 36, background: '#1e293b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#ec4899'}
                onMouseLeave={e => e.currentTarget.style.background = '#1e293b'}
              >
                <InstagramIcon size={16} color="#fff" />
              </a>
              <a href="#" style={{ width: 36, height: 36, background: '#1e293b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
                onMouseLeave={e => e.currentTarget.style.background = '#1e293b'}
              >
                <FacebookIcon size={16} color="#fff" />
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 16 }}>
              Servicios
            </h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Construcción', 'Refacciones', 'Reparaciones', 'Mantenimiento', 'Obra Civil'].map((s) => (
                <li key={s}>
                  <a href="#servicios" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#94a3b8'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 16 }}>
              Contacto
            </h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: Phone, text: '+54 11 XXXX-XXXX' },
                { icon: Mail, text: 'info@totalservice.com.ar' },
                { icon: MapPin, text: 'Buenos Aires y GBA' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14 }}>
                    <Icon size={15} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13 }}>
          <p>© {new Date().getFullYear()} Total Service. Todos los derechos reservados.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <CheckCircle2 size={14} color="#60a5fa" />
            Empresa verificada · Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
