import useMeta from '../hooks/useMeta.js';
import Button from '../components/Button.jsx';

export default function NotFound() {
  useMeta('Page not found', 'The page you are looking for does not exist.');
  return (
    <section className="container-x py-24 sm:py-32">
      <p className="cinzel text-6xl text-brand-gold sm:text-8xl" aria-hidden="true">404</p>
      <h1 className="mt-6 text-3xl sm:text-4xl">Page not found</h1>
      <p className="para mt-4 max-w-lg text-lg leading-relaxed text-brand-green/85">
        The address may be mistyped, or the page may have moved. Head back to the homepage or get in touch if you were
        looking for something specific.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button to="/">Go to Homepage</Button>
        <Button to="/contact" variant="outline">Contact Us</Button>
      </div>
    </section>
  );
}
