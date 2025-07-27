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

  const projects = [
    {
      title: 'LOOP: Point of Sale System with Integrated ERP System',
      category: 'SaaS Solution',
      description: 'A custom-built Point of Sale Software for restaurant businesses, fully automated and integrated with an ERP system. Delivered as a SaaS solution for seamless business operations.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'ERP Integration', 'SaaS'],
      results: ['Automated restaurant operations', 'Cloud-based SaaS delivery', 'Custom ERP integration']
    },
    {
      title: 'Muawin',
      category: 'Full-Stack Application',
      description: 'A regional-based file management system with multi-branch and zone support, integrated with a robust task management system. Built for a company to streamline operations across multiple locations.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'File Management', 'Task Management'],
      results: ['Centralized file management', 'Multi-branch support', 'Integrated task workflows']
    },
    {
      title: 'Slack to Google Sheets Automation',
      category: 'n8n Automation',
      description: 'Automated workflow using n8n to capture Slack messages and log them into Google Sheets for real-time team reporting and analytics.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['n8n', 'Slack API', 'Google Sheets API', 'Automation'],
      results: ['Real-time message logging', 'Automated reporting', 'No manual data entry']
    },
    {
      title: 'Inventory Management Platform',
      category: 'Full-Stack Solution',
      description: 'A scalable inventory management platform with real-time stock tracking, supplier management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      results: ['Live stock updates', 'Supplier integration', 'Actionable analytics']
    },
    {
      title: 'Email Parser to CRM Automation',
      category: 'n8n Automation',
      description: 'n8n workflow that parses incoming emails and automatically creates or updates leads in a CRM system, saving hours of manual entry.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['n8n', 'IMAP', 'CRM API', 'Automation'],
      results: ['Automated lead creation', 'Zero manual input', 'Faster response times']
    },
    {
      title: 'Social Media Scheduler Automation',
      category: 'n8n Automation',
      description: 'A workflow built in n8n to schedule and post content across multiple social media platforms automatically, improving marketing efficiency.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['n8n', 'Twitter API', 'Facebook API', 'Automation'],
      results: ['Consistent posting', 'Multi-platform support', 'Time savings for marketing teams']
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-transform duration-200 overflow-hidden hover:-translate-y-1 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700`}
            >
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden h-48">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100">
                  <button className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-700/60 hover:scale-110 transition-all duration-150">
                    <ExternalLink className="h-4 w-4 text-white hover:scale-110 transition-transform duration-150" />
                  </button>
                  <button className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-700/60 hover:scale-110 transition-all duration-150">
                    <Github className="h-4 w-4 text-white hover:scale-110 transition-transform duration-150" />
                  </button>
                </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-teal-100 dark:group-hover:bg-teal-900 group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-colors duration-200">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-sm group-hover:bg-teal-50 dark:group-hover:bg-teal-900 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:bg-teal-500 group-hover:scale-125 transition-all duration-200"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-transform duration-300 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Have a Project in Mind?</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Let's create something amazing together. Our team is ready to bring your vision to life.</p>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-800 dark:to-cyan-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-900 dark:to-cyan-900 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">
              Start Your Project
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;