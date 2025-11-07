import { Layout } from '../components/layout';
import { 
  HeroSection, 
  AboutSection, 
  ServicesSection, 
  ProjectCarousel, 
  SkillsSection, 
  BlogSection, 
  ContactForm 
} from '../components/sections';

export default function Home() {
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


