import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import SEO from './components/SEO';
import StructuredData, { OrganizationData, WebSiteData, ServiceData } from './components/StructuredData';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOAnalysis from './components/SEOAnalysis';

function App() {
  const pageTitle = "Transform Your Business with CodByt Solutions";
  const pageDescription = "Leading IT SaaS & Automation Agency specializing in SaaS development, automation workflows, and full-stack applications. Transform your business with cutting-edge technology solutions.";
  const pageKeywords = ['SaaS', 'Automation', 'Full-Stack', 'Web Development', 'IT Solutions'];

  return (
    <ThemeProvider>
      <PerformanceOptimizer />
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="SaaS development, business automation, full-stack development, web development, IT solutions, React, Node.js, TypeScript, automation workflows"
        url="https://codbyt.com"
        tags={pageKeywords}
      />
      <StructuredData type="Organization" data={OrganizationData} />
      <StructuredData type="WebSite" data={WebSiteData} />
      <StructuredData type="Service" data={ServiceData} />
      <SEOAnalysis 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;