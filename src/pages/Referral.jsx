import { Link } from 'react-router-dom'
import { Users, CheckCircle, Wrench, Home, Star } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const steps = [
  { num: '1', text: 'You refer someone to Wall2Wall Remodeling.' },
  { num: '2', text: 'They contact us, mention your name, and schedule a consultation.' },
  { num: '3', text: 'They move forward with a qualifying project.' },
  { num: '4', text: 'Once the project is completed and paid in full, you earn your reward!' },
]

const qualifications = [
  'Must be a new client (not a previous customer or active lead in the past 12 months).',
  'The referral must be mentioned at the initial consultation.',
  'Project must be executed by Wall2Wall Remodeling.',
  'Minimum project investment requirements must be met as outlined below.',
  'The project must be completed and the final payment received.',
  'Commercial projects qualify if the minimum investment is met.',
  'Rewards are issued within 30 days of final payment.',
]

const rewards = [
  {
    Icon: Wrench,
    tier: 'Project Boost',
    desc: 'Perfect for smaller upgrades and repairs',
    amount: '$150',
    label: 'Referral Bonus',
  },
  {
    Icon: Home,
    tier: 'Project Enhancement',
    desc: 'Ideal for mid-size transformations',
    amount: '$250',
    label: 'Referral Bonus',
    featured: true,
  },
  {
    Icon: Star,
    tier: 'Whole Home Transformation',
    desc: 'For complete home remodeling projects',
    amount: '$500',
    label: 'Referral Bonus',
  },
]

const minimums = [
  { range: '$2,500 – $9,999', reward: '$150' },
  { range: '$10,000 – $24,999', reward: '$250' },
  { range: '$25,000+', reward: '$500' },
]

export default function Referral() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Referral Program</h1>
        <p className="referral-hero-tagline">You Refer. We Deliver. <span>You Get Rewarded.</span></p>
        <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7 }}>
          Help your friends, family, and neighbors create the space of their dreams — and earn cash rewards when they do.
        </p>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="section-inner">
          <FadeIn>
            <div className="referral-intro">
              <p>
                Thank you for referring friends, family, and neighbors to Wall2Wall Remodeling!
                Here's everything you need to know to participate in our referral program and start earning.
              </p>
            </div>
          </FadeIn>

          {/* How It Works + Qualifying Projects */}
          <FadeIn delay={100}>
            <div className="referral-two-col">

              {/* How It Works */}
              <div className="referral-info-card">
                <div className="referral-info-card-header">
                  <Users size={22} color="var(--blue)" strokeWidth={1.75} />
                  <h3>How It Works</h3>
                </div>
                <div className="referral-steps-list">
                  {steps.map(({ num, text }) => (
                    <div className="referral-numbered-step" key={num}>
                      <div className="referral-step-num">{num}</div>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifying Projects */}
              <div className="referral-info-card">
                <div className="referral-info-card-header">
                  <CheckCircle size={22} color="var(--blue)" strokeWidth={1.75} />
                  <h3>Qualifying Projects</h3>
                </div>
                <ul className="referral-qual-list">
                  {qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Referral Rewards */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>Referral Rewards</p>
              <h2 className="section-title">Earn Cash for Every Referral</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                The bigger the project, the bigger your reward. When your referral completes a qualifying project, you get paid.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rewards-grid">
              {rewards.map(({ Icon, tier, desc, amount, label, featured }) => (
                <div className={`reward-card${featured ? ' reward-card-featured' : ''}`} key={tier}>
                  <div className="reward-icon">
                    <Icon size={24} color={featured ? '#08090b' : 'var(--blue)'} strokeWidth={1.75} />
                  </div>
                  <h3 className="reward-tier">{tier}</h3>
                  <p className="reward-desc">{desc}</p>
                  <div className="reward-divider" />
                  <p className="reward-earn">Earn a</p>
                  <div className="reward-amount">{amount}</div>
                  <p className="reward-label">{label}</p>
                  <p className="reward-fine">when your referral completes a qualifying project</p>
                </div>
              ))}

              {/* Minimum Investment */}
              <div className="reward-card reward-card-minimums">
                <h3 className="reward-tier" style={{ marginBottom: 20 }}>Minimum Project Investment</h3>
                {minimums.map(({ range, reward }) => (
                  <div className="minimum-row" key={range}>
                    <span className="minimum-range">{range}</span>
                    <span className="minimum-arrow">&rsaquo;&rsaquo;</span>
                    <span className="minimum-reward">qualifies for <strong>{reward}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready to Start Referring?</h2>
          <p>Call or text us with your referral's name and we'll take it from there.</p>
          <a href="tel:+13303888485" className="btn-primary">Call 330-388-8485</a>
        </div>
      </section>
    </main>
  )
}
