import Button from './Button.jsx';
import {motion} from 'framer-motion'


export default function ServiceBlock({ service, flip = false }) {
  const Icon = service.icon;
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="scroll-mt-24 border-t border-brand-green/25 py-14 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-4">
            <span className="cinzel text-3xl text-brand-gold" aria-hidden="true">{service.number}</span>
            <Icon className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
          </div>
          <h2 id={`${service.id}-title`} className="mt-5 text-3xl leading-tight sm:text-4xl">{service.title}</h2>
          <p className="para mt-5 max-w-md text-lg leading-relaxed text-brand-green/85">{service.intro}</p>
          <Button to={`/contact?service=${encodeURIComponent(service.service)}`} className="mt-8">
            Discuss {service.title}
          </Button>
        </div>
        <ul className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          {service.offerings.map(([name, text]) => (
            <li key={name} className="border-b border-brand-green/15 py-5 first:pt-0 sm:grid sm:grid-cols-5 sm:gap-6">
              <h3 className="para text-lg font-semibold sm:col-span-2">{name}</h3>
              <p className="para mt-1 text-base leading-relaxed text-brand-green/85 sm:col-span-3 sm:mt-0">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
