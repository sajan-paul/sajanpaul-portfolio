import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Palette, Layout, TrendingUp, Download, Briefcase, Building2, GraduationCap, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import bioData from '../../data/bio.json';
import { ResumeButton } from '../ui';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const whatIDo = [
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Creating responsive, user-friendly websites that combine aesthetic appeal with seamless functionality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Designing visually striking graphics and visual content that communicate your brand\'s message effectively.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Crafting intuitive user interfaces and experiences that prioritize user satisfaction and engagement.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Developing strategic marketing campaigns to boost online presence and drive meaningful engagement.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#my-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-me" ref={ref} className="section-padding relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/5 dark:bg-primary-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-[#e9d5ff] to-white bg-clip-text text-transparent animate-pulse">
                About Me
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 font-medium text-left tracking-wide">
              <span className="bg-gradient-to-r from-[#c084fc] to-[#e9d5ff] bg-clip-text text-transparent">
                Who am I?
              </span>
            </p>
          </motion.div>

          {/* Content Layout */}
          <div className="w-full">
            {/* Content Column */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Intro Paragraph */}
              <div className="space-y-4">
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Hello, I'm Sajan Paul.
                </p>
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  I am a Computer Science and Engineering graduate from Independent University, Bangladesh. I'm passionate about learning, creativity, and turning ideas into real digital experiences. I enjoy working in collaborative environments where ideas grow through teamwork, curiosity, and problem-solving.
                </p>
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Every project is an opportunity to learn and create something meaningful. My goal is to contribute to impactful work that blends design, technology, and user experience to make life simpler and more connected.
                </p>
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  My journey started with design — creating visuals in Photoshop and Canva. Over time, that creative interest turned into a passion for web development, where I could bring my designs to life through code.
                </p>
                {isExpanded && (
                  <>
                    <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      During my internship at Dream71 Bangladesh Ltd., I worked on responsive client websites, solved software issues, and learned how professional teams collaborate on real projects.
                    </p>
                    <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      For me, great digital experiences come from a balance of creativity and clarity. I like keeping things clean, functional, and purposeful. Every color, layout, and interaction should serve a reason.
                    </p>
                    <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      When I'm not coding or designing, I love exploring new UI/UX trends and learning new tools that help me grow as a creator. I'm inspired by simplicity, innovation, and collaboration — building things that look good and work even better.
                    </p>
                    <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed italic">
                      "I'm curious, creative, and always eager to keep learning — because the more I grow, the better I can create."
                    </p>
                  </>
                )}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 mt-4 text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  {isExpanded ? (
                    <>
                      <span>Read less</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Read more</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <ResumeButton href={bioData.resumeUrl} download>
                  Resume
                </ResumeButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
