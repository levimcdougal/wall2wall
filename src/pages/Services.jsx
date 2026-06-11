import { Link } from 'react-router-dom'
import { Home, Bath, Hammer, Layers } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    Icon: Home,
    title: 'Kitchen Remodeling',
    desc: 'Your kitchen is the heart of your home. Our kitchen remodeling service covers everything — custom cabinetry, countertop installation, new layouts, backsplash, lighting, and appliance integration — built to match your style and how you actually use the space.',
    includes: [
      'Custom cabinet design and installation',
      'Countertop fabrication and installation',
      'Backsplash tile work',
      'Electrical and plumbing coordination',
      'Lighting upgrades and under-cabinet lighting',
      'Full demo and haul-away included',
    ],
  },
  {
    Icon: Bath,
    title: 'Bathroom Remodeling',
    desc: 'Transform your bathroom into a private retreat. We handle everything from full gut-and-rebuild projects to targeted upgrades like shower tile, vanities, and fixtures — all with precision craftsmanship and attention to waterproofing and detail.',
    includes: [
      'Shower and tub tile installation',
      'Vanity and fixture replacement',
      'Flooring — tile, stone, or vinyl',
      'Waterproofing and moisture barriers',
      'Lighting and ventilation upgrades',
      'Custom niche and built-in storage',
    ],
  },
  {
    Icon: Hammer,
    title: 'Home Renovations',
    desc: 'From room additions to full-floor makeovers, we take on renovations of any scale. We handle the entire process — planning, permits, demo, build-out, and final touches — so you get a seamless experience and a result you love.',
    includes: [
      'Full demo and structural work',
      'Framing, drywall, and finishing',
      'Permit coordination and compliance',
      'Interior door and trim installation',
      'Paint and wall finishing',
      'Final walkthrough with detailed punch list',
    ],
  },
  {
    Icon: Layers,
    title: 'Flooring & Finishing',
    desc: 'New floors make a massive difference. We install hardwood, LVP, tile, and carpet throughout your home — and pair it with expert trim, baseboard, and interior painting work to give every room a complete, polished look.',
    includes: [
      'Hardwood and engineered wood installation',
      'Luxury vinyl plank (LVP) installation',
      'Tile and stone flooring',
      'Baseboard, crown molding, and trim',
      'Interior painting and wall prep',
      'Subfloor repair and leveling',
    ],
  },
]

export default function Services() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Expert remodeling for every space — kitchens, bathrooms, full renovations, and more.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map(({ Icon, title, desc, includes }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="service-card-full">
                  <div className="service-icon" style={{ width: 64, height: 64 }}>
                    <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                  </div>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div className="service-includes">
                    <h4>What's Included</h4>
                    <ul>
                      {includes.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Where to Start?</h2>
          <p>Reach out and we'll walk you through the options. Free estimates, no pressure.</p>
          <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </main>
  )
}
