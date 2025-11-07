import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import bioData from '../../data/bio.json';
import socialLinksData from '../../data/socialLinks.json';
import { ArrowButton } from '../ui';

const HeroSection = () => {
  const roles = ['UI/UX Designer', 'Web Developer', 'Graphic Designer', 'Digital Marketer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500); // hold ~1.5s per role
    return () => clearInterval(intervalId);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-4 lg:pt-6 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      {/* Left Sidebar Socials aligned with header (fixed) */}
      <div className="hidden lg:flex fixed left-6 top-0 z-[9999] flex-col items-center pointer-events-none">
        {/* Connector line from header */}
        <div className="relative mt-0">
          <div className="w-px h-32 bg-gradient-to-b from-primary-400/70 via-primary-400/30 to-transparent rounded-full"></div>
          {/* Glow dot */}
          <div className="absolute -bottom-2 -left-[5px] w-3 h-3 rounded-full bg-primary-400">
            <span className="absolute inset-0 rounded-full bg-primary-400/40 animate-ping"></span>
          </div>
        </div>

        {/* Icons */}
        <div className="mt-6 flex flex-col items-center gap-4 pointer-events-auto">
          {socialLinksData.social
            .filter(s => ['github','linkedin','mail'].includes(s.icon))
            .map((social, index) => {
              const getIcon = (iconName) => {
                switch (iconName) {
                  case 'github':
                    return (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    );
                  case 'linkedin':
                    return (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    );
                  case 'mail':
                    return (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                      </svg>
                    );
                  default:
                    return null;
                }
              };
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-secondary-700 dark:text-secondary-300 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 shadow-sm"
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ scale: 1.12, rotate: 2, boxShadow: '0 12px 24px rgba(147,51,234,0.25)' }}
                  whileTap={{ scale: 0.95 }}
                  title={social.description}
                >
                  {getIcon(social.icon)}
                </motion.a>
              );
            })}
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Soft radial glow behind headline to draw focus */}
        <div className="pointer-events-none absolute -top-10 -left-16 w-[520px] h-[520px] rounded-full bg-primary-700/10 blur-[120px]" />
        {/* Subtle particles for depth */}
        <div className="pointer-events-none absolute top-24 right-12 w-2 h-2 rounded-full bg-primary-400/60 blur-[1px] animate-pulse" />
        <div className="pointer-events-none absolute top-36 right-40 w-1.5 h-1.5 rounded-full bg-accent-400/70 animate-pulse" />
        <div className="pointer-events-none absolute top-12 right-64 w-1 h-1 rounded-full bg-primary-300/70 animate-ping" />
        {/* Soft noise texture overlay via SVG turbulence */}
        <svg className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay" aria-hidden="true">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Left Side - Content */}
          <div className="text-center lg:text-left lg:pr-6 xl:pr-10">
            {/* Profile Image - Smaller for left side */}
            <motion.div variants={itemVariants} className="mb-8 lg:hidden">
              <div className="relative inline-block">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full mx-auto">
                    <img
                        src="/images/profile/home (1).png"
                        alt={bioData.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                </div>
                
              </div>
            </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-primary-400 font-semibold text-lg font-accent creative-text">
              HI, I'M
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-2 lg:mb-3 font-display leading-[1.25] md:leading-[1.2] bg-gradient-to-r from-[#0b1e3b] via-[#1e2e72] to-[#5b21b6] dark:bg-gradient-to-r dark:from-white dark:via-[#d8b4fe] dark:to-[#5b21b6] bg-clip-text text-transparent drop-shadow-[0_3px_16px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_4px_24px_rgba(147,51,234,0.15)]"
          >
            {bioData.name}
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="mb-4 lg:mb-5 flex justify-center lg:justify-start"
          >
            <span className="inline-block w-28 h-1.5 rounded-full bg-gradient-to-r from-[#0b1e3b] to-[#5b21b6] dark:from-white dark:to-[#5b21b6]" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-secondary-600 dark:text-secondary-300 mb-6 font-medium font-accent leading-8 md:leading-9"
          >
            Aspiring{' '}
            <span className="inline-flex items-baseline align-baseline">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-primary-400 drop-shadow-[0_0_18px_rgba(147,51,234,0.25)]"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-1 w-[2px] h-6 bg-primary-400 animate-pulse" />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-8 md:leading-9"
          >
            Passionate about crafting digital experiences through design, code, and marketing.
          </motion.p>


            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <ArrowButton useArrows={false} color="purpleGlass" onClick={() => scrollToContact()}>Contact me</ArrowButton>
              <ArrowButton color="purpleGlass" onClick={() => {
                const el = document.querySelector('#my-projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>View Projects</ArrowButton>
            </motion.div>

            {/* Social Links above text removed; using fixed left sidebar */}
          </div>

          {/* Right Side - Large Photo */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:flex items-start justify-end lg:-mt-6 xl:-mt-8 lg:pl-6 xl:pl-10"
          >
            <div className="relative w-full max-w-3xl xl:max-w-4xl">
              {/* Decorative glows to fill space */}
              <div className="pointer-events-none absolute -inset-8">
                <div className="absolute -bottom-10 -left-6 w-64 h-64 bg-primary-700/20 blur-[70px] rounded-full"/>
                <div className="absolute -top-6 -right-4 w-56 h-56 bg-accent-700/20 blur-[70px] rounded-full"/>
              </div>

              {/* Main Photo (no frame, larger size) */}
              <div className="relative w-full flex justify-end">
                    <img
                      src="/images/profile/home (1).png"
                      alt={bioData.name}
                      className="w-auto max-h-[90vh] lg:max-h-[95vh] xl:max-h-[100vh] object-contain scale-125"
                    />
                {/* Soft spotlight */}
                <div className="pointer-events-none absolute -z-10 bottom-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-[80px]" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Quote Section removed as requested */}
    </section>
  );
};

export default HeroSection;


