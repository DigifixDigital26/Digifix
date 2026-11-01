import { Link } from 'react-router-dom';
import useMeta from '../hooks/useMeta.js';
import { useProjects } from '../hooks/useProjects.js';
import { services } from '../data/services.js';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import HeroRotator from '../components/HeroRotator.jsx';
import FloatingLaptopHero from '../components/FloatingLaptopHero.jsx';
const steps = [
  ['01', 'Discover', 'Understand the business, audience, requirements, and objectives.'],
  ['02', 'Design & Build', 'Develop the visual direction and implement the solution.'],
  ['03', 'Refine & Deliver', 'Review the work, incorporate agreed feedback, and prepare the final deliverables.'],
];

export default function Home() {
  useMeta(
    '',
    'Drevoxa Digital helps businesses build a distinctive online presence through strategic design, modern websites, and consistent social media management.'
  );
  const { projects, loading } = useProjects();
  const featured = (projects.filter((p) => p.featured).length >= 4 ? projects.filter((p) => p.featured) : projects).slice(0, 4);

  return (
    <>
      {/* Hero */}

<FloatingLaptopHero />

      {/* Introduction */}
      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <SectionHeading className="lg:col-span-5">Digital Thinking. Designed With Purpose.</SectionHeading>
          <div className="para space-y-5 text-lg leading-relaxed text-brand-green/90 lg:col-span-7">
            <p>
              We bring web development, graphic design, and social media management together in one studio. The website,
              the visual identity and the everyday content are planned side by side, so a business looks and sounds the
              same wherever a customer finds it.
            </p>
            <p>
              Every project starts with the business itself: what it offers, who it serves and how it wants to be
              seen. The design and technical decisions follow from those answers.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="on-dark bg-brand-green text-brand-cream section-y" aria-labelledby="services-preview">
        <div className="container-x">
          <h2 id="services-preview" className="text-3xl text-brand-cream sm:text-4xl">What We Bring to Your Business</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  className={`border-t border-brand-gold/60 pt-6 md:pr-8 ${i > 0 ? 'md:border-l md:border-t-0 md:pl-8 md:pt-0' : 'md:border-t-0 md:pt-0'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="cinzel text-3xl text-brand-gold">{s.number}</span>
                    <Icon className="h-6 w-6 text-brand-gold" aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl text-brand-cream">{s.title}</h3>
                  <p className="para mt-3 text-base leading-relaxed text-brand-cream/85">{s.summary}</p>
                  <Link to={`/services#${s.id}`} className="para mt-5 inline-block text-base font-medium text-brand-gold underline underline-offset-4 hover:text-brand-cream">
                    About {s.title.toLowerCase()}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section-y" aria-labelledby="selected-work">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 id="selected-work" className="text-3xl sm:text-4xl">Selected Work</h2>
              <p className="para mt-4 max-w-xl text-lg leading-relaxed text-brand-green/85">
                A selection of visual concepts and digital experiences created with attention to detail.
              </p>
            </div>
            <Button to="/work" variant="outline" className="self-start">View All Projects</Button>
          </div>
          {loading ? (
            <p className="para mt-12 text-brand-green/80" role="status">Loading projects</p>
          ) : (
            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-brand-green/15 bg-brand-cream-dark section-y" aria-labelledby="approach">
        <div className="container-x">
          <h2 id="approach" className="max-w-2xl text-3xl leading-tight sm:text-4xl">Good Work Begins With Understanding.</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(([n, title, text]) => (
              <li key={n} className="border-t-2 border-brand-green pt-5">
                <span className="cinzel text-2xl text-brand-green">{n}</span>
                <h3 className="mt-4 text-xl">{title}</h3>
                <p className="para mt-3 text-base leading-relaxed text-brand-green/85">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* Final CTA */}
      <section className="on-dark bg-brand-green section-y" aria-labelledby="final-cta">
        <div className="container-x">
          <div className="mx-auto max-w-2xl border border-brand-gold px-6 py-12 text-center sm:px-12">
            <h2 id="final-cta" className="text-3xl text-brand-cream sm:text-4xl">Have a Project in Mind?</h2>
            <p className="para mx-auto mt-4 max-w-md text-lg leading-relaxed text-brand-cream/85">
              Let&rsquo;s discuss your goals and find the right digital solution for your business.
            </p>
            <Button to="/contact" variant="light" className="mt-8">Start a Conversation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
