import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'
import logoImg from '../assets/logo.png'
import bbbImg from '../assets/BBB.png'

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand-row">
              <div className="footer-brand">
                <img src={logoImg} alt="Wall2Wall Remodeling" />
              </div>
              <a
                href="https://www.bbb.org/us/oh/hartville/profile/home-renovation/wall2wall-remodeling-llc-0282-92034556"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wall2Wall Remodeling BBB Accredited Business Profile"
                className="footer-bbb"
              >
                <img src={bbbImg} alt="BBB Accredited Business" />
              </a>
            </div>
            <p className="footer-tagline">
              Raising the standard of quality, professionalism, and integrity — one renovation at a time.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61582366385483" target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={16} />
                Facebook
              </a>
              <a href="https://www.instagram.com/wall2wallremodeling" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={16} />
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Kitchen Remodeling</Link></li>
              <li><Link to="/services">Bathroom Remodeling</Link></li>
              <li><Link to="/services">Home Renovations</Link></li>
              <li><Link to="/services">Flooring & Finishing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              330-388-8485<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              330-388-8485<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              wall2wallclientcare@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} Wall2Wall Remodeling. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
