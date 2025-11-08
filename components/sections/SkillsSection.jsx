import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import skillsData from '../../data/skills.json';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import { RiCodeSSlashLine, RiBrushFill, RiToolsFill } from 'react-icons/ri';
import { HiSparkles } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Get all skills from categories
  const allSkills = skillsData.categories.flatMap(category => category.skills);

  // Enhanced category icons with tool connections and visual elements
  const getCategoryIcon = (categoryName, skills) => {
    const name = categoryName.toLowerCase();
    
    if (name.includes('development') || name.includes('💻')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main icon */}
          <RiCodeSSlashLine className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
          
          {/* Connected tool badges */}
          <motion.div 
            className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-cyan-200"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-cyan-600">JS</span>
          </motion.div>
          <motion.div 
            className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-purple-200"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-purple-600">R</span>
          </motion.div>
          
          {/* Floating tool indicators */}
          <motion.div 
            className="absolute top-0 -left-3 w-3 h-3 bg-blue-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 -right-3 w-3 h-3 bg-cyan-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Code brackets decoration */}
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl font-bold">&lt;</span>
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/30 text-xl font-bold">/&gt;</span>
        </div>
      );
    }
    
    if (name.includes('design') || name.includes('🎨')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main icon */}
          <RiBrushFill className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
          
          {/* Connected tool badges */}
          <motion.div 
            className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-pink-200"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-pink-600">F</span>
          </motion.div>
          <motion.div 
            className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-orange-200"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-orange-600">Ps</span>
          </motion.div>
          
          {/* Floating color dots */}
          <motion.div 
            className="absolute top-0 -left-3 w-3 h-3 bg-pink-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 -right-3 w-3 h-3 bg-rose-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Paint stroke decoration */}
          <div className="absolute -left-3 top-1/4 w-2 h-6 bg-gradient-to-b from-pink-400 to-transparent rounded-full opacity-60"></div>
          <div className="absolute -right-3 bottom-1/4 w-2 h-6 bg-gradient-to-t from-rose-400 to-transparent rounded-full opacity-60"></div>
        </div>
      );
    }
    
    if (name.includes('ai tools') || name.includes('🤖')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main icon */}
          <FaRobot className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
          
          {/* Connected AI tool badges */}
          <motion.div 
            className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-green-200"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-green-600">AI</span>
          </motion.div>
          <motion.div 
            className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-violet-200"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-violet-600">GP</span>
          </motion.div>
          
          {/* Pulsing AI indicators */}
          <motion.div 
            className="absolute top-0 -left-3 w-3 h-3 bg-violet-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 -right-3 w-3 h-3 bg-purple-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          />
          
          {/* Neural network lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path d="M20,20 Q50,50 80,20" stroke="white" strokeWidth="1" fill="none" />
              <path d="M20,80 Q50,50 80,80" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      );
    }
    
    if (name.includes('utilities') || name.includes('productivity') || name.includes('⚙️')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main icon */}
          <RiToolsFill className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
          
          {/* Connected tool badges */}
          <motion.div 
            className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-blue-200"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-blue-600">W</span>
          </motion.div>
          <motion.div 
            className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center shadow-xl border border-green-200"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-[9px] font-extrabold text-green-600">X</span>
          </motion.div>
          
          {/* Utility indicators */}
          <motion.div 
            className="absolute top-0 -left-3 w-3 h-3 bg-indigo-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 -right-3 w-3 h-3 bg-purple-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Gear decoration */}
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-white/30 text-lg">⚙</span>
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-white/30 text-lg">⚙</span>
        </div>
      );
    }
    
    return <RiCodeSSlashLine className="w-10 h-10 md:w-12 md:h-12" />;
  };

  // Function to get category gradient color
  const getCategoryGradient = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('development') || name.includes('💻')) {
      return 'from-cyan-500 to-blue-500';
    }
    if (name.includes('design') || name.includes('🎨')) {
      return 'from-pink-500 to-rose-500';
    }
    if (name.includes('ai tools') || name.includes('🤖')) {
      return 'from-violet-500 to-purple-500';
    }
    if (name.includes('utilities') || name.includes('productivity') || name.includes('⚙️')) {
      return 'from-purple-500 to-indigo-500';
    }
    return 'from-cyan-500 to-blue-500';
  };

  // Function to get category shadow color
  const getCategoryShadowColor = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('development') || name.includes('💻')) {
      return 'rgba(6,182,212,0.4)';
    }
    if (name.includes('design') || name.includes('🎨')) {
      return 'rgba(236,72,153,0.4)';
    }
    if (name.includes('ai tools') || name.includes('🤖')) {
      return 'rgba(139,92,246,0.4)';
    }
    if (name.includes('utilities') || name.includes('productivity') || name.includes('⚙️')) {
      return 'rgba(168,85,247,0.4)';
    }
    return 'rgba(6,182,212,0.4)';
  };

  // Function to get category hover shadow color
  const getCategoryHoverShadowColor = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('development') || name.includes('💻')) {
      return 'rgba(6,182,212,0.6)';
    }
    if (name.includes('design') || name.includes('🎨')) {
      return 'rgba(236,72,153,0.6)';
    }
    if (name.includes('ai tools') || name.includes('🤖')) {
      return 'rgba(139,92,246,0.6)';
    }
    if (name.includes('utilities') || name.includes('productivity') || name.includes('⚙️')) {
      return 'rgba(168,85,247,0.6)';
    }
    return 'rgba(6,182,212,0.6)';
  };



  // Custom VS Code and Microsoft Office icons (not available in react-icons)
  // VS Code logo: Official Microsoft Visual Studio Code logo - exact official paths
  const VSCodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official VS Code logo paths from Microsoft */}
      {/* Left larger chevron - folded ribbon */}
      <path d="M11.216 10.5L5.216 16.5L2.784 14.068L6.872 10L2.784 5.932L5.216 3.5L11.216 9.5L11.216 10.5Z" fill="#007ACC"/>
      <path d="M11.216 9.5L12.056 10.344L8.144 6.432L5.216 7.5L11.216 9.5Z" fill="#005A9E"/>
      <path d="M12.056 13.644L8.144 17.556L5.216 16.5L9.216 12.5L12.056 13.644Z" fill="#1F9CF0"/>
      {/* Right smaller chevron */}
      <path d="M17.916 4.812L16.856 5.872L20.144 9.16L16.856 12.448L17.916 13.508L21.924 9.5L17.916 4.812Z" fill="#007ACC"/>
    </svg>
  );

  const MicrosoftWordIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wordGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2B579A" stopOpacity="1" />
          <stop offset="100%" stopColor="#1E3A68" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#wordGrad)"/>
      <path d="M8 7h8l1 1v8l-1 1H8l-1-1V8l1-1z" fill="white" opacity="0.98"/>
      <text x="12" y="15.5" fontSize="10" fontWeight="bold" fill="#2B579A" textAnchor="middle" fontFamily="Arial, sans-serif">W</text>
      <line x1="9" y1="11" x2="15" y2="11" stroke="#2B579A" strokeWidth="0.5" opacity="0.7"/>
      <line x1="9" y1="12.5" x2="13" y2="12.5" stroke="#2B579A" strokeWidth="0.5" opacity="0.7"/>
      <line x1="9" y1="14" x2="15" y2="14" stroke="#2B579A" strokeWidth="0.5" opacity="0.7"/>
    </svg>
  );

  const MicrosoftPowerPointIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="1" />
          <stop offset="100%" stopColor="#D04423" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx="17" cy="17" r="6" fill="url(#pptGrad)" opacity="0.95"/>
      <rect x="5" y="5" width="11" height="11" rx="2.5" fill="#D04423"/>
      <text x="10.5" y="13" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">P</text>
      <circle cx="17" cy="17" r="5.5" fill="none" stroke="#FF6B35" strokeWidth="0.5" opacity="0.5"/>
    </svg>
  );

  const MicrosoftExcelIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="excelGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#217346" stopOpacity="1" />
          <stop offset="100%" stopColor="#155D34" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="excelGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1FA463" stopOpacity="1" />
          <stop offset="50%" stopColor="#217346" stopOpacity="1" />
          <stop offset="100%" stopColor="#155D34" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="6" y="13" width="12" height="6" rx="0.5" fill="url(#excelGrad2)"/>
      <rect x="6" y="6" width="8" height="8" rx="1" fill="url(#excelGrad1)"/>
      <text x="10" y="12.5" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">X</text>
      <line x1="8" y1="15.5" x2="16" y2="15.5" stroke="#155D34" strokeWidth="0.3" opacity="0.6"/>
      <line x1="8" y1="17" x2="16" y2="17" stroke="#155D34" strokeWidth="0.3" opacity="0.6"/>
    </svg>
  );

  // Get icon for each skill - using my custom icon images
  const getTechIcon = (skillName) => {
    const name = skillName.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
    
    // Using my icon images from public folder
    const iconImageMap = {
      'adobephotoshop': '/images/icons/adobe-photoshop.png',
      'adobeillustrator': '/images/icons/adobe-illustrator.png',
      'html': '/images/icons/html-5.png',
      'css': '/images/icons/css-3.png',
      'javascript': '/images/icons/java-script.png',
      'php': '/images/icons/php.png',
      'mysql': '/images/icons/mysql.png',
      'github': '/images/icons/github.png',
      'figma': '/images/icons/figma.png',
    };
    
    // Check if I have a custom icon image for this skill
    if (iconImageMap[name]) {
      return (
        <Image
          src={iconImageMap[name]}
          alt={skillName}
          width={56}
          height={56}
          className="w-full h-full object-contain"
          unoptimized
        />
      );
    }
    
    // Fallback to custom SVG icons for MS Office and VS Code
    if (name === 'microsoftword') {
      return <MicrosoftWordIcon />;
    }
    if (name === 'microsoftpowerpoint') {
      return <MicrosoftPowerPointIcon />;
    }
    if (name === 'microsoftexcel') {
      return <MicrosoftExcelIcon />;
    }
    if (name === 'vscode' || name === 'visualstudiocode') {
      return <VSCodeIcon />;
    }
    
    // ChatGPT icon handling
    if (name === 'chatgpt') {
      if (SiIcons.SiOpenai) {
        return <SiIcons.SiOpenai className="w-full h-full" style={{ color: '#10A37F', fill: '#10A37F' }} />;
      }
      return <FaIcons.FaRobot className="w-full h-full" style={{ color: '#10A37F', fill: '#10A37F' }} />;
    }
    
    // Brand colors mapping - got these from official brand guidelines
    const brandColors = {
      'canva': '#00C4CC', // Official Canva teal color
      'adobephotoshop': '#001E36', // Official Adobe Photoshop dark blue
      'adobeillustrator': '#FF9A00', // Official Adobe Illustrator orange
      'adobexd': '#FF61F6', // Official Adobe XD magenta/pink
      'figma': '#F24E1E',
      'framer': '#0055FF',
      'html': '#E34F26',
      'css': '#1572B6',
      'javascript': '#F7DF1E',
      'bootstrap': '#7952B3',
      'php': '#777BB4',
      'mysql': '#4479A1',
      'react': '#00D8FF',
      'nextjs': '#000000',
      'next.js': '#000000',
      'typescript': '#3178C6',
      'tailwindcss': '#06B6D4',
      'tailwind css': '#06B6D4',
      'nodejs': '#339933',
      'node.js': '#339933',
      'git': '#F05032',
      'github': '#181717',
      // AI Tools
      'chatgpt': '#10A37F',
      'cursorai': '#000000',
      'cursoriai': '#000000',
      'figmamake': '#F24E1E',
      'googleaistudio': '#4285F4',
      'googlegemini': '#4285F4',
      'microsoftcopilot': '#0078D4',
      'promptperfect': '#8B5CF6',
      'claudeai': '#D97706',
      'githubcopilot': '#000000',
      'midjourney': '#000000',
      'notionai': '#000000',
      'perplexityai': '#00A8FF',
    };
    
    // React-icons mapping for skills that don't have custom images
    const iconMap = {
      'canva': SiIcons.SiCanva,
      'adobeillustrator': SiIcons.SiAdobeillustrator,
      'adobexd': SiIcons.SiAdobexd,
      'figma': SiIcons.SiFigma,
      'framer': SiIcons.SiFramer,
      'html': SiIcons.SiHtml5,
      'css': SiIcons.SiCss3,
      'javascript': SiIcons.SiJavascript,
      'bootstrap': SiIcons.SiBootstrap,
      'php': SiIcons.SiPhp,
      'mysql': SiIcons.SiMysql,
      'react': SiIcons.SiReact,
      'nextjs': SiIcons.SiNextdotjs,
      'next.js': SiIcons.SiNextdotjs,
      'typescript': SiIcons.SiTypescript,
      'tailwindcss': SiIcons.SiTailwindcss,
      'tailwind css': SiIcons.SiTailwindcss,
      'nodejs': SiIcons.SiNodedotjs,
      'node.js': SiIcons.SiNodedotjs,
      'git': SiIcons.SiGit,
      'github': SiIcons.SiGithub,
      // AI Tools - using available icons or generic robot icons
      'cursorai': FaIcons.FaCode,
      'cursoriai': FaIcons.FaCode,
      'figmamake': SiIcons.SiFigma,
      'googleaistudio': SiIcons.SiGoogle,
      'googlegemini': SiIcons.SiGoogle,
      'microsoftcopilot': SiIcons.SiMicrosoft,
      'promptperfect': HiSparkles,
      'claudeai': FaIcons.FaRobot,
      'githubcopilot': SiIcons.SiGithub,
      'midjourney': FaIcons.FaImage,
      'notionai': SiIcons.SiNotion,
      'perplexityai': FaIcons.FaSearch,
    };
    
    const IconComponent = iconMap[name] || null;
    const brandColor = brandColors[name];
    
    if (IconComponent) {
      const iconStyle = {
        width: '100%',
        height: '100%',
      };
      
      // Apply brand colors
      if (brandColor) {
        iconStyle.color = brandColor;
        iconStyle.fill = brandColor;
      }
      
      // Make sure Adobe and Canva icons use their official colors
      let iconClassName = "w-full h-full";
      if (name === 'adobeillustrator') {
        iconStyle.color = '#FF9A00';
        iconStyle.fill = '#FF9A00';
        iconClassName += " adobe-illustrator-icon";
      }
      if (name === 'adobexd') {
        iconStyle.color = '#FF61F6';
        iconStyle.fill = '#FF61F6';
        iconClassName += " adobe-xd-icon";
      }
      if (name === 'canva') {
        iconStyle.color = '#00C4CC';
        iconStyle.fill = '#00C4CC';
        iconClassName += " canva-icon";
      }
      
      return <IconComponent 
        className={iconClassName}
        style={iconStyle}
      />;
    }
    return <FaIcons.FaCode className="w-full h-full" style={{ color: '#3b82f6', width: '100%', height: '100%' }} />;
  };

  return (
    <section id="my-skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header (centered title + thin line) */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-[#e9d5ff] to-white bg-clip-text text-transparent animate-pulse">
                My Skills
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
            </div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          {skillsData.categories && skillsData.categories.length > 0 ? (
          <div className="relative overflow-hidden py-6 md:py-8 lg:py-10">
            {(() => {
              // Filter out skills I don't want to show
              const excludedSkills = ['Git', 'VS Code', 'Next.js', 'Node.js', 'TypeScript', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'];
              const allSkills = skillsData.categories
                .filter(category => !category.name.toLowerCase().includes('ai tools') && !category.name.includes('🤖'))
                .flatMap(category => category.skills)
                .filter(skill => !excludedSkills.includes(skill.name));
              return (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
                  {allSkills.map((skill, skillIndex) => {
                      const brandColors = {
                        'canva': '#00C4CC',
                        'adobephotoshop': '#31A8FF',
                        'adobeillustrator': '#FF9A00',
                        'adobexd': '#FF61F6',
                        'figma': '#F24E1E',
                        'framer': '#0055FF',
                        'html': '#E34F26',
                        'css': '#1572B6',
                        'javascript': '#F7DF1E',
                        'bootstrap': '#7952B3',
                        'php': '#777BB4',
                        'mysql': '#4479A1',
                        'react': '#61DAFB',
                        'nextjs': '#000000',
                        'next.js': '#000000',
                        'typescript': '#3178C6',
                        'tailwindcss': '#06B6D4',
                        'tailwind css': '#06B6D4',
                        'nodejs': '#339933',
                        'node.js': '#339933',
                        'git': '#F05032',
                        'github': '#181717',
                        'vscode': '#007ACC',
                        'visualstudiocode': '#007ACC',
                        'chatgpt': '#10A37F',
                        'cursorai': '#000000',
                        'figmamake': '#F24E1E',
                        'googleaistudio': '#4285F4',
                        'googlegemini': '#4285F4',
                        'microsoftcopilot': '#0078D4',
                        'promptperfect': '#8B5CF6',
                        'claudeai': '#D97706',
                        'githubcopilot': '#000000',
                        'midjourney': '#000000',
                        'notionai': '#000000',
                        'perplexityai': '#00A8FF',
                        'microsoftword': '#2B579A',
                        'microsoftpowerpoint': '#D04423',
                        'microsoftexcel': '#217346',
                      };
                      
                      const skillKey = skill.name.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
                      const brandColor = brandColors[skillKey] || '#6366f1';
                      
                      return (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                          transition={{ 
                            delay: skillIndex * 0.03,
                            duration: 0.4 
                          }}
                          className="flex flex-col items-center justify-center group cursor-pointer w-full"
                        >
                          {/* Logo Container - Circular */}
                          <motion.div
                            className="flex items-center justify-center mb-2 sm:mb-3 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 transition-all duration-300 group-hover:bg-white/10 dark:group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 skill-icon-container"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="flex items-center justify-center skill-icon-inner">
                              {getTechIcon(skill.name)}
                            </div>
                          </motion.div>
                          
                          {/* Skill Name */}
                          <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-300 dark:text-gray-300 text-center group-hover:text-white transition-colors duration-300 px-1 leading-tight">
                            {skill.name}
                          </h4>
                        </motion.div>
                      );
                    })}
                </div>
              );
            })()}
          </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-secondary-600 dark:text-secondary-300">No skills data available</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
