import { Link } from 'react-router-dom';
import Wordmark from './Wordmark.jsx';
import GoldWM from './GoldWM.jsx';
import { site, navLinks } from '../config/site.js';
import { services } from '../data/services.js';

const linkCls = 'para text-base text-brand-cream/85 hover:text-brand-gold hover:underline underline-offset-4';

export default function Footer() {
  return (
    <footer className="on-dark bg-brand-green text-brand-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Drevoxa Digital, home"><GoldWM /></Link>
          <p className="para mt-6 max-w-sm text-base leading-relaxed text-brand-cream/85">
            A digital agency for web development, graphic design, brand identity and social media management.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="para text-base font-semibold text-brand-gold">Navigate</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="md:col-span-3">
          <h2 className="para text-base font-semibold text-brand-gold">Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.id}><Link to={`/services#${s.id}`} className={linkCls}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="para text-base font-semibold text-brand-gold">Contact</h2>
          <ul className="mt-4 space-y-3">
            {site.email && <li><a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a></li>}
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className={linkCls}>{site.phone}</a></li>}
            {site.address && <li className="para text-base text-brand-cream/85">{site.address}</li>}
            <li><Link to="/contact" className={linkCls}>Contact form</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-gold/40">
        <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="para text-sm text-brand-cream/80">&copy; {new Date().getFullYear()} Digifix Digital. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link to="/privacy-policy" className={linkCls}>Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className={linkCls}>Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
