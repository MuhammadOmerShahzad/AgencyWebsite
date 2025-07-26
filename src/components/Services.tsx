import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Zap, Code, Palette, Settings, ArrowRight, X, CheckCircle, Clock, Users, Shield, TrendingUp, Database, Smartphone, Globe, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: string;
  icon: any;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: Array<{ step: string; description: string }>;
  color: string;
  gradient: string;
}

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const services: Service[] = [
    {
      id: 'saas-solutions',
      icon: Cloud,
      title: 'SaaS Solutions',
      shortDescription: 'Custom software-as-a-service platforms built for scalability and performance.',
      description: 'Transform your business with custom SaaS solutions that scale with your growth. We design, develop, and deploy cloud-based applications that provide seamless user experiences while maintaining enterprise-grade security and performance.',
      features: [
        'Multi-tenant Architecture',
        'API Development & Integration',
        'Cloud Infrastructure Setup',
        'Subscription Management System',
        'User Authentication & Authorization',
        'Real-time Analytics Dashboard',
        'Payment Gateway Integration',
        'Automated Scaling & Load Balancing'
      ],
      benefits: [
        'Reduced infrastructure costs through cloud optimization',
        'Faster time-to-market with our proven development framework',
        'Scalable architecture that grows with your business',
        '24/7 monitoring and automated maintenance',
        'Enhanced security with enterprise-grade protection',
        'Seamless integration with existing business systems'
      ],
      technologies: [
        'React/Next.js', 'Node.js/Express', 'Python/Django', 'PostgreSQL/MongoDB',
        'AWS/Azure/GCP', 'Docker/Kubernetes', 'Redis', 'Stripe/PayPal'
      ],
      process: [
        { step: 'Discovery & Planning', description: 'We analyze your business requirements and create a comprehensive roadmap for your SaaS solution.' },
        { step: 'Architecture Design', description: 'Our team designs a scalable, secure architecture that supports your business goals.' },
        { step: 'Development & Testing', description: 'Agile development with continuous testing ensures quality and rapid delivery.' },
        { step: 'Deployment & Launch', description: 'Smooth deployment to production with comprehensive monitoring and support.' }
      ],
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 'automation-workflows',
      icon: Zap,
      title: 'Automation Workflows',
      shortDescription: 'Streamline your business processes with intelligent automation.',
      description: 'Revolutionize your business efficiency with intelligent automation workflows. We identify repetitive tasks and create custom automation solutions that save time, reduce errors, and boost productivity across all departments.',
      features: [
        'Process Automation & Optimization',
        'Integration Solutions',
        'Workflow Design & Implementation',
        'Data Processing & Analysis',
        'Automated Reporting Systems',
        'Error Handling & Monitoring',
        'Custom API Development',
        'Legacy System Integration'
      ],
      benefits: [
        'Up to 80% reduction in manual processing time',
        'Elimination of human errors in repetitive tasks',
        'Improved data accuracy and consistency',
        'Enhanced employee productivity and satisfaction',
        'Real-time process monitoring and alerts',
        'Scalable solutions that adapt to business growth'
      ],
      technologies: [
        'Python/Automation', 'Zapier/Make', 'Microsoft Power Automate', 'Node.js',
        'PostgreSQL/MySQL', 'AWS Lambda', 'Docker', 'REST APIs'
      ],
      process: [
        { step: 'Process Analysis', description: 'We audit your current workflows to identify automation opportunities.' },
        { step: 'Solution Design', description: 'Custom automation strategies are designed to maximize efficiency gains.' },
        { step: 'Development & Testing', description: 'Robust automation systems are built and thoroughly tested.' },
        { step: 'Deployment & Training', description: 'Smooth implementation with comprehensive team training.' }
      ],
      color: 'from-purple-500 to-purple-600',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      id: 'full-stack-development',
      icon: Code,
      title: 'Full-Stack Development',
      shortDescription: 'Complete end-to-end application development using modern technologies.',
      description: 'Build powerful, scalable applications from the ground up with our full-stack development expertise. We handle everything from frontend design to backend architecture, ensuring seamless integration and optimal performance.',
      features: [
        'Frontend Development (React/Vue/Angular)',
        'Backend Systems & APIs',
        'Database Design & Optimization',
        'Cloud Infrastructure Setup',
        'Mobile App Development',
        'Third-party Integrations',
        'Performance Optimization',
        'Security Implementation'
      ],
      benefits: [
        'Complete ownership of your application codebase',
        'Custom solutions tailored to your specific needs',
        'Scalable architecture for future growth',
        'Modern, maintainable code following best practices',
        'Comprehensive testing and quality assurance',
        'Ongoing support and maintenance services'
      ],
      technologies: [
        'React/Vue/Angular', 'Node.js/Express', 'Python/Django', 'Java/Spring',
        'PostgreSQL/MySQL/MongoDB', 'AWS/Azure/GCP', 'Docker/Kubernetes', 'GraphQL'
      ],
      process: [
        { step: 'Requirements Gathering', description: 'Detailed analysis of your business needs and technical requirements.' },
        { step: 'Architecture Planning', description: 'Design scalable system architecture and technology stack.' },
        { step: 'Development Phase', description: 'Agile development with regular milestones and client feedback.' },
        { step: 'Testing & Deployment', description: 'Comprehensive testing and smooth production deployment.' }
      ],
      color: 'from-orange-500 to-orange-600',
      gradient: 'from-orange-600 to-orange-700'
    },
    {
      id: 'web-development-design',
      icon: Palette,
      title: 'Web Development & Design',
      shortDescription: 'Beautiful, responsive websites that captivate your audience and drive conversions.',
      description: 'Create stunning, high-performance websites that not only look amazing but also drive results. Our design-first approach combines beautiful aesthetics with powerful functionality to create memorable user experiences.',
      features: [
        'Responsive Web Design',
        'UI/UX Design & Optimization',
        'Performance Optimization',
        'SEO Implementation',
        'Content Management Systems',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'Analytics & Tracking'
      ],
      benefits: [
        'Increased user engagement and conversion rates',
        'Improved search engine rankings and visibility',
        'Faster loading times and better user experience',
        'Mobile-first design for all devices',
        'Easy content management and updates',
        'Comprehensive analytics and insights'
      ],
      technologies: [
        'React/Next.js', 'Vue.js/Nuxt.js', 'WordPress/Custom CMS', 'Shopify/WooCommerce',
        'Tailwind CSS/SCSS', 'Figma/Adobe XD', 'Google Analytics', 'Lighthouse Optimization'
      ],
      process: [
        { step: 'Design Discovery', description: 'Understanding your brand, audience, and design preferences.' },
        { step: 'Wireframing & Design', description: 'Creating beautiful, functional designs that align with your goals.' },
        { step: 'Development & Testing', description: 'Building responsive, optimized websites with modern technologies.' },
        { step: 'Launch & Optimization', description: 'Smooth launch with ongoing optimization and support.' }
      ],
      color: 'from-green-500 to-green-600',
      gradient: 'from-green-600 to-green-700'
    },
    {
      id: 'custom-it-solutions',
      icon: Settings,
      title: 'Custom IT Solutions',
      shortDescription: 'Tailored technology solutions designed specifically for your unique business needs.',
      description: 'Every business is unique, and your technology solutions should reflect that. We create custom IT solutions that perfectly align with your business processes, goals, and challenges.',
      features: [
        'System Integration & Migration',
        'Legacy System Modernization',
        'Custom Software Development',
        'IT Consulting & Strategy',
        'Infrastructure Optimization',
        'Security Implementation',
        'Data Migration & Backup',
        'Ongoing Maintenance & Support'
      ],
      benefits: [
        'Solutions perfectly tailored to your business needs',
        'Improved operational efficiency and productivity',
        'Enhanced data security and compliance',
        'Reduced IT costs through optimization',
        'Future-proof technology infrastructure',
        'Dedicated support and maintenance'
      ],
      technologies: [
        'Various Programming Languages', 'Cloud Platforms', 'Database Systems', 'Security Tools',
        'Integration Platforms', 'Monitoring Tools', 'Backup Solutions', 'Compliance Frameworks'
      ],
      process: [
        { step: 'Business Analysis', description: 'Deep dive into your business processes and technology needs.' },
        { step: 'Solution Design', description: 'Custom solution architecture designed for your specific requirements.' },
        { step: 'Implementation', description: 'Careful implementation with minimal business disruption.' },
        { step: 'Support & Optimization', description: 'Ongoing support and continuous optimization.' }
      ],
      color: 'from-indigo-500 to-indigo-600',
      gradient: 'from-indigo-600 to-indigo-700'
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const handleConsultation = () => {
    closeModal();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 400);
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.3,
      opacity: 0,
      rotateX: -15,
      rotateY: 15,
      y: 100
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      rotateX: 15,
      rotateY: -15,
      y: -50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-blue-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-transform duration-200 hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden border border-blue-100 dark:border-gray-800`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-200"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => openModal(service)}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 transition-transform duration-300 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-900 dark:to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-xl mb-6 text-blue-100 dark:text-blue-200">Let's discuss how our solutions can drive your success forward.</p>
                <button className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta">
                  <div className="absolute inset-0 bg-blue-50 dark:bg-gray-800 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    Get Started Today
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              {/* Backdrop */}
              <motion.div 
                className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" 
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Modal */}
              <motion.div 
                className="inline-block w-full max-w-7xl my-8 overflow-hidden text-left align-middle bg-white dark:bg-gray-900 shadow-2xl rounded-3xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="relative"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 z-10 p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all duration-300 hover:scale-110 hover:rotate-90 bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {/* Modal Content */}
                  <div className="max-h-[85vh] overflow-y-auto p-8 lg:p-12">
                    {/* Header */}
                    <motion.div 
                      className="flex flex-col lg:flex-row items-start lg:items-center mb-12"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <motion.div 
                        className={`w-24 h-24 bg-gradient-to-r ${selectedService.gradient} rounded-3xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-8 shadow-lg`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <selectedService.icon className="h-12 w-12 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h2 
                          className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          {selectedService.title}
                        </motion.h2>
                        <motion.p 
                          className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {selectedService.description}
                        </motion.p>
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div className="space-y-10">
                        {/* Features */}
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h3 
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                            variants={staggerItem}
                          >
                            <CheckCircle className="h-7 w-7 text-blue-600 mr-3" />
                            Key Features
                          </motion.h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedService.features.map((feature, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-center text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                variants={staggerItem}
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                                <span className="text-sm font-medium">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h3 
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                            variants={staggerItem}
                          >
                            <TrendingUp className="h-7 w-7 text-green-600 mr-3" />
                            Business Benefits
                          </motion.h3>
                          <div className="space-y-4">
                            {selectedService.benefits.map((benefit, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-start text-gray-700 dark:text-gray-300 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500"
                                variants={staggerItem}
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-10">
                        {/* Technologies */}
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h3 
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                            variants={staggerItem}
                          >
                            <Code className="h-7 w-7 text-purple-600 mr-3" />
                            Technologies We Use
                          </motion.h3>
                          <div className="flex flex-wrap gap-3">
                            {selectedService.technologies.map((tech, index) => (
                              <motion.span 
                                key={index} 
                                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                                variants={staggerItem}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Process */}
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.h3 
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                            variants={staggerItem}
                          >
                            <Clock className="h-7 w-7 text-orange-600 mr-3" />
                            Our Process
                          </motion.h3>
                          <div className="space-y-6">
                            {selectedService.process.map((step, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-start p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500"
                                variants={staggerItem}
                              >
                                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 shadow-lg">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{step.step}</h4>
                                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="mt-12 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <div className={`bg-gradient-to-r ${selectedService.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                          <p className="text-blue-100 mb-6 text-lg">Let's discuss your project and create a custom solution for your business.</p>
                          <motion.button 
                            onClick={handleConsultation}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">
                              Schedule a Consultation
                            </span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;