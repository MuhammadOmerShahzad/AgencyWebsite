import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg shadow-gray-900/5 border-b border-gray-100 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Code2 className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
              CodByt
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative font-medium transition-all duration-200 hover:text-teal-600 hover:-translate-y-0.5 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-gray-100'
                } ${
                  activeSection === item.toLowerCase() ? 'text-teal-600 dark:text-teal-400' : ''
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 ml-2 mr-0 sm:mr-2 sm:ml-0 bg-white/80 dark:bg-gray-900/80 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 absolute right-2 top-1/2 -translate-y-1/2 z-20"
            onClick={() => setIsOpen(!isOpen)}
            style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}
          >
            {isOpen ? 
              <X className="h-6 w-6 rotate-0 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 rotate-0 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
            <nav className="px-4 py-4 space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2 transition-all duration-300 py-2 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600 dark:text-blue-400 translate-x-2' : ''
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
              {/* Dark mode toggle for mobile */}
              <button
                onClick={toggleDarkMode}
                className="mt-4 w-full flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-200">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200 mr-2" />
                    <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>
                  </>
                )}
              </button>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;