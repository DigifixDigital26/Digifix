import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center rounded-sm px-6 py-3 text-base font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-brand-green text-brand-cream hover:bg-brand-green-dark border border-brand-green',
  outline: 'border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-cream',
  light: 'bg-brand-cream text-brand-green border border-brand-cream hover:bg-brand-gold hover:border-brand-gold',
  gold: 'border border-brand-gold text-brand-cream hover:bg-brand-gold hover:text-brand-green',
};

/** Renders a router Link when `to` is set, an anchor when `href` is set, otherwise a button. */
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
