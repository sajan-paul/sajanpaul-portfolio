import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../components/layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';

// Lazy load heavy components for better performance
const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'), {
  loading: () => <div className="min-h-[400px]" />,
});

const ProjectCarousel = dynamic(() => import('../components/sections/ProjectCarousel'), {
  loading: () => <div className="min-h-[600px]" />,
});

const SkillsSection = dynamic(() => import('../components/sections/SkillsSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const BlogSection = dynamic(() => import('../components/sections/BlogSection'), {
  loading: () => <div className="min-h-[400px]" />,
});

const ContactForm = dynamic(() => import('../components/sections/ContactForm'), {
  loading: () => <div className="min-h-[600px]" />,
});

export default function Home() {
  useEffect(() => {
    // Handle navigation to sections via hash (e.g., /#about-me)
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Small delay to make sure everything is rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    };

    handleHashNavigation();

    // Listen for hash changes
    const handleHashChange = () => {
      handleHashNavigation();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectCarousel />
      <SkillsSection />
      <BlogSection />
      <ContactForm />
    </Layout>
  );
}


