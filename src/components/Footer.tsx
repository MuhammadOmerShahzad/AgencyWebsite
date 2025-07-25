import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
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
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
              <div className="relative">
                <Code2 className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                CodByt
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative IT solutions, automation, and full-stack development. 
              Your trusted partner for digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 dark:bg-gray-900 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 hover:-translate-y-1 hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 transform inline-block"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 transform inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white dark:text-gray-100">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 hover:translate-x-1 transition-all duration-300 cursor-pointer inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white dark:text-gray-100">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer">hello@codbyt.com</p>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer">support@codbyt.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer">+1 (555) 123-4567</p>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">123 Innovation Drive</p>
                  <p className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 CodByt. All rights reserved. Built with passion for innovation.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 hover:-translate-y-0.5 transition-all duration-300 bg-transparent border-none p-0 m-0">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 hover:-translate-y-0.5 transition-all duration-300 bg-transparent border-none p-0 m-0">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;