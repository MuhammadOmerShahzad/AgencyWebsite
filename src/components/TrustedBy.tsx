import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface ClientLogo {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);



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
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Tech flow arrows */}
      <path d="M8 16L16 8L24 16L32 8L40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M8 24L16 16L24 24L32 16L40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M8 32L16 24L24 32L32 24L40 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Flow nodes */}
      <circle cx="16" cy="8" r="3" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="32" cy="8" r="3" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="24" cy="24" r="3" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
    </svg>
  );

  const DataSyncLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Database icon */}
      <ellipse cx="16" cy="12" rx="8" ry="4" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M8 12V20C8 22.2 11.6 24 16 24C20.4 24 24 22.2 24 20V12" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M8 20V28C8 30.2 11.6 32 16 32C20.4 32 24 30.2 24 28V20" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Sync arrows */}
      <path d="M32 16L40 24L32 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M40 32L32 24L40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M36 24H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
    </svg>
  );

  const CloudVaultLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Cloud shape */}
      <path d="M16 20C12 20 8 23 8 28C8 33 12 36 16 36H32C36 36 40 33 40 28C40 23 36 20 32 20C32 14 28 8 24 8C20 8 16 14 16 20Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Vault/Lock */}
      <rect x="20" y="24" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M22 24V22C22 20.9 22.9 20 24 20C25.1 20 26 20.9 26 22V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="24" cy="27" r="1" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
    </svg>
  );

  const SecureNetLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Shield */}
      <path d="M24 4L32 8V18C32 26 28 34 24 36C20 34 16 26 16 18V8L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Network nodes */}
      <circle cx="24" cy="16" r="2" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="28" cy="20" r="1.5" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="24" cy="24" r="1.5" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Network connections */}
      <path d="M24 16L20 20M24 16L28 20M20 20L24 24M28 20L24 24" stroke="currentColor" strokeWidth="1.5" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
    </svg>
  );

  const InnovateLabLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Light bulb */}
      <path d="M24 8C28.4 8 32 11.6 32 16C32 18.4 30.8 20.6 29 22L29 28C29 30.2 27.2 32 25 32H23C20.8 32 19 30.2 19 28V22C17.2 20.6 16 18.4 16 16C16 11.6 19.6 8 24 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Filament */}
      <path d="M21 16L27 16M22 20L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Base */}
      <path d="M20 32H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <path d="M21 36H27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Innovation rays */}
      <path d="M24 4V6M36 16H38M24 38V40M10 16H12M32.5 9.5L31.1 10.9M32.5 34.5L31.1 33.1M15.5 9.5L16.9 10.9M15.5 34.5L16.9 33.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
    </svg>
  );

  const QuantumCoreLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="transition-colors duration-300">
      {/* Core */}
      <circle cx="24" cy="24" r="4" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Quantum orbits */}
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <ellipse cx="24" cy="24" rx="16" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <ellipse cx="24" cy="24" rx="8" ry="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      {/* Quantum particles */}
      <circle cx="36" cy="24" r="2" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="12" cy="24" r="2" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="24" cy="8" r="2" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
      <circle cx="24" cy="40" r="2" fill="currentColor" className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300"/>
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
            CodByt transforms businesses through innovative SaaS solutions and automation workflows.
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We help businesses streamline operations with custom{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">SaaS applications</span>
              {' '}and{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">automation workflows</span>
              {' '}that eliminate manual processes and boost productivity. From concept to deployment, we deliver scalable solutions that grow with your business.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you need a complete SaaS platform, custom automation tools, or full-stack development services, our expertise in React, Node.js, and modern technologies ensures your vision becomes a powerful, production-ready solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy; 