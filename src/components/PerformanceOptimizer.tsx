import React from 'react';
import { Helmet } from 'react-helmet-async';

const PerformanceOptimizer: React.FC = () => {
  return (
    <Helmet>
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//images.pexels.com" />
      <link rel="dns-prefetch" href="//api.web3forms.com" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.web3forms.com" crossOrigin="anonymous" />
      
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        as="style" 
      />
      
      {/* Preload critical images */}
      <link rel="preload" as="image" href="/src/images/codbyt_logo.png" />
      
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/privacy" />
      <link rel="prefetch" href="/terms" />
      
      {/* Performance optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0d9488" />
      <meta name="msapplication-TileColor" content="#0d9488" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
    </Helmet>
  );
};

export default PerformanceOptimizer; 