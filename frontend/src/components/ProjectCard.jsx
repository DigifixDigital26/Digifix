import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden border border-brand-green/20 bg-brand-cream-dark">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            width="800"
            height="600"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {project.isPlaceholder && (
            <span className="para absolute left-3 top-3 rounded-sm bg-brand-cream px-2 py-1 text-xs font-medium text-brand-green">
             {project.category}
            </span>
          )}
        </div>
        <div className="mt-4 border-t-2 border-brand-gold pt-4">
          <p className="para text-sm text-brand-green/80">{project.category}</p>
          <h3 className="mt-1 text-xl text-brand-green group-hover:underline group-hover:decoration-brand-gold group-hover:underline-offset-4">
            {project.title}
          </h3>
          {project.shortDescription && (
            <p className="para mt-2 text-base leading-relaxed text-brand-green/85">{project.shortDescription}</p>
          )}
          
          <span className="para mt-3 inline-block text-sm font-medium underline underline-offset-4">View project</span>
        </div>
      </Link>
    </motion.article>
  );
}
