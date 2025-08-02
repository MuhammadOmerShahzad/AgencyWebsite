import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface ClientLogo {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized intersection observer
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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

  // Custom Company Logo Icons
  const TechFlowLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Circuit board pattern */}
      <path d="M6 8H26M6 12H26M6 16H26M6 20H26" stroke="#3B82F6" strokeWidth="1" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <path d="M8 6V26M12 6V26M16 6V26M20 6V26M24 6V26" stroke="#1D4ED8" strokeWidth="1" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      {/* Connection nodes */}
      <circle cx="8" cy="8" r="1.5" fill="#1E40AF" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="16" cy="12" r="1.5" fill="#1E40AF" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="24" cy="20" r="1.5" fill="#1E40AF" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
    </svg>
  );

  const DataSyncLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Database cylinders */}
      <ellipse cx="12" cy="10" rx="3" ry="2" fill="#10B981" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <ellipse cx="12" cy="14" rx="3" ry="2" fill="#059669" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <ellipse cx="12" cy="18" rx="3" ry="2" fill="#047857" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <ellipse cx="12" cy="22" rx="3" ry="2" fill="#065F46" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      {/* Sync arrows */}
      <path d="M20 8L24 12L20 16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <path d="M24 16L20 20L16 16" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
    </svg>
  );

  const CloudVaultLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Cloud shape */}
      <path d="M8 16C8 12 11 8 16 8C21 8 24 12 24 16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <path d="M8 16L12 20L20 20L24 16" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      {/* Lock inside cloud */}
      <rect x="13" y="14" width="6" height="4" rx="1" fill="#6D28D9" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="16" cy="12" r="1" fill="#6D28D9" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
    </svg>
  );

  const SecureNetLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Shield shape */}
      <path d="M16 4L20 8L20 12C20 16 18 20 16 22C14 20 12 16 12 12L12 8L16 4Z" fill="#F59E0B" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      {/* Network grid */}
      <path d="M8 8L24 8M8 12L24 12M8 16L24 16M8 20L24 20" stroke="#D97706" strokeWidth="1" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <path d="M8 8V20M12 8V20M16 8V20M20 8V20M24 8V20" stroke="#B45309" strokeWidth="1" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      {/* Security lock */}
      <rect x="14" y="12" width="4" height="3" rx="0.5" fill="#B45309" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="16" cy="10" r="0.8" fill="#B45309" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
    </svg>
  );

  const InnovateLabLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Test tube */}
      <path d="M12 8L12 20C12 22 14 24 16 24C18 24 20 22 20 20L20 8" stroke="#EC4899" strokeWidth="2" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      {/* Bubbles */}
      <circle cx="14" cy="12" r="1" fill="#DB2777" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="18" cy="14" r="0.8" fill="#BE185D" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="15" cy="16" r="0.6" fill="#BE185D" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      {/* Innovation spark */}
      <path d="M24 8L26 10L24 12M26 8L28 10L26 12" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
    </svg>
  );

  const QuantumCoreLogo = () => (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
      {/* Quantum atom */}
      <circle cx="16" cy="16" r="8" stroke="#10B981" strokeWidth="2" fill="none" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <circle cx="16" cy="16" r="3" fill="#059669" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      {/* Electron orbits */}
      <ellipse cx="16" cy="16" rx="6" ry="2" stroke="#047857" strokeWidth="1" fill="none" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      <ellipse cx="16" cy="16" rx="2" ry="6" stroke="#065F46" strokeWidth="1" fill="none" className="stroke-gray-500 group-hover:stroke-gray-900 dark:stroke-gray-400 dark:group-hover:stroke-white transition-colors duration-300"/>
      {/* Quantum particles */}
      <circle cx="22" cy="16" r="1" fill="#34D399" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="16" cy="10" r="1" fill="#34D399" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="10" cy="16" r="1" fill="#34D399" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
      <circle cx="16" cy="22" r="1" fill="#34D399" className="fill-gray-500 group-hover:fill-gray-900 dark:fill-gray-400 dark:group-hover:fill-white transition-colors duration-300"/>
    </svg>
  );

  // Memoize client logos data with realistic company names
  const clientLogos: ClientLogo[] = useMemo(() => [
    {
      id: 1,
      name: "TechFlow",
      icon: <TechFlowLogo />
    },
    {
      id: 2,
      name: "DataSync",
      icon: <DataSyncLogo />
    },
    {
      id: 3,
      name: "CloudVault",
      icon: <CloudVaultLogo />
    },
    {
      id: 4,
      name: "SecureNet",
      icon: <SecureNetLogo />
    },
    {
      id: 5,
      name: "InnovateLab",
      icon: <InnovateLabLogo />
    },
    {
      id: 6,
      name: "QuantumCore",
      icon: <QuantumCoreLogo />
    }
  ], []);

  const renderLogo = useCallback((client: ClientLogo, index: number) => (
    <div
      key={client.id}
      className={`group flex items-center space-x-4 sm:space-x-6 lg:space-x-8 transition-all duration-300 hover:opacity-80 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Logo Icon */}
      <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
        {client.icon}
      </div>
      
      {/* Company Name */}
      <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
        {client.name}
      </span>
    </div>
  ), [isVisible]);

  return (
    <section ref={sectionRef} id="trusted-by" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-8 sm:mb-12">
            BUILT FOR BUSINESS. TRUSTED BY THE BEST.
          </h2>
        </div>

        {/* Client Logos Row */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {clientLogos.map((client, index) => renderLogo(client, index))}
          </div>
        </div>

        {/* Main Content */}
        <div className={`mt-20 sm:mt-24 lg:mt-32 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-tight">
            CodByt was built to move ideas from concept to launch—fast.
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We help founders, creators, and teams build scalable{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">membership sites</span>
              {' '}and{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">SaaS products</span>
              {' '}without the usual delays, dev roadblocks, or messy handoffs.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you're launching a no-code MVP or a custom application, we turn your vision into a powerful, ready-to-grow platform—designed to scale with your business from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy; 