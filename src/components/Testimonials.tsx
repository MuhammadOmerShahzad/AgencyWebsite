import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Hassan",
      position: "Operations Director",
      company: "Restaurant Chain",
      content: "CodByt's POS system with ERP integration has revolutionized our restaurant operations. The automation features have reduced our order processing time by 70% and eliminated manual errors completely. The team was professional throughout the entire process.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "IT Manager",
      company: "Regional Bank",
      content: "The file management system CodByt built for us handles multi-branch operations seamlessly. The task management integration has improved our team productivity by 40%. They delivered on time and exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      position: "Marketing Manager",
      company: "E-commerce Platform",
      content: "Their social media automation workflow has been incredible. We're posting consistently across 5 platforms while saving 15 hours per week on manual scheduling. The ROI was immediate and significant.",
      rating: 4
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      position: "CEO",
      company: "Startup Tech",
      content: "CodByt delivered our SaaS platform on time and under budget. The scalability and performance are exactly what we needed for our rapid growth phase. Their technical expertise is outstanding.",
      rating: 5
    },
    {
      id: 5,
      name: "James Wilson",
      position: "Operations Lead",
      company: "Manufacturing Co.",
      content: "The inventory management system they built has transformed our supply chain. Real-time tracking and automated alerts have reduced stockouts by 90%. The implementation was smooth and the training was excellent.",
      rating: 5
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Sales Director",
      company: "Consulting Firm",
      content: "The email parser automation has streamlined our lead management. We're processing 3x more leads with the same team size, and response times are now under 2 hours. This has directly impacted our revenue growth.",
      rating: 4
    },
    {
      id: 7,
      name: "Robert Kim",
      position: "CTO",
      company: "Healthcare Tech",
      content: "CodByt's expertise in full-stack development is outstanding. They understood our complex requirements and delivered a solution that exceeded our expectations. The code quality and documentation are excellent.",
      rating: 5
    },
    {
      id: 8,
      name: "Emily Davis",
      position: "Founder",
      company: "Digital Agency",
      content: "Working with CodByt was seamless from start to finish. Their automation workflows have saved us countless hours and their technical expertise is world-class. They truly understand business needs.",
      rating: 5
    }
  ];

  const totalGroups = Math.ceil(testimonials.length / 3);
  const currentTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  const nextGroup = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevGroup = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToGroup = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Client <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with CodByt.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Navigation Arrows */}
          <button
            onClick={prevGroup}
            disabled={isTransitioning}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextGroup}
            disabled={isTransitioning}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Testimonials Container */}
          <div className="px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 h-[28rem] flex flex-col ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isTransitioning ? 'opacity-50 scale-95' : ''}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                    opacity: isTransitioning ? 0.5 : 1
                  }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-teal-500 dark:text-teal-400 opacity-60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white font-semibold text-sm sm:text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToGroup(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / 3)
                    ? 'bg-teal-500 dark:bg-teal-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 