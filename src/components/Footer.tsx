import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' }
  ];

  const services = [
    'SaaS Solutions',
    'Automation Workflows',
    'Full-Stack Development',
    'Web Development',
    'Custom IT Solutions'
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/codbyt/?viewAsMember=true', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/CodBytt', label: 'X' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6 group cursor-pointer">
              <div className="relative">
                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                CodByt
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Transforming businesses through innovative IT solutions, automation, and full-stack development. 
              Your trusted partner for digital transformation.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 dark:bg-gray-900 p-2 sm:p-3 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-700 hover:-translate-y-1 hover:scale-110 transition-all duration-200 group"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm sm:text-base text-gray-300 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-200 hover:translate-x-2 hover:scale-105 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-sm sm:text-base text-gray-300 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 transform inline-block"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm sm:text-base text-gray-300 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 transform inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white dark:text-gray-100">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm sm:text-base text-gray-300 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white dark:text-gray-100">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400" />
                <span className="text-sm sm:text-base text-gray-300 dark:text-gray-400">
                  info@codbyt.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 text-center sm:text-left">
              © 2024 CodByt. All rights reserved.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <button
                onClick={() => navigate('/privacy')}
                className="text-sm sm:text-base text-gray-400 dark:text-gray-500 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/terms')}
                className="text-sm sm:text-base text-gray-400 dark:text-gray-500 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;