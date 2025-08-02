import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Code, Cloud, Database, Settings, Cpu, Server, Smartphone, Palette } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: LucideIcon;
  color: string;
  top: number;
  left: number;
  size: number;
  [key: string]: unknown;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToPortfolio = useCallback(() => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const techIcons = [
    { Icon: Code, color: '#f15a22' },
    { Icon: Cloud, color: '#6366f1' },
    { Icon: Database, color: '#a78bfa' },
    { Icon: Zap, color: '#fbbf24' },
    { Icon: Settings, color: '#f15a22' },
    { Icon: Cpu, color: '#10b981' },
    { Icon: Server, color: '#6366f1' },
    { Icon: Smartphone, color: '#f15a22' },
    { Icon: Palette, color: '#a78bfa' },
  ];

  const MAX_ICONS = isMobile ? 6 : 12; // Reduce icons on mobile
  const ICON_LIFETIME = 2500; // ms

  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const iconId = useRef(0);

  function isInSafeZone(top: number, left: number) {
    // Adjusted safe zone for mobile
    if (isMobile) {
      return top > 15 && top < 75 && left > 10 && left < 90;
    }
    return top > 22 && top < 62 && left > 18 && left < 82;
  }

  // Helper to check if a new icon/snippet is too close to existing ones
  function isTooClose(top: number, left: number, arr: Array<{ top: number; left: number; [key: string]: unknown }>, typeKey: string, typeValue: unknown) {
    return arr.some(item => {
      const dist = Math.sqrt(Math.pow(item.top - top, 2) + Math.pow(item.left - left, 2));
      const sameType = item[typeKey] === typeValue;
      const minDistance = isMobile ? 15 : 10; // Larger minimum distance on mobile
      return (dist < minDistance) || (sameType && Math.abs(item.top - top) < 2 && Math.abs(item.left - left) < 2);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (floatingIcons.length >= MAX_ICONS) return;
      let top, left, Icon, color, tries = 0;
      do {
        const pick = techIcons[Math.floor(Math.random() * techIcons.length)];
        Icon = pick.Icon; color = pick.color;
        top = Math.random() * 70 + 10;
        left = Math.random() * 80 + 5;
        tries++;
      } while ((isInSafeZone(top, left) || isTooClose(top, left, floatingIcons, 'Icon', Icon)) && tries < 10);
      const size = isMobile ? Math.random() * 16 + 20 : Math.random() * 24 + 32; // Smaller icons on mobile
      const id = iconId.current++;
      setFloatingIcons(prev => [
        ...prev,
        { id, Icon, color, top, left, size }
      ]);
      setTimeout(() => {
        setFloatingIcons(prev => prev.filter(icon => icon.id !== id));
      }, ICON_LIFETIME);
    }, isMobile ? 800 : 400); // Slower animation on mobile
    return () => clearInterval(interval);
  }, [floatingIcons, isMobile]);

  const codeSnippets = [
    `const sum = (a, b) => a + b;`,
    `useState(false);`,
    `return <Component />;`,
    `msg.payload = 42; // n8n`,
    `const data = await fetch(url);`,
    `console.log('Ready!');`,
    `if (user) return true;`,
    `setTimeout(fn, 1000);`,
    `const [x, setX] = useState(0);`,
    `workflow.on('start'); // n8n`,
    `items.map(i => i.done);`,
    `return input * 2;`,
    `const node = new Node();`,
    `const res = await api.get('/users');`,
    `const flow = $node["HTTP Request"].json; // n8n`,
    `props => <Button {...props} />;`,
    `const ctx = useContext(AppCtx);`,
    `emit('done'); // n8n`,
    `const el = document.getElementById('id');`,
    `return <h1>Hello</h1>;`,
    `const fn = () => {};`,
  ];

  const MAX_SNIPPETS = isMobile ? 2 : 3; // Reduce snippets on mobile
  const SNIPPET_LIFETIME = 3200;

  const snippetColors = [
    '#f15a22', // orange
    '#ef4444', // red
    '#22c55e', // green
    '#3b82f6', // blue
    '#111111', // black
    '#a78bfa', // purple
    '#ec4899', // pink
  ];

  // Replace floatingSnippets state and effect with a new system for animated typing
  const [typedSnippets, setTypedSnippets] = useState<{id: number, code: string, shown: string, top: number, left: number, width: number, fontSize: number, color: string}[]>([]);
  const typedSnippetId = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typedSnippets.length >= MAX_SNIPPETS) return;
      let top, left, code, tries = 0;
      do {
        code = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        top = Math.random() * 60 + 15;
        left = Math.random() * 70 + 10;
        tries++;
      } while ((isInSafeZone(top, left) || isTooClose(top, left, typedSnippets, 'code', code)) && tries < 10);
      const width = isMobile ? Math.random() * 30 + 80 : Math.random() * 40 + 120; // Smaller width on mobile
      const fontSize = isMobile ? Math.random() * 1 + 10 : Math.random() * 2 + 13; // Smaller font on mobile
      const id = typedSnippetId.current++;
      setTypedSnippets(prev => [
        ...prev,
        { id, code, shown: '', top, left, width, fontSize, color: snippetColors[Math.floor(Math.random() * snippetColors.length)] }
      ]);
    }, isMobile ? 2000 : 1200); // Slower on mobile
    return () => clearInterval(interval);
  }, [typedSnippets, isMobile]);

  // Typing animation for each snippet
  useEffect(() => {
    typedSnippets.forEach((snippet) => {
      if (snippet.shown.length < snippet.code.length) {
        const timeout = setTimeout(() => {
          setTypedSnippets(prev => prev.map(s =>
            s.id === snippet.id ? { ...s, shown: snippet.code.slice(0, snippet.shown.length + 1) } : s
          ));
        }, isMobile ? 50 : 30); // Slower typing on mobile
        return () => clearTimeout(timeout);
      } else {
        // Remove after SNIPPET_LIFETIME
        const timeout = setTimeout(() => {
          setTypedSnippets(prev => prev.filter(s => s.id !== snippet.id));
        }, SNIPPET_LIFETIME - 500);
        return () => clearTimeout(timeout);
      }
    });
  }, [typedSnippets, isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-black dark:via-teal-900/20 dark:to-cyan-900/20 px-2 sm:px-4 pt-28 sm:pt-32">
      {/* Animated Tech Icons Background (dynamic) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        {floatingIcons.map(icon => (
          <icon.Icon
            key={icon.id}
            className="absolute opacity-0 animate-float-pop"
            style={{
              top: `${icon.top}%`,
              left: `${icon.left}%`,
              width: icon.size,
              height: icon.size,
              color: icon.color,
              filter: 'blur(0.5px)',
              zIndex: 0,
              opacity: 0.5
            }}
          />
        ))}
        {typedSnippets.map(snippet => (
          <pre
            key={snippet.id}
            className="absolute opacity-0 animate-float-pop font-mono text-xs whitespace-pre leading-snug"
            style={{
              top: `${snippet.top}%`,
              left: `${snippet.left}%`,
              width: snippet.width,
              fontSize: snippet.fontSize,
              zIndex: 0,
              opacity: 0.8,
              color: snippet.color
            }}
          >
            {snippet.shown}
          </pre>
        ))}
      </div>

      {/* Abstract SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <ellipse cx="900" cy="300" rx="600" ry="320" fill="url(#blobGradient)" filter="url(#blur)" />
        <path d="M0,700 Q720,900 1440,700 L1440,800 L0,800 Z" fill="#a5b4fc" fillOpacity="0.18" />
        <filter id="blur">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center mt-0 sm:mt-10 md:mt-20">
        <div className={`transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-teal-100 text-teal-800 dark:bg-gray-800 dark:text-teal-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mt-2 sm:mt-4 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">Leading IT Solutions & Automation</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transform Your Business with
            <span className={`block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent dark:from-teal-400 dark:via-cyan-400 dark:to-teal-600 transition-all duration-1200 delay-600 drop-shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              CodByt Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We specialize in SaaS development, automation workflows, and full-stack applications 
            that drive growth and efficiency for businesses of all sizes.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={scrollToContact}
              className="group w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 relative overflow-hidden drop-shadow-lg touch-manipulation min-h-[44px] sm:min-h-[48px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10 flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </button>
            
            <button onClick={scrollToPortfolio} className="w-full sm:w-auto bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:border-teal-600 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 relative overflow-hidden group touch-manipulation min-h-[44px] sm:min-h-[48px]">
              <div className="absolute inset-0 bg-teal-50 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative z-10">
              View Our Work
              </span>
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto mt-8 sm:mt-12 mb-12 sm:mb-16">
            {[
              { icon: Zap, title: 'Automation', desc: 'Streamline workflows and boost productivity' },
              { icon: Globe, title: 'SaaS Solutions', desc: 'Scalable software for modern businesses' },
              { icon: Sparkles, title: 'Full-Stack Development', desc: 'End-to-end application development' }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-blue-50 dark:bg-gray-900/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 hover:-translate-y-2 hover:scale-105 group cursor-pointer border border-blue-100 dark:border-gray-800 touch-manipulation ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 mx-auto group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 cursor-pointer touch-manipulation">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;