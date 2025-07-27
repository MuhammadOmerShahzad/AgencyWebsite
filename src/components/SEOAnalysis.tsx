import React, { useEffect } from 'react';

interface SEOAnalysisProps {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string[];
}

const SEOAnalysis: React.FC<SEOAnalysisProps> = ({ 
  pageTitle, 
  pageDescription, 
  pageKeywords 
}) => {
  useEffect(() => {
    // SEO Analysis checks
    const analyzeSEO = () => {
      const analysis = {
        title: {
          length: pageTitle.length,
          optimal: pageTitle.length >= 30 && pageTitle.length <= 60,
          hasBrand: pageTitle.includes('CodByt'),
        },
        description: {
          length: pageDescription.length,
          optimal: pageDescription.length >= 120 && pageDescription.length <= 160,
          hasKeywords: pageKeywords.some(keyword => 
            pageDescription.toLowerCase().includes(keyword.toLowerCase())
          ),
        },
        keywords: {
          count: pageKeywords.length,
          optimal: pageKeywords.length >= 3 && pageKeywords.length <= 8,
        },
        headings: {
          h1Count: document.querySelectorAll('h1').length,
          h2Count: document.querySelectorAll('h2').length,
          h3Count: document.querySelectorAll('h3').length,
        },
        images: {
          total: document.querySelectorAll('img').length,
          withAlt: document.querySelectorAll('img[alt]').length,
        },
        links: {
          internal: document.querySelectorAll('a[href^="/"]').length,
          external: document.querySelectorAll('a[href^="http"]').length,
        },
      };

      // Log analysis in development
      if (import.meta.env.DEV) {
        console.log('SEO Analysis:', analysis);
        
        // Provide recommendations
        const recommendations = [];
        
        if (!analysis.title.optimal) {
          recommendations.push('Title should be between 30-60 characters');
        }
        if (!analysis.description.optimal) {
          recommendations.push('Description should be between 120-160 characters');
        }
        if (!analysis.description.hasKeywords) {
          recommendations.push('Description should include target keywords');
        }
        if (analysis.headings.h1Count > 1) {
          recommendations.push('Should have only one H1 tag per page');
        }
        if (analysis.images.total > 0 && analysis.images.withAlt !== analysis.images.total) {
          recommendations.push('All images should have alt attributes');
        }
        
        if (recommendations.length > 0) {
          console.log('SEO Recommendations:', recommendations);
        }
      }
    };

    // Run analysis after component mounts
    const timer = setTimeout(analyzeSEO, 1000);
    return () => clearTimeout(timer);
  }, [pageTitle, pageDescription, pageKeywords]);

  return null; // This component doesn't render anything
};

export default SEOAnalysis; 