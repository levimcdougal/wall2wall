import { useState } from 'react'
import { Phone, MessageSquare, Mail, Phone as PhoneIcon, CalendarCheck, Hammer, ThumbsUp, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '330-388-8485',
    desc: 'Give us a call during business hours to discuss your project and get a free estimate.',
    btnLabel: 'Call Now',
    href: 'tel:+13303888485',
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: '330-388-8485',
    desc: "Prefer to text? Send us a message and we'll get back to you quickly.",
    btnLabel: 'Send a Text',
    href: 'sms:+13303888485',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'wall2wall@gmail.com',
    desc: 'Send us an email for quotes, questions, or anything else. We respond promptly.',
    btnLabel: 'Send Email',
    href: 'mailto:wall2wall@gmail.com',
  },
]

const steps = [
  {
    Icon: PhoneIcon,
    step: '01',
    title: 'Reach Out',
    desc: "Call, text, or DM us to tell us about your project. We'll get back to you promptly to set up a time.",
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Get Your Free Quote',
    desc: "We'll come to your home, walk through the space, and give you a clear, honest estimate at no charge.",
  },
  {
    Icon: Hammer,
    step: '03',
    title: 'We Get to Work',
    desc: "Our crew shows up on schedule, fully equipped, and works with care and precision from day one.",
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Love the Results',
    desc: "We don't consider the job done until you're completely satisfied with every inch of the finished work.",
  },
]

const faqs = [
  {
    q: 'How do I get a free quote?',
    a: "Simply call or text us at 330-388-8485. We'll schedule a time to visit your home, walk through the project, and give you a clear, detailed estimate — completely free, no obligation.",
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Wall2Wall Remodeling is fully licensed and insured. You can have complete peace of mind knowing your home and investment are protected throughout the project.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on the scope of the work. A bathroom remodel typically takes 1–2 weeks; a kitchen can take 3–5 weeks. We give you a realistic timeline upfront and keep you updated throughout.',
  },
  {
    q: 'Can I stay in my home during the renovation?',
    a: "In most cases, yes. We work to minimize disruption and keep the job site clean and contained. For major whole-home projects, we will discuss the best approach with you during the planning phase.",
  },
  {
    q: 'Do you handle permits?',
    a: "Yes. For projects that require permits, we coordinate and manage the permit process on your behalf so you don't have to navigate that on your own.",
  },
  {
    q: "What if I'm not satisfied with the results?",
    a: "Your satisfaction is our top priority. If something is not right, let us know and we'll make it right — that's our commitment to every client, every project.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Get In Touch</h1>
        <p>Ready to start your project? Reach out by phone, text, or Instagram — we'd love to hear from you.</p>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>Contact Us Directly</h2>
            <p>No forms, no waiting. Pick your preferred way to reach us and we'll respond promptly.</p>
          </div>

          <FadeIn><div className="contact-cards">
            {contactMethods.map(({ Icon, label, value, desc, btnLabel, href }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card-icon">
                  <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{label}</h3>
                <div className="contact-card-value">{value}</div>
                <p className="contact-card-desc">{desc}</p>
                <a href={href} className="contact-card-btn" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{btnLabel}</a>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* Business Hours Banner */}
      <section className="hours-banner">
        <p className="hours-banner-label">Business Hours</p>
        <div className="hours-banner-cols">
          <div className="hours-banner-col">
            <span className="hours-banner-day">Monday – Friday</span>
            <span className="hours-banner-time">8:00 AM – 6:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Saturday</span>
            <span className="hours-banner-time">9:00 AM – 3:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Sunday</span>
            <span className="hours-banner-time">By Appointment</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">The Process</p>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Getting started is easy. Here's how it works from first contact to a finished renovation.
            </p>
          </div>
          <FadeIn delay={150}><div className="steps-grid">
            {steps.map(({ Icon, step, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">
                  <Icon size={24} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions before starting a renovation. Still have questions? Just give us a call.
            </p>
          </div>
          <FadeIn><div className="faq-list">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div></FadeIn>
        </div>
      </section>
    </main>
  )
}
