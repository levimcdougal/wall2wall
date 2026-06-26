import { Link } from 'react-router-dom'
import { Award, Shield, MessageCircle, Eye } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import aboutImg from '../assets/about.jpg'
import bbbImg from '../assets/BBB.png'

const values = [
  {
    Icon: Award,
    title: 'Quality & Craftsmanship',
    desc: 'We take pride in every detail — from the first measurement to the final coat of paint. Good enough is never good enough for us.',
  },
  {
    Icon: Shield,
    title: 'Honesty & Integrity',
    desc: 'We say what we mean and do what we say. No hidden fees, no surprises — just straightforward work you can count on.',
  },
  {
    Icon: MessageCircle,
    title: 'Communication',
    desc: 'You are always in the loop. We keep you informed at every stage of the project so there are no guesses and no stress.',
  },
  {
    Icon: Eye,
    title: 'Attention to Detail',
    desc: 'The details others overlook are what we look for. Every edge, every joint, every surface gets the care it deserves.',
  },
]

export default function About() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>About Wall2Wall</h1>
        <p>Built on trust, driven by craftsmanship, and committed to raising the standard.</p>
      </section>

      {/* Meet the Owner */}
      <section className="section">
        <div className="section-inner">
          <FadeIn>
            <div className="why-split">
              <div className="why-image-wrap">
                <img src={aboutImg} alt="Wall2Wall Remodeling Owner" className="why-image" />
              </div>
              <div className="why-content">
                <p className="section-label">Meet the Owner</p>
                <h2 className="section-title">A Vision Built on Integrity</h2>
                <p className="why-body">
                  As the owner of Wall2Wall Remodeling, I'm driven by a vision that goes beyond simply
                  completing projects — I want to help redefine the remodeling industry by raising the
                  standard of quality, professionalism, and integrity.
                </p>
                <p className="why-body">
                  My goal is to build a company that homeowners can truly trust, where craftsmanship,
                  communication, and attention to detail are the top priority. Every project is an
                  opportunity to create something meaningful while proving that we as a company can
                  operate with honesty, reliability, and take pride in our work.
                </p>
                <p className="why-body">
                  I'm committed to growing this business into a name that represents excellence and
                  sets a higher standard for the industry as a whole.
                </p>
                <Link to="/contact" className="btn-primary why-cta">Get Your Free Quote</Link>

                <a
                  href="https://www.bbb.org/us/oh/hartville/profile/home-renovation/wall2wall-remodeling-llc-0282-92034556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-bbb-badge"
                >
                  <img src={bbbImg} alt="BBB Accredited Business" />
                  <p>Wall2Wall Remodeling is a proud BBB Accredited Business — committed to honesty, integrity, and trust in everything we build.</p>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn>
            <div className="section-header">
              <p className="section-label">What We Stand For</p>
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                These aren't just words on a wall — they drive every decision we make and every project we take on.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="values-grid">
              {values.map(({ Icon, title, desc }) => (
                <div className="value-card" key={title}>
                  <div className="service-icon">
                    <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready to Work with a Team You Can Trust?</h2>
          <p>Get your free estimate today and experience the Wall2Wall difference firsthand.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
