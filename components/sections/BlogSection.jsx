import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  };

  const recentPosts = [
    {
      slug: 'building-my-portfolio-website',
      frontMatter: {
        title: 'Building My Portfolio Website: A Journey of Self-Expression Through Code',
        excerpt: 'Why did I build this portfolio? To showcase my skills and connect with opportunities. How did I build it? Using Next.js, React, Tailwind CSS, and Framer Motion for smooth animations. Discover the tech stack, the development process, and what I learned from bringing this project to life.',
        date: '2025-11-06',
        category: 'Portfolio',
        readTime: '6 min read'
      }
    }
  ];

  return (
    <section id="blog" ref={ref} className="section-padding relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-dashed border-primary-400 opacity-30"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-primary-400 opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 border border-primary-400 opacity-30"></div>
      <div className="absolute bottom-40 right-10 w-1 h-1 bg-primary-400 opacity-50"></div>
      
      <div className="container-custom">
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
                Blogs
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] animate-pulse"></div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
            </div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-8">
              Sharing my thoughts, tutorials, and insights about web development and modern technologies.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center"
          >
            {recentPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl cursor-pointer md:bg-white md:dark:bg-secondary-800 md:border md:border-secondary-300 md:dark:border-secondary-700 md:shadow-lg md:hover:shadow-xl"
                >
                  {/* Mobile: Enhanced Glassmorphism Design */}
                  <div className="md:hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    
                    {/* Post Image with Enhanced Design */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                      <Image
                        src="/images/blog/portfolio.png"
                        alt={post.frontMatter.title}
                        width={600}
                        height={256}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Category Badge with Glow */}
                      <div className="absolute top-5 left-5 z-20">
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg shadow-primary-500/50 backdrop-blur-sm border border-white/30"
                        >
                          {post.frontMatter.category}
                        </motion.span>
                      </div>
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-full"></div>
                    </div>

                    {/* Post Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Meta Information */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center flex-wrap gap-4 text-xs text-gray-300"
                      >
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <Calendar className="w-3.5 h-3.5 text-primary-400" />
                          <span>{new Date(post.frontMatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <Clock className="w-3.5 h-3.5 text-purple-400" />
                          <span>{post.frontMatter.readTime}</span>
                        </div>
                      </motion.div>

                      {/* Title with Gradient */}
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight"
                      >
                        {post.frontMatter.title}
                      </motion.h3>

                      {/* Excerpt */}
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-gray-300 leading-relaxed line-clamp-3"
                      >
                        {post.frontMatter.excerpt}
                      </motion.p>

                      {/* Read More Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 hover:from-primary-500/30 hover:via-purple-500/30 hover:to-pink-500/30 backdrop-blur-md text-white rounded-xl text-sm font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 group-hover:scale-105"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-3xl opacity-50"></div>
                  </div>

                  {/* Desktop: Original Design */}
                  <div className="hidden md:block">
                    {/* Post Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src="/images/blog/portfolio.png"
                        alt={post.frontMatter.title}
                        width={600}
                        height={192}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                          {post.frontMatter.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-secondary-500 dark:text-secondary-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.frontMatter.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.frontMatter.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-secondary-800 dark:text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {post.frontMatter.title}
                      </h3>

                      <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3">
                        {post.frontMatter.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="inline-flex items-center space-x-2 text-primary-400 group-hover:text-primary-300 font-medium transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
