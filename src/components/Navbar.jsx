import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Wall2Wall Remodeling" />
        </NavLink>

        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/referral" onClick={() => setOpen(false)}>
              Referral
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-cta" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
