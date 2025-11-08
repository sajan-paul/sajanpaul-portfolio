import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import socialLinksData from '../../data/socialLinks.json';
import bioData from '../../data/bio.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickAccessLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Project', href: '#my-projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#my-skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  // Filter social icons to only show: linkedin, github, mail, whatsapp, telegram, discord
  const allowedIcons = ['linkedin', 'github', 'mail', 'whatsapp', 'telegram', 'discord'];
  const filteredSocial = socialLinksData.social.filter(social => 
    allowedIcons.includes(social.icon)
  );

  const socialIconsMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    whatsapp: FaWhatsapp,
    telegram: FaTelegram,
    discord: FaDiscord,
  };

  // Map icons and ensure correct order: LinkedIn, GitHub, Email, WhatsApp, Telegram, Discord
  const orderedSocialIcons = [
    filteredSocial.find(s => s.icon === 'linkedin'),
    filteredSocial.find(s => s.icon === 'github'),
    filteredSocial.find(s => s.icon === 'mail'),
    filteredSocial.find(s => s.icon === 'whatsapp'),
    filteredSocial.find(s => s.icon === 'telegram'),
    filteredSocial.find(s => s.icon === 'discord'),
  ].filter(Boolean).map((social) => ({
    ...social,
    Icon: socialIconsMap[social.icon] || Mail,
  }));

  return (
    <footer className="text-gray-900 dark:text-white relative bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/30">
      {/* Top Border Line */}
      <div className="border-t border-gray-300 dark:border-gray-700"></div>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 md:py-12">
          {/* Footer Layout - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 md:items-start">
            {/* Brand Section with Logo and Media - Column 1 (Left on Desktop) */}
            <div className="flex flex-col order-1 md:order-1 md:justify-self-start">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5"
                  >
                    <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-black flex items-center justify-center relative">
                      <Image 
                        src="/images/profile/logo.png" 
                        alt={bioData.name || 'Logo'} 
                        width={64}
                        height={64}
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-extrabold mb-2 text-white">
                    Sajan Paul
                  </h2>
                  <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed px-4 md:px-0">
                    I'm curious, creative, and always eager to learn new technologies and design trends that can help me create even better digital experiences.
                  </p>
                </div>
              </div>
              
              {/* Media Icons */}
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-lg font-bold mb-4 text-white">
                  Media
                </h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                  {orderedSocialIcons.map((social, index) => {
                    const IconComponent = social.Icon || Mail;
                    return (
                      <motion.a
                        key={social.name || index}
                        href={social.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-white hover:text-pink-400 hover:border-pink-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-pink-500/20"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name || social.description}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Link - Column 2 (Centered) - Hidden on Mobile */}
            <div className="hidden md:block text-left order-2 md:order-2 md:justify-self-center">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
                Quick Link
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickAccessLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex justify-start"
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-pink-400 dark:group-hover:bg-pink-400 transition-colors flex-shrink-0"></span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact - Column 3 */}
            <div className="text-center md:text-left order-3 md:order-3 md:justify-self-end mx-auto md:mx-0">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
                Contact
              </h3>
              {/* Mobile: Single line with separators */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex md:hidden flex-wrap items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm"
              >
                <a
                  href={`mailto:${bioData.email}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  <Mail className="w-3 h-3 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                  <span className="break-all">{bioData.email}</span>
                </a>
                <span className="text-gray-500 dark:text-gray-500">|</span>
                <a
                  href={`tel:${bioData.phone}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  <Phone className="w-3 h-3 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                  <span>{bioData.phone}</span>
                </a>
                <span className="text-gray-500 dark:text-gray-500">|</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <span>{bioData.location}</span>
                </div>
              </motion.div>
              {/* Desktop: Column layout */}
              <ul className="hidden md:block space-y-2 sm:space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-start"
                >
                  <a
                    href={`mailto:${bioData.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-start gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 transition-colors flex-shrink-0 mt-0.5" />
                    <span className="break-all">{bioData.email}</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex justify-start"
                >
                  <a
                    href={`tel:${bioData.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                    <span>{bioData.phone}</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-start"
                >
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>{bioData.location}</span>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-6 md:my-8"></div>

        {/* Copyright Section */}
        <div className="pb-6 md:pb-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-500 text-sm"
          >
            © Sajan Paul 2025. All rights reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
