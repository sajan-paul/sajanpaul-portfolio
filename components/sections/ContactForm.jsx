import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import bioData from '../../data/bio.json';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit to Formspree without page redirect
  const handleFormspreeSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const formEl = e.currentTarget;
      const data = new FormData(formEl);
      const res = await fetch('https://formspree.io/f/mnnokjjq', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
      setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        formEl.reset();
        setTimeout(() => setSubmitStatus(null), 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-[600px] border-t border-gray-300 dark:border-gray-700">
      {/* Split Section - Text Content and Form */}
      <div className="pb-12">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-8 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto mt-12 md:mt-16 lg:mt-36">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 relative overflow-hidden flex flex-col min-h-[300px] lg:min-h-[520px] rounded-xl lg:rounded-l-xl justify-center px-6 md:px-8 lg:px-12 py-8 lg:py-0">
        <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
        >
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="inline-block bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(59,130,246,0.3)] animate-pulse">
                  Let's Connect
                </span>
                <span className="inline-block bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent ml-3">
                  — Turn Ideas Into Reality
                </span>
              </h2>
              {/* Decorative line under headline */}
              <div className="flex items-center justify-start gap-4 mb-6 mt-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-400 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse"></div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-cyan-400"></div>
              </div>
              
              {/* Subtext */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about creating meaningful digital experiences. Reach out — and let's start crafting your next big thing.
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 dark:text-cyan-400 mt-1">•</span>
                  <span className="text-base text-gray-700 dark:text-gray-300">Bring your ideas and imagination to life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 dark:text-purple-400 mt-1">•</span>
                  <span className="text-base text-gray-700 dark:text-gray-300">Collaborate on freelance or team projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 dark:text-pink-400 mt-1">•</span>
                  <span className="text-base text-gray-700 dark:text-gray-300">Let's make your next big project stand out</span>
                </li>
              </ul>
              
              {/* Optional Closing Line */}
              <p className="text-base text-gray-600 dark:text-gray-400 italic">
                Every great project starts with a simple message — yours could be next!
            </p>
          </motion.div>
              </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/2 flex flex-col min-h-[520px] relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex flex-col w-full relative z-10 h-full"
            >
              {/* Form Container */}
              <div className="relative rounded-2xl p-6 lg:p-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 h-full flex flex-col overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]">
                {/* Gradient ring border */}
                <div className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-pink-400/40 opacity-40"></div>
                {/* Corner glow accents */}
                <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>
                <div className="pointer-events-none absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/10 blur-3xl rounded-full"></div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,black_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)]" style={{
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Gradient Orbs */}
                <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
                
                {/* Shimmer Effect */}
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -skew-x-12"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear"
                  }}
                />

              {/* Form - Formspree (AJAX, no redirect) */}
              <form onSubmit={handleFormspreeSubmit} className="flex-1 flex flex-col relative z-10">
                <div className="space-y-4 flex-1">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative group">
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">Name <span className="text-pink-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                        className="w-full px-4 py-3.5 text-sm rounded-lg bg-white dark:bg-gray-900/85 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500/60 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-all duration-300 shadow-sm"
                        placeholder="Full name"
                    />
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-focus-within:from-cyan-500/10 group-focus-within:via-purple-500/10 group-focus-within:to-pink-500/10 blur-xl transition-all duration-300 -z-10"></div>
                  </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative group">
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">Email <span className="text-pink-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                        className="w-full px-4 py-3.5 text-sm rounded-lg bg-white dark:bg-gray-900/85 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500/60 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-all duration-300 shadow-sm"
                        placeholder="Email address"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-pink-500/10 group-focus-within:to-cyan-500/10 blur-xl transition-all duration-300 -z-10"></div>
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="relative group">
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">Phone <span className="text-gray-400">(optional)</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 text-sm rounded-lg bg-white dark:bg-gray-900/85 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-pink-500/60 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-all duration-300 shadow-sm"
                        placeholder="Phone"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/0 via-pink-500/0 to-cyan-500/0 group-focus-within:from-pink-500/10 group-focus-within:via-cyan-500/10 group-focus-within:to-purple-500/10 blur-xl transition-all duration-300 -z-10"></div>
                  </div>
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="relative group">
                      <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">Subject <span className="text-pink-500">*</span></label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                        className="w-full px-4 py-3.5 text-sm rounded-lg bg-white dark:bg-gray-900/85 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500/60 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-all duration-300 shadow-sm"
                        placeholder="Subject"
                    />
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-focus-within:from-cyan-500/10 group-focus-within:via-purple-500/10 group-focus-within:to-pink-500/10 blur-xl transition-all duration-300 -z-10"></div>
                  </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="relative group">
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">Message <span className="text-pink-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                        rows="4"
                        className="w-full px-4 py-3.5 text-sm rounded-lg bg-white dark:bg-gray-900/85 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500/60 focus:border-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 resize-none transition-all duration-300 shadow-sm"
                        placeholder="Your Message"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-focus-within:from-purple-500/10 group-focus-within:via-pink-500/10 group-focus-within:to-cyan-500/10 blur-xl transition-all duration-300 -z-10"></div>
                    </div>
                  </motion.div>
                  </div>

                  {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mt-6 flex justify-end"
                >
                  <motion.button
                    type="submit"
                    className="fancy-btn disabled:opacity-60"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>
                      <span className="fancy-container">
                        <span className="fancy-primary"></span>
                        <span className="fancy-complimentary"></span>
                      </span>
                    </span>
                    <span>
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    </span>
                  </motion.button>
                </motion.div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="fixed top-4 right-4 z-[9999] px-4 py-3 rounded-lg bg-green-600 text-white shadow-xl flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Your message sent successfully. Thank you!</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                        Your message sent successfully. Thank you!
                      </p>
                    </motion.div>
                  </>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700/50 flex items-center gap-3"
                    >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                      Failed to send message. Please try again or contact me directly via email.
                    </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
      </div>

      </div>
    </section>
  );
};

export default ContactForm;
