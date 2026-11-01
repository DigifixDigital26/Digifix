import { useEffect } from 'react';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/** Sets the document title and description for the current page. */
export default function useMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Digifix Digital` : 'Digifix Digital | Web Development, Brand Identity and Social Media';
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', fullTitle);
  }, [title, description]);
}
