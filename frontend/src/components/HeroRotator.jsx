import { useEffect, useState } from "react";
const WORDS = ["Design", "Branding", "Website",];

export default function HeroRotator({ interval = 2000 }) {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let t;
    const id = setInterval(() => {
      setFade(true);
      t = setTimeout(() => {
        setI(n => (n + 1) % WORDS.length);
        setFade(false);
      }, 400);
    }, interval);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, [interval]);

  return (
    <section className="hero">
      <h1 className="text-brand-gold" >
        <span className={`rotator ${fade ? "fade" : ""}` }>{WORDS[i]}</span>
      </h1>
    </section>
  );
}