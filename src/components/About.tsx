import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Database, Cloud, Smartphone, Code, Cpu, Palette, Server, CloudCog, Brain, PenTool, Zap, ClipboardList, LayoutGrid, Slack, ShoppingCart, Workflow } from 'lucide-react';
//About Section
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, projects: 0, success: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const animateCounter = (target: number, key: 'clients' | 'projects' | 'success') => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
          };
          
          setTimeout(() => {
            animateCounter(45, 'clients');
            animateCounter(67, 'projects');
            animateCounter(94, 'success');
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: counters.clients, suffix: '+', label: 'Happy Clients' },
    { icon: Award, number: counters.projects, suffix: '+', label: 'Projects Completed' },
    { icon: TrendingUp, number: counters.success, suffix: '%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses through innovative IT solutions that drive growth, efficiency, and digital transformation in an ever-evolving technological landscape.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading IT partner that businesses trust for cutting-edge SaaS solutions, automation, and full-stack development worldwide.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, integrity, and excellence guide everything we do. We prioritize client success, embrace emerging technologies, and deliver exceptional results.'
    }
  ];

  const skills = [
    { name: 'React/Next.js', icon: <Code className="h-6 w-6 text-blue-600 mx-auto mb-2" /> },
    { name: 'Node.js', icon: <Server className="h-6 w-6 text-green-600 mx-auto mb-2" /> },
    { name: 'Python', icon: <Cpu className="h-6 w-6 text-yellow-600 mx-auto mb-2" /> },
    { name: 'Cloud Solutions', icon: <Cloud className="h-6 w-6 text-blue-400 mx-auto mb-2" /> },
    { name: 'DevOps', icon: <CloudCog className="h-6 w-6 text-indigo-600 mx-auto mb-2" /> },
    { name: 'AI/ML', icon: <Brain className="h-6 w-6 text-purple-600 mx-auto mb-2" /> },
    { name: 'Mobile Dev', icon: <Smartphone className="h-6 w-6 text-pink-600 mx-auto mb-2" /> },
    { name: 'UI/UX Design', icon: <PenTool className="h-6 w-6 text-orange-500 mx-auto mb-2" /> },
    { name: 'MySQL', icon: <Database className="h-6 w-6 text-blue-700 mx-auto mb-2" /> },
    { name: 'PostgreSQL', icon: <Database className="h-6 w-6 text-sky-600 mx-auto mb-2" /> },
    { name: 'MongoDB', icon: <Database className="h-6 w-6 text-green-700 mx-auto mb-2" /> },
    { name: 'Firebase', icon: <Database className="h-6 w-6 text-yellow-500 mx-auto mb-2" /> },
    { name: 'AWS', icon: <Cloud className="h-6 w-6 text-orange-400 mx-auto mb-2" /> },
    { name: 'Docker', icon: <Cloud className="h-6 w-6 text-blue-500 mx-auto mb-2" /> },
    { name: 'Figma', icon: <Palette className="h-6 w-6 text-pink-400 mx-auto mb-2" /> },
    { name: 'n8n', icon: <Workflow className="h-6 w-6 text-green-500 mx-auto mb-2" /> },
    { name: 'Zapier', icon: <Zap className="h-6 w-6 text-orange-500 mx-auto mb-2" /> },
    { name: 'Jira', icon: <ClipboardList className="h-6 w-6 text-blue-500 mx-auto mb-2" /> },
    { name: 'Trello', icon: <LayoutGrid className="h-6 w-6 text-blue-400 mx-auto mb-2" /> },
    { name: 'Slack', icon: <Slack className="h-6 w-6 text-purple-500 mx-auto mb-2" /> },
    { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6 text-green-600 mx-auto mb-2" /> },
  ];
  const expertiseRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = expertiseRef.current;
    if (!container) return;
    let scrollAmount = 1;
    let interval: any;
    function startScroll() {
      interval = setInterval(() => {
        if (paused || !container) return;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      }, 20);
    }
    startScroll();
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">CodByt</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a dynamic IT solutions company specializing in SaaS development, automation workflows, and full-stack applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <value.icon className="h-8 w-8 sm:h-12 sm:w-12 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-400">Expertise</span>
          </h3>
          
          <div 
            ref={expertiseRef}
            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="flex space-x-8 sm:space-x-12 animate-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 text-center min-w-[120px] sm:min-w-[140px]">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105 group">
                    {skill.icon}
                    <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mt-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;