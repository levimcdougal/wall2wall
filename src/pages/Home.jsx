import { Link } from 'react-router-dom'
import { Hammer, Bath, Home, Layers, Star } from 'lucide-react'
import cleanImg from '../assets/clean.png'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/back.png'
import img1 from '../assets/IMG1.jpg'
import img2 from '../assets/IMG2.jpg'
import img3 from '../assets/IMG3.jpg'
import img4 from '../assets/IMG4.jpg'
import img5 from '../assets/IMG5.jpg'
import img6 from '../assets/IMG6.jpg'
import img7 from '../assets/IMG7.jpg'
import img8 from '../assets/IMG8.jpg'
import img9 from '../assets/IMG9.jpg'
import img10 from '../assets/IMG10.jpg'
import img11 from '../assets/IMG11.jpg'
import img12 from '../assets/IMG12.jpg'
import img13 from '../assets/IMG13.jpg'

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13]

const reviews = [
  {
    name: 'Kevin M.',
    type: 'Kitchen Remodel',
    text: 'Wall2Wall completely transformed our kitchen. The craftsmanship is incredible — every cabinet, every countertop, perfectly done. They were professional from start to finish.',
  },
  {
    name: 'Tanya R.',
    type: 'Bathroom Remodel',
    text: 'I could not be happier with our master bath renovation. They were honest about timelines, stayed on budget, and the finished product looks like something out of a magazine.',
  },
  {
    name: 'Marcus J.',
    type: 'Full Home Renovation',
    text: 'We hired Wall2Wall for a full first-floor renovation and they knocked it out of the park. Incredible attention to detail and they treated our home with real care.',
  },
  {
    name: 'Angela P.',
    type: 'Flooring & Interior',
    text: 'New hardwood floors and trim throughout the house. The quality of work speaks for itself — clean lines, zero damage to existing surfaces, and done ahead of schedule.',
  },
]

const services = [
  {
    Icon: Home,
    title: 'Kitchen Remodeling',
    desc: 'Complete kitchen transformations — from custom cabinetry and countertops to new layouts built to fit your lifestyle.',
  },
  {
    Icon: Bath,
    title: 'Bathroom Remodeling',
    desc: 'Luxury bath upgrades with precision tile work, modern fixtures, and spa-quality finishes you will love every day.',
  },
  {
    Icon: Hammer,
    title: 'Home Renovations',
    desc: 'Full-scale renovations that redefine your space. We handle everything from demo to final walkthrough.',
  },
  {
    Icon: Layers,
    title: 'Flooring & Finishing',
    desc: 'Hardwood, tile, LVP, trim, and paint — we bring every surface of your home to life with expert craftsmanship.',
  },
]

export default function HomePage() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <div className="hero-badge">Up to 20% Off Your First Renovation + FREE Quote</div>
          <h1>Your Home,<br />Transformed.</h1>
          <p>
            From kitchens to full renovations — Wall2Wall Remodeling delivers quality craftsmanship, honest communication, and results that last.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">Licensed</span>
              <span className="hero-stat-label">& Insured</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">Quality</span>
              <span className="hero-stat-label">Craftsmanship</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">Free</span>
              <span className="hero-stat-label">Estimates</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">Local</span>
              <span className="hero-stat-label">& Trusted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Remodeling Services for Every Space</h2>
            <p className="section-subtitle">
              Whether it's a kitchen, bath, full renovation, or new floors — we bring your vision to life with expert craftsmanship.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}>
            <div className="services-grid">
              {services.map(({ Icon, title, desc }) => (
                <div className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/services" className="service-link">Learn more →</Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn><div className="why-split">
            <div className="why-image-wrap">
              <img src={cleanImg} alt="Wall2Wall Remodeling" className="why-image" />
            </div>
            <div className="why-content">
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">The Wall2Wall Difference</h2>
              <p className="why-body">
                At Wall2Wall Remodeling, we go beyond simply completing projects. Our mission is to
                help redefine the remodeling industry by raising the standard of quality,
                professionalism, and integrity with every job we take on.
              </p>
              <p className="why-body">
                We build trust with every homeowner through honest communication, attention to detail,
                and a relentless commitment to craftsmanship. When you work with us, you can expect
                transparency, respect for your home, and results you will be proud of for years to come.
              </p>
              <Link to="/about" className="btn-primary why-cta">Learn About Us</Link>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* Gallery Marquee */}
      <section className="gallery-marquee-section">
        <div className="gallery-marquee-header">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Projects We're Proud Of</h2>
          <p className="section-subtitle">A look at some of the spaces we've transformed for homeowners just like you.</p>
        </div>
        <div className="gallery-marquee-track">
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div className="gallery-marquee-item" key={i}>
              <img src={src} alt={`Wall2Wall project ${(i % 10) + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">What Our Clients Are Saying</h2>
            <p className="section-subtitle">
              Don't just take our word for it — here's what real homeowners have to say.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}><div className="reviews-grid">
            {reviews.map(r => (
              <div className="review-card" key={r.name}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="var(--steel-bright)" fill="var(--steel-bright)" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-type">{r.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready to Transform Your Home?</h2>
          <p>Reach out today — your first renovation comes with up to 20% off and a free quote.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
