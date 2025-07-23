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
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800', // POS/ERP relevant image
      technologies: ['React', 'Node.js', 'ERP Integration', 'SaaS'],
      results: ['Automated restaurant operations', 'Cloud-based SaaS delivery', 'Custom ERP integration']
    },
    {
      title: 'Muawin',
      category: 'Full-Stack Application',
      description: 'A regional-based file management system with multi-branch and zone support, integrated with a robust task management system. Built for a company to streamline operations across multiple locations.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', // File/task management relevant image
      technologies: ['React', 'Node.js', 'File Management', 'Task Management'],
      results: ['Centralized file management', 'Multi-branch support', 'Integrated task workflows']
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-transform duration-300 overflow-hidden hover:-translate-y-2 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden h-48">
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-200">
                    <ExternalLink className="h-4 w-4 text-white hover:scale-110 transition-transform duration-200" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 hover:scale-110 transition-all duration-200">
                    <Github className="h-4 w-4 text-white hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors duration-300">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></div>
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
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h3>
            <p className="text-xl text-gray-600 mb-6">Let's create something amazing together. Our team is ready to bring your vision to life.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
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