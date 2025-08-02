import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/images/loop.webp',
        '/images/muawin.webp',
        '/images/slack.webp',
        '/images/inventory_management.webp',
        '/images/email_parser.webp',
        '/images/social_media_manager.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Optimize scroll performance
    const optimizeScrollPerformance = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Handle scroll-based animations efficiently
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Optimize intersection observer performance
    const optimizeIntersectionObserver = () => {
      // Use a shared intersection observer for better performance
      const sharedObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      // Observe all elements with data-observe attribute
      const elementsToObserve = document.querySelectorAll('[data-observe]');
      elementsToObserve.forEach(el => sharedObserver.observe(el));

      return () => {
        sharedObserver.disconnect();
      };
    };

    // Optimize image loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
          img.setAttribute('loading', 'lazy');
        });
      } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    const scrollCleanup = optimizeScrollPerformance();
    const observerCleanup = optimizeIntersectionObserver();
    optimizeImageLoading();

    // Cleanup on unmount
    return () => {
      scrollCleanup?.();
      observerCleanup?.();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer; 