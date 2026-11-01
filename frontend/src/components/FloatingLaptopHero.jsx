import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiFigma,
  SiReact,
  SiInstagram,
} from "react-icons/si";
import { ArrowUpRight, Code2, Palette } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FloatingLaptopHero.css";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const floatingTools = [
  { name: "Photoshop", Label: "Ps", className: "tool-photoshop" },
  { name: "Illustrator", Label: "Ai", className: "tool-illustrator" },
  { name: "Figma", Icon: SiFigma, className: "tool-figma" },
  { name: "React", Icon: SiReact, className: "tool-react" },
  { name: "Instagram", Icon: SiInstagram, className: "tool-instagram" },
  { name: "Canva", Label: "Ca", className: "tool-canva" },
];

const FloatingLaptopHero = () => {
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const stageRef = useRef(null);
  const laptopRef = useRef(null);
  const screenRef = useRef(null);
  const baseRef = useRef(null);
  const iconsRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 761px)", () => {

      // Laptop will never exceed its available space.
      const getScale = () => {
        const laptopWidth = 638;
        const laptopHeight = 390;

        // Keep 12% breathing space on every side.
        const availableWidth = window.innerWidth * 0.76;
        const availableHeight = window.innerHeight * 0.72;

        const widthScale = availableWidth / laptopWidth;
        const heightScale = availableHeight / laptopHeight;

        // Controlled zoom with minimum and maximum limits.
        return Math.min(1.65, widthScale, heightScale);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline

        // Hide hero content
        .to(copyRef.current, {
          x: -70,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.25,
        }, 0)

        // Hide floating icons
        .to(iconsRef.current, {
          opacity: 0,
          scale: 0.6,
          duration: 0.25,
        }, 0.1)

        // Move laptop to exact centre
        .to(stageRef.current, {
          left: "50%",
          top: "50%",
          duration: 0.62,
          ease: "power2.inOut",
        }, 0.12)

        .to(laptopRef.current, {
          scale: getScale,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 0.62,
          ease: "power2.inOut",
        }, 0.12)

      const floatAnimation = gsap.to(".float-tool", {
        y: (index) => index % 2 === 0 ? -13 : 13,
        rotate: (index) => index % 2 === 0 ? 5 : -5,
        duration: 2.6,
        ease: "sine.inOut",
        stagger: 0.18,
        repeat: -1,
        yoyo: true,
      });

      return () => {
        floatAnimation.kill();
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };

  }, [shouldReduceMotion]);

  const floatVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.92 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.65 + index * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="floating-hero" ref={sectionRef}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">D</div>

      <motion.div
        className="hero-copy"
        ref={copyRef}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.13, delayChildren: 0.12 } } }}
      >
        <motion.span className="hero-eyebrow" variants={floatVariants} custom={0}>
          DIGIFIX DIGITAL <span /> CREATIVE STUDIO
        </motion.span>
        <motion.h1 variants={floatVariants} custom={1}>
          Thoughtful <em>design.</em><br />
          Powerful digital<br />
          experiences.
        </motion.h1>
        <motion.p variants={floatVariants} custom={2}>
          We build distinctive digital experiences through strategic design,
          modern websites, and creative brand communication.
        </motion.p>
        <motion.div className="hero-actions" variants={floatVariants} custom={3}>
          <Button to="/work">Explore Our Work</Button>
          <Button to="/contact" variant="outline">Let&rsquo;s Talk</Button>
        </motion.div>
        <motion.div className="hero-capabilities" variants={floatVariants} custom={4}>
          <span><Palette size={15} /> DESIGN</span>
          <i />
          <span><Code2 size={15} /> DEVELOPMENT</span>
          <i />
          <span>CREATIVE GROWTH</span>
        </motion.div>
      </motion.div>

      <div
        className="laptop-stage"
        ref={stageRef}
        aria-label="Floating laptop showing the Drevoxa creative portfolio"
      >
        <div className="laptop-halo" aria-hidden="true" />
        <div className="floating-tools" ref={iconsRef} aria-hidden="true">
          {floatingTools.map(({ name, Icon, Label, className }, index) => (
            <motion.div
              key={name}
              className={`float-tool ${className}`}
              custom={index}
              variants={floatVariants}
              initial="hidden"
              animate="visible"
              title={name}
            >
              {Icon ? <Icon /> : <b>{Label}</b>}
            </motion.div>
          ))}
        </div>

        <div className="laptop-assembly" ref={laptopRef}>
          <div className="laptop-screen" ref={screenRef}>
            <div className="screen-topbar">
              <span className="screen-brand-mark">
                <img
                  src="/favicon.svg"
                  alt="Digifix"
                />
              </span>
              <span className="screen-brand-name">Digifix</span>
              <span className="screen-topbar-links">DESIGN&nbsp;&nbsp; WEB&nbsp;&nbsp; BRAND</span>
              <span className="screen-menu-dot">•••</span>
            </div>
            <div className="laptop-screen-content">
              <div className="screen-kicker">A CREATIVE DIGITAL STUDIO</div>
              <div className="screen-main-title">Ideas made<br /><i>visible.</i></div>
              <div className="screen-bottom-row">
                <span>DESIGN THAT MOVES<br />BUSINESSES FORWARD.</span>
                <span className="screen-circle-arrow">↗</span>
              </div>
              {/* <div className="screen-projects">
                <div className="screen-project-card screen-project-one"><span>01 / BRAND</span><b>FORM<br />& FEEL</b></div>
                <div className="screen-project-card screen-project-two"><span>02 / DIGITAL</span><b>MAKE IT<br />MATTER</b></div>
                <div className="screen-project-card screen-project-three"><span>03 / SOCIAL</span><b>BUILT TO<br />CONNECT</b></div>
              </div> */}
            </div>
          </div>
          <div className="laptop-base" ref={baseRef}>
            <div className="laptop-notch" />
            <div className="laptop-trackpad" />
          </div>
        </div>
        <div className="laptop-caption">CREATIVE TOOLS. THOUGHTFUL EXECUTION.</div>
      </div>

      <div className="hero-scroll-note"><span /> SCROLL TO EXPLORE</div>
    </section>
  );
};

export default FloatingLaptopHero;
