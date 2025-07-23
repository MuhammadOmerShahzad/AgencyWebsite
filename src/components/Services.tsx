import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Zap, Code, Palette, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Custom software-as-a-service platforms built for scalability and performance. From concept to deployment, we create solutions that grow with your business.',
      features: ['Multi-tenant Architecture', 'API Development', 'Cloud Integration', 'Subscription Management'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Streamline your business processes with intelligent automation. Reduce manual work, eliminate errors, and boost productivity across all departments.',
      features: ['Process Automation', 'Integration Solutions', 'Workflow Optimization', 'Data Processing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete end-to-end application development using modern technologies. We build robust, scalable applications that deliver exceptional user experiences.',
      features: ['Frontend Development', 'Backend Systems', 'Database Design', 'API Integration'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Web Development & Design',
      description: 'Beautiful, responsive websites that captivate your audience and drive conversions. We combine stunning design with powerful functionality.',
      features: ['Responsive Design', 'UI/UX Optimization', 'Performance Tuning', 'SEO Implementation'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'Custom IT Solutions',
      description: 'Tailored technology solutions designed specifically for your unique business needs. We analyze, design, and implement solutions that fit perfectly.',
      features: ['System Integration', 'Legacy Modernization', 'Consulting Services', 'Maintenance & Support'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-purple-600 transition-colors duration-300 group/btn">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-transform duration-300 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 text-blue-100">Let's discuss how our solutions can drive your success forward.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group/cta">
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">
              Get Started Today
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;