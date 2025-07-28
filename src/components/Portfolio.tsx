import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'LOOP: Point of Sale System with Integrated ERP System',
      category: 'SaaS Solution',
      description: 'A custom-built Point of Sale Software for restaurant businesses, fully automated and integrated with an ERP system. Delivered as a SaaS solution for seamless business operations.',
      image: '/images/loop.webp',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'ERP Integration', 'SaaS'],
      results: ['Automated restaurant operations', 'Cloud-based SaaS delivery', 'Custom ERP integration']
    },
    {
      title: 'Muawin',
      category: 'Full-Stack Application',
      description: 'A regional-based file management system with multi-branch and zone support, integrated with a robust task management system. Built for a company to streamline operations across multiple locations.',
      image: '/images/muawin.webp',
      technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'File Management', 'Task Management'],
      results: ['Centralized file management', 'Multi-branch support', 'Integrated task workflows']
    },
    {
      title: 'Slack to Google Sheets Automation',
      category: 'n8n Automation',
      description: 'Automated workflow using n8n to capture Slack messages and log them into Google Sheets for real-time team reporting and analytics.',
      image: '/images/slack.webp',
      technologies: ['n8n', 'Slack API', 'Google Sheets API', 'JavaScript', 'Python', 'Webhooks', 'Automation'],
      results: ['Real-time message logging', 'Automated reporting', 'No manual data entry']
    },
    {
      title: 'Inventory Management Platform',
      category: 'Full-Stack Solution',
      description: 'A scalable inventory management platform with real-time stock tracking, supplier management, and analytics dashboard.',
      image: '/images/inventory_management.webp',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'AWS S3', 'Redis', 'JWT'],
      results: ['Live stock updates', 'Supplier integration', 'Actionable analytics']
    },
    {
      title: 'Email Parser to CRM Automation',
      category: 'n8n Automation',
      description: 'n8n workflow that parses incoming emails and automatically creates or updates leads in a CRM system, saving hours of manual entry.',
      image: '/images/email_parser.webp',
      technologies: ['n8n', 'IMAP', 'CRM API', 'Python', 'Machine Learning', 'NLP', 'Automation'],
      results: ['Automated lead creation', 'Zero manual input', 'Faster response times']
    },
    {
      title: 'Social Media Scheduler Automation',
      category: 'n8n Automation',
      description: 'A workflow built in n8n to schedule and post content across multiple social media platforms automatically, improving marketing efficiency.',
      image: '/images/social_media_manager.webp',
      technologies: ['n8n', 'Twitter API', 'Facebook API', 'Instagram API', 'LinkedIn API', 'Python', 'Automation'],
      results: ['Consistent posting', 'Multi-platform support', 'Time savings for marketing teams']
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 group overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs sm:text-sm rounded-full font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs rounded-md font-medium">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* And Many More Modal */}
        <div className={`text-center mb-12 sm:mb-16 transition-transform duration-300 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 group cursor-pointer">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                And Many More Projects Done
              </h3>
              <p className="text-base sm:text-lg sm:text-xl opacity-90 mb-4 sm:mb-6 group-hover:opacity-100 transition-opacity duration-300">
                These are just a glimpse of our work. We've successfully delivered countless projects across various industries and technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-teal-500/80 px-2 sm:px-3 py-1 rounded-full text-white font-medium">E-commerce</span>
                <span className="bg-teal-500/80 px-2 sm:px-3 py-1 rounded-full text-white font-medium">Healthcare</span>
                <span className="bg-teal-500/80 px-2 sm:px-3 py-1 rounded-full text-white font-medium">Finance</span>
                <span className="bg-teal-500/80 px-2 sm:px-3 py-1 rounded-full text-white font-medium">Education</span>
                <span className="bg-teal-500/80 px-2 sm:px-3 py-1 rounded-full text-white font-medium">Manufacturing</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-600 dark:to-cyan-600 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Have a Project in Mind?
            </h3>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta"
            >
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-200"></div>
              <span className="relative z-10">Start Your Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;