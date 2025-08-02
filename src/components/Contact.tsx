import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Mail, Send, MessageSquare, Video, ArrowRight } from 'lucide-react';

// Memoized Contact Info Component
const ContactInfo = React.memo(({ 
  contactInfo, 
  isVisible 
}: { 
  contactInfo: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    details: string[];
    action: string;
  }>;
  isVisible: boolean;
}) => (
  <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
          Let's Start Your Project
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 lg:mb-6">
          Ready to transform your business with innovative IT solutions? We're here to help you achieve your goals through cutting-edge technology and expert development.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 lg:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 touch-manipulation">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <info.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {info.title}
              </h4>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-600 dark:to-cyan-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
        <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Why Choose CodByt?</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
          <li className="flex items-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
            Expert team with years of experience
          </li>
          <li className="flex items-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
            Custom solutions tailored to your needs
          </li>
          <li className="flex items-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
            Proven track record of successful projects
          </li>
          <li className="flex items-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
            Ongoing support and maintenance
          </li>
        </ul>
      </div>
    </div>
  </div>
));

// Memoized Contact Form Component
const ContactForm = React.memo(({ 
  isVisible, 
  services, 
  onSubmit, 
  success 
}: { 
  isVisible: boolean;
  services: string[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  success: boolean;
}) => (
  <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-500">
      <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
        <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-teal-600 animate-pulse" />
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h3>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 text-sm sm:text-base min-h-[44px]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 text-sm sm:text-base min-h-[44px]"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          <div>
            <label htmlFor="company" className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 text-sm sm:text-base min-h-[44px]"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 text-sm sm:text-base min-h-[44px]"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 resize-none text-sm sm:text-base min-h-[120px]"
            placeholder="Tell us about your project, requirements, and goals..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:scale-105 relative overflow-hidden group touch-manipulation min-h-[44px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <div className="relative z-10 flex items-center justify-center space-x-2">
            <Send className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>Send Message</span>
          </div>
        </button>
      </form>

      {success && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg">
          <p className="text-green-800 dark:text-green-200 text-xs sm:text-sm lg:text-base">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      )}
    </div>
  </div>
));

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize contact info and services data
  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@codbyt.com'],
      action: 'Send Email'
    }
  ], []);

  const services = useMemo(() => [
    'SaaS Solutions',
    'Automation Workflows',
    'Full-Stack Development',
    'Web Development & Design',
    'Custom IT Solutions',
    'Consulting Services'
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

  const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "8ccb4900-0144-4d68-bb99-df979e63c45e");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      setSuccess(true);
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
            Get In <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <ContactForm
            isVisible={isVisible}
            services={services}
            onSubmit={onSubmit}
            success={success}
          />

          {/* Contact Information */}
          <ContactInfo
            contactInfo={contactInfo}
            isVisible={isVisible}
                  />
                </div>

        {/* OR Separator */}
        <div className={`my-8 sm:my-12 lg:my-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1 w-16 sm:w-24 lg:w-32"></div>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-500 dark:text-gray-400 px-4 sm:px-6 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                OR
              </span>
              <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1 w-16 sm:w-24 lg:w-32"></div>
            </div>
          </div>
              </div>

        {/* Book a Call Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Content */}
              <div className="flex-1 p-6 sm:p-8 lg:p-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-3 flex-shrink-0">
                    <Video className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Book A Call With Us
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      Schedule a free consultation to explore how we can streamline your business with tailored SaaS solutions and automation workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Button */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
                <a
                  href="https://calendly.com/omershahzad129/new-meeting?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-200 hover:from-teal-600 hover:to-cyan-600 hover:scale-105 hover:-translate-y-1 flex items-center space-x-3 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px]"
                >
                  <span>Book a call</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;