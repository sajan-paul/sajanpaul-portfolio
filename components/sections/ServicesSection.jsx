import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Layout,
  Code, 
  Palette, 
  Search, 
  TrendingUp,
  Users,
  X,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
  Rocket,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      shortDescription: "Human‑centered interfaces grounded in research and crafted with care — from user flows and wireframes to polished, accessible designs. I focus on clarity, consistency, and micro‑interactions that feel natural across devices, turning complex ideas into simple, delightful experiences.",
      color: "from-purple-500 to-pink-500",
      what: "I specialize in designing user-centered interfaces that are both beautiful and functional. My approach combines user research, thoughtful design thinking, and modern design principles to create experiences that users love.",
      how: [
        "Conduct thorough user research and persona development",
        "Create wireframes and low-fidelity prototypes",
        "Design high-fidelity mockups with attention to visual hierarchy",
        "Develop interactive prototypes for user testing",
        "Iterate based on feedback to ensure optimal usability",
        "Create comprehensive design systems and style guides"
      ],
      deliverables: ["User Research Reports", "Wireframes & Mockups", "Interactive Prototypes", "Design Systems", "User Testing Results"]
    },
    {
      icon: Code,
      title: "Web Development",
      shortDescription: "Building responsive, fast, and scalable websites and web applications using modern technologies.",
      color: "from-blue-500 to-cyan-500",
      what: "I develop custom websites and web applications that are responsive, performant, and tailored to your specific needs. From simple landing pages to complex web applications, I ensure your digital presence is robust and scalable.",
      how: [
        "Plan and architect the website structure and functionality",
        "Develop responsive layouts that work on all devices",
        "Write clean, maintainable code using HTML, CSS, PHP, and JavaScript",
        "Integrate databases (MySQL) for dynamic content management",
        "Implement SEO best practices for better search visibility",
        "Optimize performance for fast loading times",
        "Test across browsers and devices for compatibility",
        "Deploy and maintain with ongoing support"
      ],
      deliverables: ["Responsive Websites", "Web Applications", "Database Integration", "Cross-browser Compatibility", "Performance Optimization"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      shortDescription: "Designing visually striking graphics, branding materials, and visual content that communicate your message effectively.",
      color: "from-pink-500 to-rose-500",
      what: "I create compelling visual designs that capture attention and communicate your brand's message effectively. From logos to social media graphics, I help you establish a strong visual identity.",
      how: [
        "Understand your brand identity and target audience",
        "Create mood boards and design concepts",
        "Design logos, branding materials, and visual assets using Adobe Photoshop and Canva",
        "Develop consistent color palettes and typography",
        "Create social media graphics and marketing materials",
        "Design print materials when needed",
        "Ensure brand consistency across all design elements"
      ],
      deliverables: ["Logo Design", "Brand Identity", "Social Media Graphics", "Marketing Materials", "Print Design"]
    },
    {
      icon: Search,
      title: "SEO & Analysis",
      shortDescription: "Optimizing your website for search engines and analyzing performance data to drive organic traffic and growth.",
      color: "from-orange-500 to-amber-500",
      what: "I help improve your website's visibility in search engines through strategic SEO techniques and thorough analysis. By understanding search algorithms and user behavior, I optimize your content and structure for better rankings.",
      how: [
        "Conduct comprehensive SEO audits and keyword research",
        "Optimize on-page elements (titles, meta descriptions, headers)",
        "Improve website structure and internal linking",
        "Create SEO-friendly content strategies",
        "Set up and monitor Google Analytics and Search Console",
        "Analyze performance metrics and traffic patterns",
        "Identify opportunities for improvement",
        "Provide regular reports with actionable insights"
      ],
      deliverables: ["SEO Audit Reports", "Keyword Research", "Analytics Setup", "Performance Reports", "Optimization Recommendations"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      shortDescription: "Developing strategic digital marketing campaigns to boost online presence, engage audiences, and drive conversions.",
      color: "from-green-500 to-emerald-500",
      what: "I create and execute digital marketing strategies that help businesses reach their target audience, build brand awareness, and drive meaningful engagement. My approach combines various digital channels for maximum impact.",
      how: [
        "Develop comprehensive digital marketing strategies",
        "Create engaging content for social media platforms",
        "Plan and execute email marketing campaigns",
        "Manage social media accounts and communities",
        "Run targeted advertising campaigns on various platforms",
        "Analyze campaign performance and ROI",
        "A/B test different approaches for optimization",
        "Adjust strategies based on data-driven insights"
      ],
      deliverables: ["Marketing Strategies", "Social Media Management", "Email Campaigns", "Advertising Campaigns", "Performance Analytics"]
    },
    {
      icon: Users,
      title: "Consulting & Training",
      shortDescription: "Providing expert technical consulting and training to help organizations grow and teams succeed.",
      color: "from-indigo-500 to-purple-500",
      what: "I offer consulting services and training programs to help businesses and teams improve their digital capabilities. Whether you need technical guidance or team training, I provide personalized solutions.",
      how: [
        "Assess current technical capabilities and identify gaps",
        "Provide strategic recommendations for improvement",
        "Conduct training sessions on web technologies and design tools",
        "Review code and provide best practices guidance",
        "Help plan and architect technical solutions",
        "Offer ongoing mentorship and support",
        "Create training materials and documentation",
        "Assist with team skill development programs"
      ],
      deliverables: ["Technical Consultations", "Training Programs", "Code Reviews", "Documentation", "Best Practices Guides"]
    }
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  // Robust scroller to the contact section that resists competing hash/scroll behaviors
  const scrollToContactSection = (opts = { behavior: 'smooth' }) => {
    const target = document.getElementById('contact');
    if (!target) return;
    const navbarOffset = 64;
    const targetY = target.getBoundingClientRect().top + window.scrollY + 40 - navbarOffset;
    const behavior = opts.behavior || 'smooth';
    if (window?.history?.replaceState) {
      window.history.replaceState(null, '', `${window.location.pathname}#contact`);
    }
    window.scrollTo({ top: targetY, behavior });
  };

  return (
    <>
      <section id="services" ref={ref} className="section-padding relative overflow-hidden">
        {/* Soft Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/5 dark:bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-[#e9d5ff] to-white bg-clip-text text-transparent animate-pulse">
                  SERVICES
                </span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
              </div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to help your business grow and succeed in the modern world.
            </p>
          </motion.div>

            {/* Services Grid - Custom 3x3 Layout (2x3 on mobile) */}
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-20 justify-items-center">
              {/* Card 1: Occupies cells 1 & 4 (Tall - spans 2 rows, column 1) */}
              <motion.div
                key={services[0].title}
                variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden md:row-span-2 flex flex-col before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[0])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[0].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[0].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[0].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                </div>

                {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[0].title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[0].shortDescription}
                </p>

                {/* Extra details to better fill the tall card - hidden on mobile */}
                <ul className="hidden md:block relative z-10 mt-2 space-y-2 text-sm text-secondary-700 dark:text-secondary-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-400" />
                    <span className="text-gray-200 dark:text-gray-300">Research-driven decisions with clear user flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-400" />
                    <span className="text-gray-200 dark:text-gray-300">Wireframes to interactive prototypes for fast feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-400" />
                    <span className="text-gray-200 dark:text-gray-300">Design systems and accessible components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-400" />
                    <span className="text-gray-200 dark:text-gray-300">Thoughtful micro‑interactions and motion</span>
                  </li>
                </ul>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
              </motion.div>

              {/* Card 2: Occupies cells 2 & 3 (Wide - spans 2 columns, row 1) */}
              <motion.div
                key={services[1].title}
                variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden md:col-span-2 flex flex-col before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[1])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[1].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[1].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[1].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                </div>

                {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[1].title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[1].shortDescription}
                </p>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
              </motion.div>

              {/* Card 3: Occupies cell 5 (Normal) */}
              <motion.div
                key={services[2].title}
                variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden flex flex-col before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[2])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[2].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[2].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[2].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                </div>

                {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[2].title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[2].shortDescription}
                </p>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
              </motion.div>

              {/* Card 4: Occupies cell 6 (Normal) */}
                <motion.div
                key={services[3].title}
                  variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden flex flex-col before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                  whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[3])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
                >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[3].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                  {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[3].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[3].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                  </div>

                  {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[3].title}
                  </h3>
                  
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[3].shortDescription}
                  </p>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
                </motion.div>

              {/* Card 5: Occupies cells 7 & 8 (Wide - spans 2 columns, row 3) */}
              <motion.div
                key={services[4].title}
                variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden md:col-span-2 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[4])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[4].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[4].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[4].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                </div>

                {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[4].title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[4].shortDescription}
                </p>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
          </motion.div>

              {/* Card 6: Occupies cell 9 (Normal) */}
              <motion.div
                key={services[5].title}
                variants={itemVariants}
                className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30 dark:border-white/20 cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:rounded-2xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleCardClick(services[5])}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[5].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Service Icon */}
                <div className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${services[5].color} opacity-20 dark:opacity-30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 border border-white/20 dark:border-white/15 shadow-lg`}>
                  {(() => {
                    const IconComponent = services[5].icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />;
                  })()}
                </div>

                {/* Service Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {services[5].title}
              </h3>
                
                <p className="text-sm md:text-base text-gray-200 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed relative z-10 line-clamp-3">
                  {services[5].shortDescription}
                </p>

                {/* Click Indicator */}
                <div className="flex items-center text-primary-400 text-sm font-medium relative z-10 group-hover:gap-2 transition-all duration-300 gap-1 mt-auto pt-2 md:pt-4 group-hover:text-cyan-400">
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
              </motion.div>
            </div>

            {/* How I Work Process Section */}
            <motion.div variants={itemVariants} className="mt-20">
              <div className="text-center mb-16">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-secondary-800 dark:text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  How I Work
                </motion.h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto mb-4"></div>
                <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
                  A systematic approach to ensure quality, efficiency, and client satisfaction in every project
                </p>
                    </div>

              {/* Horizontal Flow Layout */}
              <div className="relative max-w-7xl mx-auto">
                {/* Animated Horizontal Connecting Line */}
                <div className="hidden md:block absolute top-16 left-0 right-0 h-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"></div>
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  </div>

                {/* Process Steps in a Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
                  {[
                    {
                      step: "01",
                      title: "Discovery & Consultation",
                      description: "I start by understanding your goals, target audience, and project requirements through detailed discussions.",
                      icon: MessageSquare,
                      color: "from-blue-500 to-cyan-500",
                      bgGradient: "from-blue-500/10 to-cyan-500/5"
                    },
                    {
                      step: "02",
                      title: "Planning & Strategy",
                      description: "I create a comprehensive project plan with timelines, milestones, and deliverables tailored to your needs.",
                      icon: FileText,
                      color: "from-purple-500 to-pink-500",
                      bgGradient: "from-purple-500/10 to-pink-500/5"
                    },
                    {
                      step: "03",
                      title: "Design & Development",
                      description: "I bring your vision to life with creative designs and robust development, ensuring quality at every step.",
                      icon: Rocket,
                      color: "from-green-500 to-emerald-500",
                      bgGradient: "from-green-500/10 to-emerald-500/5"
                    },
                    {
                      step: "04",
                      title: "Review & Launch",
                      description: "After thorough testing and revisions, I deliver the final product and provide ongoing support.",
                      icon: CheckCircle,
                      color: "from-orange-500 to-amber-500",
                      bgGradient: "from-orange-500/10 to-amber-500/5"
                    }
                  ].map((processStep, index) => (
                    <motion.div
                      key={processStep.step}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className="relative group flex flex-col items-center text-center"
                    >
                      {/* Background Glow Effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${processStep.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      {/* Step Icon Circle */}
                      <div className="relative mb-6 z-10">
                        {/* Outer Ring Animation */}
                        <motion.div
                          className="absolute -inset-2 border-2 border-primary-400 rounded-full opacity-0 group-hover:opacity-30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        
                        {/* Main Icon Circle */}
                        <div className="relative">
                          <motion.div
                            className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${processStep.color} rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                            whileHover={{ 
                              boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                              rotate: [0, -5, 5, -5, 0]
                            }}
                          >
                            <processStep.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                          </motion.div>
                          
                          {/* Animated Glow */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${processStep.color} rounded-2xl blur-xl opacity-30`}
                            animate={{ 
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />

                          {/* Step Number Badge */}
                          <motion.div
                            className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${processStep.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-secondary-800 text-white font-bold text-xs`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {processStep.step}
                          </motion.div>
                        </div>
                  </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3 z-10">
                        {/* Step Number with Gradient */}
                        <motion.div 
                          className="flex items-center justify-center gap-2 mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                        >
                          <span className={`text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${processStep.color} bg-clip-text text-transparent`}>
                            Step {processStep.step}
                          </span>
                        </motion.div>

                        {/* Title with Gradient Hover */}
                        <motion.h4
                          className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-secondary-800 to-secondary-800 dark:from-white dark:to-white bg-clip-text text-transparent group-hover:from-primary-400 group-hover:to-accent-500 transition-all duration-500"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.4 }}
                        >
                          {processStep.title}
                        </motion.h4>
                  
                        {/* Description */}
                        <motion.p
                          className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.5 }}
                        >
                          {processStep.description}
                        </motion.p>
                      </div>

                      {/* Connecting Arrow (Between Steps) */}
                      {index < 3 && (
                        <motion.div
                          className="hidden lg:block absolute top-16 -right-2 md:-right-4 text-primary-400 opacity-30 z-20"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 0.3, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.6 }}
                        >
                          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.div>
                      )}
                </motion.div>
              ))}
            </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50"
              onClick={closeModal}
            />
            
            {/* Modal */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 pointer-events-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}></div>
                </div>
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 dark:from-gray-800/30 dark:via-transparent dark:to-gray-900/50 pointer-events-none"></div>
                
                {/* Animated Orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gray-400/10 dark:bg-gray-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/10 dark:bg-gray-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Modal Header */}
                <div className="relative bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-sm p-8 rounded-t-2xl border-b border-gray-700 dark:border-gray-700 z-10">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center text-gray-300 dark:text-gray-300 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-700/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-600 dark:border-gray-600">
                      <selectedService.icon className="w-8 h-8 text-gray-300 dark:text-gray-300" />
                    </div>
                    <h2 className="text-3xl font-bold text-white dark:text-white">{selectedService.title}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="relative p-8 space-y-8 z-10 overflow-y-auto max-h-[calc(90vh-200px)]">
                  {/* What I Do */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                      What I Do
            </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedService.what}
                    </p>
                  </div>

                  {/* How I Do It */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                      How I Do It
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.how.map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                          <span className="leading-relaxed">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                      What You'll Get
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Enable page scroll, jump instantly to contact behind the modal,
                        // then close the modal so user never sees intermediate sections.
                        document.body.style.overflow = 'unset';
                        scrollToContactSection({ behavior: 'auto' });
                        setTimeout(() => {
                          closeModal();
                        }, 120);
                      }}
                      className="w-full bg-gray-800 dark:bg-gray-700 text-white font-semibold py-4 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <span>Let's Work Together</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
