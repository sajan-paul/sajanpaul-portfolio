import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Projects data matching ProjectCarousel
const allProjects = [
  {
    id: "my-portfolio",
    title: "My Portfolio",
    category: "Web development",
    description: "This portfolio website itself! Built to showcase my skills, projects, and passion for web development. This comprehensive portfolio features a fully responsive design that works seamlessly across all devices, a beautiful dark mode theme, smooth animated sections using Framer Motion, an interactive 3D projects carousel, a dynamic blog section, and a fully functional contact form with email integration. The site is optimized for performance with Next.js server-side rendering, lazy loading, and image optimization. It demonstrates modern web development practices including component-based architecture, state management, and responsive design principles.",
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
];

const groupBy = (items, key) => {
  return items.reduce((acc, item) => {
    const k = item[key] || 'Uncategorized';
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
};

// Define category order
const categoryOrder = ["Mobile App", "Web development", "Robotics"];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const groups = groupBy(allProjects, 'category');
  
  // Get all unique categories
  const allCategories = ["All", ...categoryOrder.filter(cat => groups[cat] && groups[cat].length > 0)];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);
  
  // Group filtered projects
  const filteredGroups = groupBy(filteredProjects, 'category');
  
  // Sort categories according to defined order
  const sortedCategories = categoryOrder.filter(cat => filteredGroups[cat] && filteredGroups[cat].length > 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="inline-block bg-gradient-to-r from-white via-[#e9d5ff] to-white bg-clip-text text-transparent">
                All Projects
              </span>
          </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-4">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-2 text-base font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-orange-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Show all projects in a single grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
              {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-primary-400/40 transition-all duration-300 cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-48 bg-black/20 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-md border border-white/15 text-gray-200 bg-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-md border border-white/15 text-gray-200 bg-white/5">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Features Preview */}
                      <div className="space-y-1 mb-4">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-white/20 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project Image */}
              <div className="relative w-full h-64 md:h-80 bg-black/40 overflow-hidden">
                <Image
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  width={800}
                  height={320}
                  className="w-full h-full object-contain p-8"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-lg border border-white/20 text-gray-200 bg-white/10 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link */}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectsPage;
