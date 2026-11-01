import { Link, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import useMeta from '../hooks/useMeta.js';
import { useProject } from '../hooks/useProjects.js';
import Button from '../components/Button.jsx';
import NotFound from './NotFound.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading } = useProject(slug);

  useMeta(
    project ? project.title : 'Project',
    project?.shortDescription
  );

  if (loading) {
    return (
      <p className="container-x para py-24" role="status">
        Loading project
      </p>
    );
  }

  if (!project) return <NotFound />;

  return (
    <article className="container-x pb-16 pt-12 sm:pb-24 sm:pt-16">

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="para text-sm text-brand-green/80"
      >
        <Link
          to="/work"
          className="underline underline-offset-4"
        >
          Our Work
        </Link>

        <span aria-hidden="true"> / </span>

        <span>{project.title}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">

        {/* Project Image */}
        <div className="lg:col-span-7">
          <div className="aspect-[4/3] overflow-hidden border border-brand-green/20 bg-brand-cream-dark">

            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              width="800"
              height="600"
              className="h-full w-full object-cover"
            />

          </div>
        </div>

        {/* Project Information */}
        <div className="lg:col-span-5">

          <p className="para text-base text-brand-green/80">
            {project.category}
          </p>

          <h1 className="mt-2 text-3xl leading-tight sm:text-4xl">
            {project.title}
          </h1>

          {/* Placeholder Notice */}
          {project.isPlaceholder && (
            <p
              className="para mt-5 border-l-2 border-brand-gold pl-4 text-base"
              role="note"
            >
              This is a placeholder entry, not a client project.
            </p>
          )}

          {/* Description */}
          <p className="para mt-6 text-lg leading-relaxed text-brand-green/90">
            {project.description || project.shortDescription}
          </p>

          {/* Services */}
          {project.services?.length > 0 && (
            <div className="mt-8 border-t border-brand-green/20 pt-6">

              <h2 className="para text-base font-semibold">
                Services involved
              </h2>

              <ul className="para mt-3 space-y-1.5 text-base">
                {project.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <Button to="/work" variant="outline">
              Back to all projects
            </Button>

            <Button to="/contact">
              Start a Conversation
            </Button>

            {/* Live Website Button */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-brand-green bg-brand-green px-5 py-3 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-gold hover:text-brand-green"
              >
                Visit Live Website
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}

          </div>

        </div>

      </div>

    </article>
  );
}