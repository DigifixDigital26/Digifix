import { useEffect, useState } from 'react';
import api from '../api/client.js';
import localProjects from '../data/projects.json';

const sortProjects = (list) => [...list].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

/**
 * Loads projects from the API. If the API is unreachable or returns nothing
 * (for example before the database is seeded), the local data file is used
 * so the portfolio never renders empty.
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    api
      .get('/api/projects')
      .then(({ data }) => {
        if (!active) return;
        setProjects(data?.data?.length ? sortProjects(data.data) : sortProjects(localProjects));
      })
      .catch(() => active && setProjects(sortProjects(localProjects)))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return { projects, loading };
}

export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    api
      .get(`/api/projects/${encodeURIComponent(slug)}`)
      .then(({ data }) => active && setProject(data.data))
      .catch(() => active && setProject(localProjects.find((p) => p.slug === slug) || null))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [slug]);

  return { project, loading };
}
