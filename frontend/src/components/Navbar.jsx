import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Wordmark from './Wordmark.jsx';
import Button from './Button.jsx';
import { navLinks } from '../config/site.js';

const linkClass = ({ isActive }) =>
  `para border-b-2 py-1 text-base transition-colors duration-200 ${
    isActive ? 'border-brand-gold font-semibold' : 'border-transparent hover:border-brand-gold/60'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef(null);

  // Close after navigation
  useEffect(() => setOpen(false), [location.pathname]);

  // Close with Escape and return focus to the toggle
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/60 bg-brand-cream">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="Drevoxa Digital, home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
          <Button to="/contact" className="!px-5 !py-2.5">Let&rsquo;s Talk</Button>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="menu-in border-t border-brand-green/15 bg-brand-cream md:hidden">
          <div className="container-x flex flex-col py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `para border-b border-brand-green/10 py-4 text-lg ${isActive ? 'font-semibold' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-5">Let&rsquo;s Talk</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
