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
            animateCounter(150, 'clients');
            animateCounter(200, 'projects');
            animateCounter(99, 'success');
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
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">CodByt</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a dynamic team of technology experts passionate about creating solutions that transform businesses and drive success.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-24 transition-transform duration-300 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-8 bg-blue-50 dark:bg-gray-900 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-105 transition-transform duration-200 cursor-pointer group border border-blue-100 dark:border-gray-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 60 + 100}ms` }}
            >
              <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`bg-blue-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-transform duration-200 hover:-translate-y-2 hover:scale-105 group cursor-pointer border border-blue-100 dark:border-gray-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <value.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className={`text-center transition-transform duration-300 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Expertise</h3>
          <div
            ref={expertiseRef}
            className="flex overflow-x-auto whitespace-nowrap gap-6 sm:gap-8 pb-2 scrollbar-none px-2"
            style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`inline-block flex-shrink-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 px-12 py-10 rounded-2xl font-semibold text-gray-800 dark:text-gray-200 text-xl hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 transition-transform duration-300 cursor-pointer text-center align-top ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ minWidth: '240px', transitionDelay: `${index * 40 + 300}ms` }}
              >
                {React.cloneElement(skill.icon, { className: (skill.icon.props.className || '') + ' h-10 w-10 mb-4' })}
                <span className="block text-xs sm:text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;