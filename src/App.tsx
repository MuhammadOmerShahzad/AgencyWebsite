import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import SEO from './components/SEO';
import StructuredData, { OrganizationData, WebSiteData, ServiceData } from './components/StructuredData';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOAnalysis from './components/SEOAnalysis';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

// Home page component
const HomePage = () => {
  const pageTitle = "CodByt Solutions";
  const pageDescription = "Leading IT SaaS & Automation Agency specializing in SaaS development, automation workflows, and full-stack applications. Transform your business with cutting-edge technology solutions.";
  const pageKeywords = ['SaaS', 'Automation', 'Full-Stack', 'Web Development', 'IT Solutions'];

  return (
    <>
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="SaaS development, business automation, full-stack development, web development, IT solutions, React, Node.js, TypeScript, automation workflows"
        url="https://codbyt.com"
        type="website"
        tags={['SaaS', 'Automation', 'Full-Stack', 'Web Development', 'IT Solutions']}
      />
      <SEOAnalysis 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <StructuredData type="Organization" data={OrganizationData} />
      <StructuredData type="WebSite" data={WebSiteData} />
      <StructuredData type="Service" data={ServiceData} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

// Layout component that conditionally renders Header and Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <Header />}
      {children}
      {isHomePage && <Footer />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PerformanceOptimizer />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;