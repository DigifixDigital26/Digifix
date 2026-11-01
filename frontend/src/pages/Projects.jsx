import { useMemo, useState } from 'react';
import useMeta from '../hooks/useMeta.js';
import { useProjects } from '../hooks/useProjects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import Button from '../components/Button.jsx';
import {motion} from 'framer-motion'


const CATEGORIES = ['All', 'Web Development', 'Graphic Design', 'Brand Identity', 'Social Media Design'];

export default function Projects() {
  useMeta('Our Work', 'Selected web development, graphic design, brand identity and social media design projects by Drevoxa Digital.');
  const { projects, loading } = useProjects();
  const [category, setCategory] = useState('All');
  const visible = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [projects, category]
  );
  const hasPlaceholders = projects.some((p) => p.isPlaceholder);

  return (
    <>
      <motion.section initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.6}} className="container-x pt-16 sm:pt-24">
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">Our Work</h1>
        <p className="para mt-6 max-w-2xl text-lg leading-relaxed text-brand-green/85 sm:text-xl">
          Websites, identities and social media design, shown with the thinking behind each piece.
        </p>
        {hasPlaceholders && (
          <p className="para mt-6 max-w-2xl border-l-2 border-brand-gold pl-4 text-base text-brand-green/85" role="note">
           Explore our featured projects, showcasing real-world creativity, design, and development work.
          </p>
        )}
      </motion.section>

      <section className="container-x section-y" aria-label="Projects">
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`para rounded-sm border px-4 py-2.5 text-base transition-colors duration-200 ${
                category === c
                  ? 'border-brand-green bg-brand-green text-brand-cream'
                  : 'border-brand-green/40 hover:border-brand-green'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12" aria-live="polite">
          {loading ? (
            <p className="para text-brand-green/80" role="status">Loading projects</p>
          ) : visible.length === 0 ? (
            <p className="para text-lg">No projects in this category yet. Choose another category to keep browsing.</p>
          ) : (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          )}
        </div>
      </section>

      <section className="on-dark bg-brand-green section-y">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-xl text-3xl text-brand-cream">Have a project in mind?</h2>
          <Button to="/contact" variant="light">Start a Conversation</Button>
        </div>
      </section>
    </>
  );
}
