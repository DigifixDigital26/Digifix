import useMeta from '../hooks/useMeta.js';
import { services } from '../data/services.js';
import ServiceBlock from '../components/ServiceBlock.jsx';
import Button from '../components/Button.jsx';
import {motion} from 'framer-motion'


export default function Services() {
  useMeta(
    'Services',
    'Web development, graphic design and brand identity, and social media management from Drevoxa Digital.'
  );
  return (
    <>
      <motion.section initial={{x:-50 , opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.8 }} className="container-x pb-4 pt-16 sm:pt-24">
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">Services</h1>
        <p className="para mt-6 max-w-2xl text-lg leading-relaxed text-brand-green/85 sm:text-xl">
          Three connected disciplines: the website, the brand behind it, and the social media presence that carries
          both. Choose one, or combine them in a single project.
        </p>
      </motion.section>

      <div className="container-x">
        {services.map((s, i) => <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} />)}
      </div>

      <section className="on-dark bg-brand-green section-y">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-brand-cream">Not sure which service fits?</h2>
            <p className="para mt-3 max-w-xl text-lg text-brand-cream/85">
              Describe the business and what you want to achieve. We will suggest a sensible starting point.
            </p>
          </div>
          <Button to="/contact" variant="light">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
