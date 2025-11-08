import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const carouselContainerRef = useRef(null);
  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [projects, setProjects] = useState([
    {
      id: "my-portfolio",
      title: "My Portfolio",
      category: "Web development",
      description: "This portfolio website itself! Built to showcase my skills, projects, and passion for web development. This comprehensive portfolio features a fully responsive design that works seamlessly across all devices, a beautiful dark mode theme, smooth animated sections using Framer Motion, an interactive 3D projects carousel, a dynamic blog section, and a fully functional contact form with email integration. The site is optimized for performance with Next.js server-side rendering, lazy loading, and image optimization. It demonstrates modern web development practices including component-based architecture, state management, and responsive design principles.",
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
      bgGradient: "from-purple-600/10 to-indigo-600/5",
      githubUrl: "https://github.com/sajan-paul/sajanpaul-portfolio"
    },
    {
      id: "todolist",
      title: "Todolist",
      category: "Mobile App",
      description: "An academic project - A comprehensive task management application developed in Java for Android devices. This application helps users organize their daily activities and boost productivity through an intuitive interface. The app features persistent data storage using SQLite database, allowing users to save their tasks even after closing the application. Users can easily add new tasks, edit existing ones, mark tasks as complete, and delete tasks they no longer need. The application includes task filtering capabilities and organization features that help users manage their to-do lists efficiently. The clean and user-friendly interface makes it easy for users to navigate and manage their tasks effectively.",
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
      description: "An academic project - A fully functional calculator application built with Java for Android platform. This calculator provides all standard arithmetic operations including addition, subtraction, multiplication, and division. The application features robust error handling to prevent crashes when users perform invalid operations, such as dividing by zero. The clean and modern interface is designed with user experience in mind, featuring large, easy-to-tap buttons and a clear display screen. The calculator includes clear and reset functionality, allowing users to start fresh calculations easily. It also supports keyboard input for faster data entry and features a responsive design that adapts to different screen sizes.",
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
      description: "An academic project - A comprehensive weather application developed in Java for Android that provides real-time weather information and forecasts for locations worldwide. The app integrates with weather APIs to fetch current weather conditions, including temperature, humidity, wind speed, and atmospheric pressure. Users can search for weather information by city name, and the app displays beautiful visualizations with weather icons and detailed descriptions. The application features location-based services to automatically detect and show weather for the user's current location. The interface is designed with beautiful graphics and smooth animations to enhance user experience while providing accurate and up-to-date weather information.",
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
      description: "An internship project - A comprehensive web-based office management system developed during my internship to streamline office operations and improve organizational efficiency. This full-stack application was built using PHP for server-side logic, MySQL for database management, and modern web technologies including JavaScript, HTML, and CSS for the frontend. The system provides complete employee management capabilities, allowing administrators to add, update, and manage employee records, track attendance, and organize employees by departments. It features secure user authentication and authorization, ensuring that only authorized personnel can access sensitive information. The system includes a comprehensive dashboard with reporting features, data analytics, and real-time updates. All data is securely stored and retrieved from a MySQL database, ensuring data integrity and reliability. This project provided valuable experience in full-stack development, database design, and real-world application development.",
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
      description: "An academic project - Designed an autonomous maze-solving robot using Arduino Uno that navigates using sensor feedback. The robot uses IR or ultrasonic sensors for autonomous navigation, following walls or lines to detect the path. The system implements left-hand or right-hand algorithm for efficient maze solving. The Arduino Uno processes sensor data to decide path direction, avoiding obstacles and retracing routes to find the maze's exit. The robot uses a motor driver for differential drive control, enabling precise movement and turning. The project was programmed in C++ using Arduino IDE, including logic for pathfinding (wall-following), motor control, and sensor input handling. This autonomous navigation system demonstrates skills in robotics, sensor integration, algorithm implementation, and embedded systems programming, providing hands-on experience with real-world problem-solving in robotics.",
      shortDescription: "Autonomous maze-solving robot",
      technologies: ["Arduino Uno", "C/C++", "IR Sensors", "Ultrasonic Sensors", "Motor Driver", "Algorithms"],
      features: [
        "Autonomous navigation using IR/ultrasonic sensors",
        "Wall-following and line-following algorithms",
        "Left-hand or right-hand pathfinding algorithm",
        "Differential drive motor control",
        "Obstacle detection and avoidance",
        "Route retracing capabilities"
      ],
      thumbnail: "/images/projects/maze robot.png",
      color: "from-red-500 to-rose-500",
      bgGradient: "from-red-500/10 to-rose-500/5"
    },
    {
      id: "pick-place-robot",
      title: "Pick and Place Robot",
      category: "Robotics",
      description: "An academic project - Developed a 4-DOF (Degree of Freedom) robotic arm using Arduino Uno capable of picking and placing small objects with precision. The robotic arm consists of multiple servo joints controlled via Arduino Uno, which interprets joystick inputs or preprogrammed commands to execute smooth, coordinated movements. The system features a gripper mechanism for object handling and uses the Servo library for PWM-based position control and analog input mapping. The robot can be controlled by joystick or programmed sequence, allowing both manual operation and automated tasks. This project demonstrates skills in robotics, mechatronics, servo motor control, and precision motion control. We achieved great success with this project, becoming Champions in the 'Pick & Place Robo Race Competition' of TECH FEST AUTUMN 2022 hosted by the CSE Department, Independent University, Bangladesh. The project was programmed in C++ using Arduino IDE, showcasing expertise in embedded systems, control algorithms, and robotic arm kinematics.",
      shortDescription: "Precision object manipulation robot",
      technologies: ["Arduino Uno", "C/C++", "Servo Motors", "4-DOF Robotic Arm", "Gripper Mechanism"],
      features: [
        "4-DOF robotic arm with servo motors",
        "Joystick and programmed sequence control",
        "Gripper mechanism for object handling",
        "PWM-based precise motion control",
        "Smooth coordinated movements",
        "Champions in TECH FEST AUTUMN 2022 Competition"
      ],
      thumbnail: "/images/projects/pick and place.png",
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/5"
    },
    {
      id: "rc-car",
      title: "RC Car",
      category: "Robotics",
      description: "An academic project - Built a Bluetooth-controlled RC car using Arduino Uno and motor driver IC (L293D). The system receives user commands via an Android app through the HC-05 Bluetooth module, translating them into motor movements for forward, backward, left, and right motion. The car can be controlled via Bluetooth or RF module, providing flexible control options. The L293D motor driver enables bidirectional motor control, allowing precise movement in all directions. The system is powered by 9V or Li-ion battery pack, ensuring portability and independence from wired power sources. Real-time control is achieved through a smartphone app or joystick interface, making it an intuitive and user-friendly remote control system. The project was programmed in C++ using Arduino IDE, handling serial communication, motor direction control, and input decoding. This project provided comprehensive experience in embedded systems, motor control, wireless communication protocols, circuit design, and mobile app integration.",
      shortDescription: "Wireless remote-controlled vehicle",
      technologies: ["Arduino Uno", "C/C++", "L293D Motor Driver", "HC-05 Bluetooth Module", "RF Module", "Electronics"],
      features: [
        "Bluetooth and RF wireless control",
        "Bidirectional motor control via L293D",
        "Android smartphone app integration",
        "Real-time command processing",
        "Battery-powered operation (9V/Li-ion)",
        "Forward, backward, left, and right movement"
      ],
      thumbnail: "/images/projects/rc car.png",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/5"
    }
  ]);

  // Get 5 visible cards around the current index
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      // Wrap around if out of bounds
      if (index < 0) {
        index = projects.length + index;
      } else if (index >= projects.length) {
        index = index - projects.length;
      }
      visible.push({
        project: projects[index],
        position: i + 2, // position 0-4
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

  // Mobile swipe handlers - improved for one-by-one swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(0); // Reset touchEnd
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30; // Reduced threshold for easier swiping
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - next card
        nextSlide();
      } else {
        // Swipe right - previous card
        prevSlide();
      }
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
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
                style={{ touchAction: 'pan-x' }}
              >
                <div 
                  className="flex transition-transform duration-300 ease-out"
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
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              width={400}
                              height={288}
                              className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
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
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={300}
                      height={200}
                      loading="lazy"
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
            <div className="flex items-center justify-center gap-4 md:gap-8 mt-8 md:mt-0" style={{ marginTop: '0px' }}>
              {/* Desktop: Left button - Matching View All Projects Button Style */}
              <button
                onClick={prevSlide}
                className="hidden md:flex group relative rounded-full items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
                style={{
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '50px',
                  background: 'rgba(124,58,237,0.18)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)',
                  transition: '0.5s',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px 0 rgba(124,58,237,0.35), 0 0 1em 0 rgba(124,58,237,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)';
                }}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 relative z-10 transition-transform duration-300" style={{ color: '#E9D5FF' }} />
              </button>

              {/* View All Projects Button - Matching View Projects Button Style */}
              <Link
                href="/projects"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '50px',
                  padding: '0.5em 1.1em 0.5em 1.2em',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 300,
                  fontSize: '1.2em',
                  color: '#E9D5FF',
                  background: 'rgba(124,58,237,0.18)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)',
                  transition: '0.5s',
                  height: '50px',
                  lineHeight: 1,
                  gap: '0.4em',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px 0 rgba(124,58,237,0.35), 0 0 1em 0 rgba(124,58,237,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)';
                }}
              >
                <span style={{ marginRight: '0.3em' }}>View All Projects</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 66 43"
                  style={{
                    width: '18px',
                    height: '18px',
                    minWidth: '18px',
                    minHeight: '18px',
                    maxWidth: '18px',
                    maxHeight: '18px',
                    flexShrink: 0,
                    display: 'block',
                    marginRight: 0,
                    position: 'relative',
                    fill: 'currentColor',
                  }}
                  width="18"
                  height="18"
                >
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>

              {/* Desktop: Right button - Matching View All Projects Button Style */}
              <button
                onClick={nextSlide}
                className="hidden md:flex group relative rounded-full items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
                style={{
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: '50px',
                  background: 'rgba(124,58,237,0.18)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)',
                  transition: '0.5s',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px 0 rgba(124,58,237,0.35), 0 0 1em 0 rgba(124,58,237,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px 0 rgba(124,58,237,0.25), 0 0 0.2em 0 rgba(124,58,237,0.18)';
                }}
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 relative z-10 transition-transform duration-300" style={{ color: '#E9D5FF' }} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCarousel;
