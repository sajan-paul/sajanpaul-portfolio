import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import Link from 'next/link';

const ProjectCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const carouselContainerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [projects, setProjects] = useState([
    {
      id: "my-portfolio",
      title: "My Portfolio",
      category: "Web development",
      description: "This portfolio website itself! Built to showcase my skills, projects, and passion for web development. Features responsive design, dark mode, animated sections, and a 3D projects carousel.",
      shortDescription: "The very website you're browsing, built with modern web tech.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Owl Carousel"],
      features: [
        "Responsive & Dark Mode",
        "Smooth Section Animations",
        "3D Projects Carousel",
        "Interactive Blog Page",
        "Contact Form Integration"
      ],
      thumbnail: "/images/projects/potfolio2.png",
      color: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-600/10 to-indigo-600/5"
    },
    {
      id: "todolist",
      title: "Todolist",
      category: "Mobile App",
      description: "A comprehensive task management application for organizing your daily activities and boosting productivity with persistent data storage.",
      shortDescription: "Manage tasks with persistent storage",
      technologies: ["Java"],
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete",
        "Persistent data storage",
        "Clean and intuitive interface",
        "Task filtering and organization"
      ],
      thumbnail: "/images/projects/todolist.png",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/5",
      githubUrl: "https://github.com/sajan-paul/TodoList"
    },
    {
      id: "basic-calculator",
      title: "Basic Calculator",
      category: "Mobile App",
      description: "A fully functional calculator application with standard arithmetic operations, error handling, and a clean modern interface.",
      shortDescription: "Modern calculator with all operations",
      technologies: ["Java"],
      features: [
        "Basic arithmetic operations (+, -, ×, ÷)",
        "Clear and reset functionality",
        "Error handling",
        "Responsive design",
        "Keyboard support"
      ],
      thumbnail: "/images/projects/calculator.png",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/5",
      githubUrl: "https://github.com/sajan-paul/Basic-Calculator"
    },
    {
      id: "weather-app",
      title: "Weather App - Abahaoya",
      category: "Mobile App",
      description: "A weather application that provides real-time weather information and forecasts for different locations with beautiful visualizations.",
      shortDescription: "Real-time weather forecasts",
      technologies: ["Java"],
      features: [
        "Real-time weather data",
        "Location-based weather information",
        "Temperature, humidity, and wind speed",
        "Weather icons and descriptions",
        "Search by city name"
      ],
      thumbnail: "/images/projects/weather.png",
      color: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/10 to-amber-500/5",
      githubUrl: "https://github.com/sajan-paul/Weather-App-Abahaoya-"
    },
    {
      id: "office-management",
      title: "Office Management System",
      category: "Web development",
      description: "A comprehensive office management system for managing employees, departments, and daily operations with database integration.",
      shortDescription: "Complete office management solution",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
      features: [
        "Employee management",
        "Department organization",
        "Data storage and retrieval",
        "User authentication",
        "Dashboard and reporting",
        "Database integration"
      ],
      thumbnail: "/images/projects/oms.png",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/5",
      githubUrl: "https://github.com/sajan-paul/Office-Management-System-OMS-"
    },
    {
      id: "maze-solver-robot",
      title: "Maze Solver Robot",
      category: "Robotics",
      description: "An intelligent robot that can navigate and solve mazes using advanced pathfinding algorithms and sensor-based navigation.",
      shortDescription: "Autonomous maze-solving robot",
      technologies: ["Arduino", "C/C++", "Algorithms", "Sensors"],
      features: [
        "Pathfinding algorithms (A*, Dijkstra)",
        "Sensor-based navigation",
        "Maze mapping and solving",
        "Autonomous movement",
        "Obstacle detection and avoidance"
      ],
      thumbnail: "/images/projects/maze robot.png",
      color: "from-red-500 to-rose-500",
      bgGradient: "from-red-500/10 to-rose-500/5"
    },
    {
      id: "pick-place-robot",
      title: "Pick and Place Robot",
      category: "Robotics",
      description: "An automated robotic system designed for picking and placing objects with precision and efficiency for industrial applications.",
      shortDescription: "Precision object manipulation robot",
      technologies: ["Robotics", "Arduino", "C/C++", "Servo Motors"],
      features: [
        "Precise object manipulation",
        "Automated pick and place operations",
        "Programmable movement patterns",
        "Multi-axis control",
        "Industrial automation capabilities"
      ],
      thumbnail: "/images/projects/pick and place.png",
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/5"
    },
    {
      id: "rc-car",
      title: "RC Car",
      category: "Robotics",
      description: "A remote-controlled car project with wireless control, responsive steering, and real-time communication capabilities.",
      shortDescription: "Wireless remote-controlled vehicle",
      technologies: ["Arduino", "C/C++", "Wireless Communication", "Electronics"],
      features: [
        "Wireless remote control",
        "Forward, backward, and steering control",
        "Real-time communication",
        "Battery-powered operation",
        "Customizable speed control"
      ],
      thumbnail: "/images/projects/rc car.png",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/5"
    }
  ]);

  // Get visible projects (5 cards around current index)
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      // Handle wrapping
      if (index < 0) {
        index = projects.length + index;
      } else if (index >= projects.length) {
        index = index - projects.length;
      }
      visible.push({
        project: projects[index],
        position: i + 2, // 0-4 for data-pos
        actualIndex: index
      });
    }
    return visible;
  };


  const visibleProjects = getVisibleProjects();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-rotate carousel (only on desktop)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Don't auto-rotate on mobile
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <>
      <section 
        id="my-projects" 
        ref={ref} 
        className="section-padding relative"
        style={{ overflowX: 'hidden', overflowY: 'visible' }}
      >
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-[#e9d5ff] to-white bg-clip-text text-transparent animate-pulse">
                  My Project
                </span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
              </div>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-8">
                A curated collection of my work spanning web development, robotics, and automation
              </p>
            </motion.div>

            {/* Mobile-friendly Carousel */}
            {/* Mobile View - Enhanced Attractive Design */}
            <div className="md:hidden relative w-full">
              <div 
                className="relative overflow-hidden rounded-3xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="min-w-full px-3"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ 
                          opacity: index === currentIndex ? 1 : 0.7,
                          y: index === currentIndex ? 0 : 10,
                          scale: index === currentIndex ? 1 : 0.95
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative group"
                      >
                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl">
                          {/* Animated Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                          
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                          
                          {/* Image Container with Gradient Overlay */}
                          <div className="relative h-72 bg-gradient-to-br from-black/20 via-black/10 to-transparent overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                            />
                            
                            {/* Category Badge with Glow */}
                            <div className="absolute top-5 right-5 z-20">
                              <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="px-4 py-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg shadow-primary-500/50 backdrop-blur-sm border border-white/30"
                              >
                                {project.category}
                              </motion.span>
                            </div>
                            
                            {/* Project Number Indicator */}
                            <div className="absolute top-5 left-5 z-20">
                              <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{index + 1}/{projects.length}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Section */}
                          <div className="relative p-6 space-y-4">
                            {/* Title with Gradient */}
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
                            >
                              {project.title}
                            </motion.h3>
                            
                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-sm text-gray-300 leading-relaxed line-clamp-2"
                            >
                              {project.shortDescription}
                            </motion.p>
                            
                            {/* Technologies Tags */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex flex-wrap gap-2"
                            >
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </motion.div>
                            
                            {/* GitHub Button with Enhanced Design */}
                            {project.githubUrl && (
                              <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 hover:from-primary-500/30 hover:via-purple-500/30 hover:to-pink-500/30 backdrop-blur-md text-white rounded-xl text-sm font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
                              >
                                <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                                <span>View on GitHub</span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </motion.a>
                            )}
                          </div>
                          
                          {/* Decorative Corner Elements */}
                          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-br-3xl opacity-50"></div>
                          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-3xl opacity-50"></div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Mobile Indicators */}
              <div className="flex justify-center items-center gap-3 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-10 h-3' 
                        : 'w-3 h-3'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 shadow-lg shadow-primary-400/50' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}></div>
                    {index === currentIndex && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Swipe Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="flex items-center justify-center gap-2 mt-4 text-white/50 text-xs"
              >
                <span className="flex gap-1">
                  <span>←</span>
                  <span>Swipe</span>
                  <span>→</span>
                </span>
              </motion.div>
            </div>

            {/* Desktop View - Vue-style Carousel */}
            <div 
              className="hidden md:flex relative items-center justify-center min-h-[800px] w-full select-none"
              ref={carouselContainerRef}
              style={{
                marginTop: '-120px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
            >
              <ul className="gallery">
                {visibleProjects.map(({ project, position, actualIndex }) => (
                  <li
                    key={`${project.id}-${position}`}
                    data-pos={position}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredCardIndex(actualIndex)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    style={{
                      transition: 'transform 0.3s ease-out',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <div className="card-content">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                    {/* GitHub Icon on Hover */}
                    {hoveredCardIndex === actualIndex && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20 transition-all duration-300 hover:bg-black/50"
                        onClick={(e) => e.stopPropagation()}
                        title="View on GitHub"
                      >
                        <div className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                          <Github className="w-8 h-8" />
                        </div>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-0" style={{ marginTop: '0px' }}>
              {/* Mobile: Smaller buttons */}
              <button
                onClick={prevSlide}
                className="md:hidden group w-12 h-12 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/30 active:border-white/50 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Desktop: Original buttons */}
              <button
                onClick={prevSlide}
                className="hidden md:flex group w-14 h-14 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/30 hover:border-white/50 text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-300" />
              </button>

              {/* View All Projects Button */}
              <Link
                href="/projects"
                className="group px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 md:gap-2.5 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 text-sm md:text-base"
              >
                <span className="group-hover:translate-x-[-2px] transition-transform duration-300">View All Projects</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Mobile: Smaller buttons */}
              <button
                onClick={nextSlide}
                className="md:hidden group w-12 h-12 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/30 active:border-white/50 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Desktop: Original buttons */}
              <button
                onClick={nextSlide}
                className="hidden md:flex group w-14 h-14 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/30 hover:border-white/50 text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-[2px] transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCarousel;
