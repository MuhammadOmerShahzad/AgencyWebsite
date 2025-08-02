import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article';
  data: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Predefined structured data for common use cases
export const OrganizationData = {
  name: "CodByt",
  description: "IT SaaS and Automation Agency specializing in full-stack development and business solutions",
  url: "https://codbyt.com",
  logo: "https://codbyt.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@codbyt.com"
  },
  address: {
    "@type": "PostalAddress",
    "streetAddress": "123 Innovation Drive",
    "addressLocality": "Tech City",
    "addressRegion": "TC",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  sameAs: [
    "https://linkedin.com/company/codbyt",
    "https://twitter.com/codbyt",
    "https://github.com/codbyt"
  ]
};

export const WebSiteData = {
  name: "CodByt",
  description: "Leading IT SaaS & Automation Agency",
  url: "https://codbyt.com",
  potentialAction: {
    "@type": "SearchAction",
    "target": "https://codbyt.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const ServiceData = {
  name: "SaaS Development Services",
  description: "Custom SaaS solutions, automation workflows, and full-stack development",
  provider: {
    "@type": "Organization",
    "name": "CodByt"
  },
  areaServed: "Worldwide",
  serviceType: "Software Development",
  offers: {
    "@type": "Offer",
    "price": "Contact for quote",
    "priceCurrency": "USD"
  }
};

export default StructuredData; 