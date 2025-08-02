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

// Memoized Service Card Component
const ServiceCard = React.memo(({ 
  service, 
  index, 
  isVisible, 
  onServiceClick 
}: { 
  service: Service; 
  index: number; 
  isVisible: boolean;
  onServiceClick: (service: Service) => void;
}) => (
  <div 
    data-service-id={service.id}
    className={`group bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-150 ease-out hover:-translate-y-1 cursor-pointer relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 touch-manipulation min-h-[200px] sm:min-h-[250px] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ 
      transitionDelay: `${index * 100}ms`,
      transform: isVisible ? 'translateY(0)' : 'translateY(24px)'
    }}
    onClick={() => onServiceClick(service)}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-out"></div>
    <div className="relative z-10 h-full flex flex-col">
      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-150 ease-out`}>
        <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-150 ease-out">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow">{service.shortDescription}</p>
      <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
        {service.features.slice(0, 3).map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-200 text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full mr-2 sm:mr-3 group-hover:bg-cyan-500 transition-colors duration-150 ease-out flex-shrink-0"></div>
            <span className="line-clamp-2">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-150 ease-out group/btn hover:scale-105 mt-auto">
        <span className="text-xs sm:text-sm">Learn More</span>
        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-150 ease-out" />
      </div>
    </div>
  </div>
));

// Memoized Modal Component
const ServiceModal = React.memo(({ 
  service, 
  isOpen, 
  isClosing, 
  onClose, 
  onContact 
}: { 
  service: Service | null; 
  isOpen: boolean; 
  isClosing: boolean;
  onClose: () => void;
  onContact: () => void;
}) => {
  if (!service || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={onClose}
      />
      <div className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto transition-all duration-300 ${
        isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Modal Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  {service.shortDescription}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Description */}
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Overview</h4>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features and Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="line-clamp-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  Benefits
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="line-clamp-2">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Technologies We Use
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs sm:text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Our Process
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {service.process.map((step, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 dark:bg-teal-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                      {index + 1}
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
                      {step.step}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onContact}
              className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg hover:-translate-y-1 transition-all duration-200 touch-manipulation min-h-[44px]`}
            >
              Start Your Project
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 touch-manipulation min-h-[44px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  // Optimized intersection observer with cleanup
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Disconnect after first trigger to prevent unnecessary re-triggers
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  // Memoized callbacks to prevent unnecessary re-renders
  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
            Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Services</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
              onServiceClick={openModal}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-600 dark:to-cyan-600 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our services can help you achieve your goals.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-150 ease-out relative overflow-hidden group/cta touch-manipulation min-h-[44px]"
            >
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-200"></div>
              <span className="relative z-10">Get Started Today</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        isClosing={isClosing}
        onClose={closeModal}
        onContact={handleConsultation}
      />
    </section>
  );
};

export default Services;