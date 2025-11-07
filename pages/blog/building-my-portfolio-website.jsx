import { Layout } from '../../components/layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Code, Palette, Rocket, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <Layout>
      <article className="section-padding relative min-h-screen">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#blog"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full inline-block">
                Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-secondary-800 dark:text-white">
              Building My Portfolio Website: A Journey of Self-Expression Through Code
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-secondary-500 dark:text-secondary-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 6, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 hover:border-primary-400/40 transition-all p-8 md:p-12 space-y-8">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Every developer reaches a point where they want to create something that truly represents who they are and what they can do. For me, that moment came when I decided to build my own portfolio website. This isn't just another project—it's a reflection of my journey, my skills, and my passion for creating meaningful digital experiences.
                </p>
              </section>

              {/* Why I Made It */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-primary-400" />
                  <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">Why I Made It</h2>
                </div>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  The motivation behind building this portfolio was multi-faceted. First and foremost, I wanted a professional space to showcase my work, skills, and projects in a way that truly represents who I am as a developer. In today's competitive job market, having a well-crafted portfolio is essential—it's often the first impression potential employers or clients get of you.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Beyond professional reasons, I wanted to create something that demonstrated my ability to think through design problems, implement modern web technologies, and build a complete, polished product from start to finish. This portfolio serves as a living testament to my skills in web development, UI/UX design, and attention to detail.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Perhaps most importantly, I wanted to build something that I could be proud of—a project that combines creativity with functionality, where every interaction feels intentional and every design choice serves a purpose. This portfolio is more than just a collection of projects; it's a narrative of my growth as a developer.
                </p>
              </section>

              {/* How I Made It */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-6 h-6 text-primary-400" />
                  <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">How I Made It</h2>
                </div>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  The development process started with careful planning. I began by sketching out the user experience and mapping out the different sections I wanted to include: a hero section, about me, services, projects showcase, skills, blog, and contact form. Each section needed to tell a part of my story while maintaining visual consistency.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  I adopted a component-based architecture, breaking down the portfolio into reusable, modular components. This approach not only made the code more maintainable but also allowed me to iterate quickly on different sections. Each component was designed to be self-contained yet work harmoniously with the overall design system.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  The development workflow involved creating custom animations to enhance user engagement, implementing a dark mode toggle for better user experience, and ensuring full responsiveness across all device sizes. I paid special attention to performance optimization, ensuring fast load times and smooth interactions throughout the site.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  The design process was iterative—I started with a basic layout, refined the color scheme to match my brand identity, and continuously improved the user interface based on best practices in modern web design. The result is a portfolio that feels both professional and personal, technical yet approachable.
                </p>
              </section>

              {/* Technologies Used */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="w-6 h-6 text-primary-400" />
                  <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">Technologies & Languages Used</h2>
                </div>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  This portfolio is built using a modern, cutting-edge tech stack that allows for both performance and developer experience:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-secondary-800 dark:text-white">Core Framework</h3>
                    <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                      <li>• <strong>Next.js</strong> - React framework for production</li>
                      <li>• <strong>React</strong> - JavaScript library for UI</li>
                      <li>• <strong>JavaScript (JSX)</strong> - For component logic</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-800/30 dark:to-secondary-700/30 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-secondary-800 dark:text-white">Styling & Design</h3>
                    <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                      <li>• <strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
                      <li>• <strong>Custom CSS</strong> - For global styles</li>
                      <li>• <strong>Responsive Design</strong> - Mobile-first approach</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-secondary-800 dark:text-white">Animations & Interactions</h3>
                    <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                      <li>• <strong>Framer Motion</strong> - Smooth animations</li>
                      <li>• <strong>Custom Cursor</strong> - Enhanced UX</li>
                      <li>• <strong>Scroll Animations</strong> - Intersection Observer</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-secondary-800 dark:text-white">Additional Tools</h3>
                    <ul className="space-y-2 text-secondary-700 dark:text-secondary-300">
                      <li>• <strong>Lucide React</strong> - Icon library</li>
                      <li>• <strong>EmailJS</strong> - Contact form handling</li>
                      <li>• <strong>JSON</strong> - Data management</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  The choice of these technologies wasn't arbitrary—each one was selected for a specific purpose. Next.js provides server-side rendering and excellent performance out of the box. Tailwind CSS enables rapid UI development with a consistent design system. Framer Motion brings the site to life with smooth, professional animations that enhance rather than distract from the content.
                </p>
              </section>

              {/* What We Get From It */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Rocket className="w-6 h-6 text-primary-400" />
                  <h2 className="text-3xl font-bold text-secondary-800 dark:text-white">What We Get From It</h2>
                </div>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Building this portfolio has been an incredibly rewarding experience that has provided numerous benefits:
                </p>
                
                <div className="space-y-4 my-6">
                  <div className="border-l-4 border-primary-400 pl-6">
                    <h3 className="font-bold text-xl mb-2 text-secondary-800 dark:text-white">Professional Credibility</h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      A polished portfolio immediately establishes credibility with potential employers and clients. It demonstrates that I can not only write code but also think about user experience, design, and the complete picture of a web application.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent-400 pl-6">
                    <h3 className="font-bold text-xl mb-2 text-secondary-800 dark:text-white">Practical Learning Experience</h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      This project served as a comprehensive learning opportunity. I deepened my understanding of React patterns, Next.js routing, CSS architecture, and animation libraries. Every challenge encountered was a lesson in problem-solving.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="font-bold text-xl mb-2 text-secondary-800 dark:text-white">Showcase of Skills</h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      The portfolio itself is a demonstration of my abilities. Visitors can see my attention to detail, my understanding of modern web technologies, and my ability to create engaging user experiences—all without me having to say a word.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="font-bold text-xl mb-2 text-secondary-800 dark:text-white">Personal Brand</h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      This website represents my personal brand. It's a space where I can express my design philosophy, showcase my personality, and connect with others in the developer community. It's my digital identity.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="font-bold text-xl mb-2 text-secondary-800 dark:text-white">Continuous Improvement</h3>
                    <p className="text-secondary-700 dark:text-secondary-300">
                      A portfolio is never truly "done." It's a living project that evolves as I learn new technologies, complete new projects, and refine my skills. This constant iteration keeps me engaged and continuously improving.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="space-y-4 mt-12 pt-8 border-t border-secondary-300 dark:border-secondary-700">
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  Building this portfolio has been more than just a coding project—it's been a journey of self-discovery, skill development, and creative expression. Every line of code, every design decision, and every animation has been crafted with intention and care.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  If you're a developer considering building your own portfolio, I highly recommend it. Not only will it serve as a professional asset, but it will also be one of the most educational and personally rewarding projects you'll ever create. It's your story, told through code, and there's something incredibly powerful about that.
                </p>
                
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed font-medium">
                  Thank you for taking the time to explore my portfolio. I hope it gives you insight into who I am as a developer and what I'm capable of creating. If you'd like to connect or discuss any of the projects featured here, feel free to reach out through the contact form.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
}

