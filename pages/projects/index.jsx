import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

// Projects data matching ProjectCarousel
const allProjects = [
  {
    id: "my-portfolio",
    title: "My Portfolio",
    category: "Web development",
    description: "This portfolio website itself! Built to showcase my skills, projects, and passion for web development. Features responsive design, dark mode, animated sections, and a 3D projects carousel.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-primary-400/40 transition-all duration-300"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-48 bg-black/20 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
    </Layout>
  );
};

export default ProjectsPage;
