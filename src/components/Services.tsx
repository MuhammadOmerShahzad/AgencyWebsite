import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Cloud, Zap, Code, Palette, Settings, ArrowRight, X, CheckCircle, Clock, TrendingUp } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
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
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Memoize services data to prevent recreation on every render
  const services: Service[] = useMemo(() => [
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
      color: 'from-teal-500 to-teal-600',
      gradient: 'from-teal-600 to-teal-700'
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
      color: 'from-cyan-500 to-cyan-600',
      gradient: 'from-cyan-600 to-cyan-700'
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
      color: 'from-teal-500 to-cyan-500',
      gradient: 'from-teal-600 to-cyan-600'
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
      color: 'from-cyan-500 to-teal-500',
      gradient: 'from-cyan-600 to-teal-600'
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
      color: 'from-teal-600 to-cyan-600',
      gradient: 'from-teal-700 to-cyan-700'
    }
  ], []);

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger to prevent unnecessary re-triggers
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoized callbacks to prevent unnecessary re-renders
  const openModal = useCallback((service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    // Add a subtle scale animation to the clicked card
    const card = document.querySelector(`[data-service-id="${service.id}"]`);
    if (card) {
      card.classList.add('scale-95');
      setTimeout(() => card.classList.remove('scale-95'), 200);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedService(null);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 200); // Match the animation duration
  }, []);

  const handleConsultation = useCallback(() => {
    closeModal();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  }, [closeModal]);

  // Memoized service cards to prevent unnecessary re-renders
  const ServiceCard = React.memo(({ service, index }: { service: Service; index: number }) => (
    <div 
      data-service-id={service.id}
      className={`group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-150 ease-out hover:-translate-y-1 cursor-pointer relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)'
      }}
      onClick={() => openModal(service)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"></div>
      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-150 ease-out`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-150 ease-out">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.shortDescription}</p>
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-200">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:bg-cyan-500 transition-colors duration-150 ease-out"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-150 ease-out group/btn hover:scale-105">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-150 ease-out" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-black dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-800 dark:to-cyan-800 rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-200 ease-out">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 dark:from-teal-900 dark:to-cyan-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                                  <p className="text-xl mb-6 text-teal-100 dark:text-teal-200">Let's discuss how our solutions can drive your success forward.</p>
                <button className="bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-150 ease-out relative overflow-hidden group/cta">
                  <div className="absolute inset-0 bg-teal-50 dark:bg-gray-800 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-150 ease-out"></div>
                  <span className="relative z-10">Get Started Today</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className={`fixed inset-0 z-50 overflow-y-auto transition-all duration-200 ease-out ${
          isClosing ? 'animate-out fade-out duration-200' : 'animate-in fade-in duration-200'
        }`}>
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-200 ease-out ${
                isClosing ? 'animate-out fade-out duration-200' : 'animate-in fade-in duration-200'
              }`}
              onClick={closeModal}
            />
            
            {/* Modal */}
            <div className={`inline-block w-full max-w-7xl my-8 overflow-hidden text-left align-middle bg-white dark:bg-gray-900 shadow-2xl rounded-3xl transition-all duration-200 ease-out ${
              isClosing ? 'animate-out zoom-out-95 duration-200' : 'animate-in zoom-in-95 duration-200'
            }`}>
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-10 p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all duration-150 ease-out hover:scale-110 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Modal Content */}
                <div className="max-h-[85vh] overflow-y-auto p-8 lg:p-12">
                  {/* Header */}
                  <div className={`flex flex-col lg:flex-row items-start lg:items-center mb-12 transition-all duration-200 ease-out ${
                    isClosing ? 'animate-out slide-out-to-top-4 duration-200' : 'animate-in slide-in-from-bottom-4 duration-300 delay-100'
                  }`}>
                    <div className={`w-24 h-24 bg-gradient-to-r ${selectedService.gradient} rounded-3xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-8 shadow-lg transition-all duration-200 ease-out ${
                      isClosing ? 'animate-out zoom-out-95 duration-200' : 'animate-in zoom-in-95 duration-300 delay-200'
                    }`}>
                      <selectedService.icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-200 ease-out ${
                        isClosing ? 'animate-out slide-out-to-top-4 duration-200' : 'animate-in slide-in-from-bottom-4 duration-300 delay-300'
                      }`}>
                        {selectedService.title}
                      </h2>
                      <p className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-200 ease-out ${
                        isClosing ? 'animate-out slide-out-to-top-4 duration-200' : 'animate-in slide-in-from-bottom-4 duration-300 delay-400'
                      }`}>
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className={`space-y-10 transition-all duration-300 ${
                      isClosing ? 'animate-out slide-out-to-left-4 duration-300' : 'animate-in slide-in-from-left-4 duration-500 delay-600'
                    }`}>
                      {/* Features */}
                      <div>
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-all duration-300 ${
                          isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500 delay-700'
                        }`}>
                          <CheckCircle className="h-7 w-7 text-teal-600 mr-3" />
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedService.features.map((feature, index) => (
                            <div 
                              key={index} 
                              className={`flex items-center text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 ${
                                isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500'
                              }`}
                              style={{ 
                                animationDelay: isClosing ? `${index * 50}ms` : `${800 + index * 100}ms` 
                              }}
                            >
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-all duration-300 ${
                          isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500 delay-900'
                        }`}>
                          <TrendingUp className="h-7 w-7 text-cyan-600 mr-3" />
                          Business Benefits
                        </h3>
                        <div className="space-y-4">
                          {selectedService.benefits.map((benefit, index) => (
                            <div 
                              key={index} 
                              className={`flex items-start text-gray-700 dark:text-gray-300 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 transition-all duration-300 hover:scale-105 ${
                                isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500'
                              }`}
                              style={{ 
                                animationDelay: isClosing ? `${index * 50}ms` : `${1000 + index * 100}ms` 
                              }}
                            >
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className={`space-y-10 transition-all duration-300 ${
                      isClosing ? 'animate-out slide-out-to-right-4 duration-300' : 'animate-in slide-in-from-right-4 duration-500 delay-600'
                    }`}>
                      {/* Technologies */}
                      <div>
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-all duration-300 ${
                          isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500 delay-700'
                        }`}>
                          <Code className="h-7 w-7 text-teal-600 mr-3" />
                          Technologies We Use
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedService.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className={`px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default ${
                                isClosing ? 'animate-out zoom-out-95 duration-300' : 'animate-in zoom-in-95 duration-500'
                              }`}
                              style={{ 
                                animationDelay: isClosing ? `${index * 30}ms` : `${800 + index * 50}ms` 
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-all duration-300 ${
                          isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500 delay-900'
                        }`}>
                          <Clock className="h-7 w-7 text-cyan-600 mr-3" />
                          Our Process
                        </h3>
                        <div className="space-y-6">
                          {selectedService.process.map((step, index) => (
                            <div 
                              key={index} 
                              className={`flex items-start p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border-l-4 border-cyan-500 transition-all duration-300 hover:scale-105 ${
                                isClosing ? 'animate-out slide-out-to-top-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500'
                              }`}
                              style={{ 
                                animationDelay: isClosing ? `${index * 75}ms` : `${1000 + index * 150}ms` 
                              }}
                            >
                              <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 shadow-lg">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{step.step}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`mt-12 text-center transition-all duration-300 ${
                    isClosing ? 'animate-out slide-out-to-bottom-4 duration-300' : 'animate-in slide-in-from-bottom-4 duration-500 delay-1100'
                  }`}>
                    <div className={`bg-gradient-to-r ${selectedService.gradient} rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="text-blue-100 mb-6 text-lg">Let's discuss your project and create a custom solution for your business.</p>
                        <button 
                          onClick={handleConsultation}
                          className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta text-lg"
                        >
                          <div className="absolute inset-0 bg-teal-50 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative z-10">Schedule a Consultation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;