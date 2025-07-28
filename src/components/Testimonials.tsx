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
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with CodByt.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevGroup}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200" />
          </button>

          <button
            onClick={nextGroup}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-700 h-[28rem] flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isTransitioning ? 'opacity-50 scale-95' : ''}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                  opacity: isTransitioning ? 0.5 : 1
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-teal-500 dark:text-teal-400 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalGroups }, (_, i) => (
              <button
                key={i}
                onClick={() => goToGroup(i)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === currentIndex
                    ? 'bg-teal-500 dark:bg-teal-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-teal-300 dark:hover:bg-teal-600'
                } ${isTransitioning ? 'opacity-50' : ''}`}
                aria-label={`Go to testimonials group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 