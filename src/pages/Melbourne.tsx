
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/MelbourneHero';
import MelbourneAdvantages from '../components/MelbourneAdvantages';
import MelbourneServices from '../components/MelbourneServices';
import MelbourneProcess from '../components/MelbourneProcess';
import MelbourneTestimonials from '../components/MelbourneTestimonials';
import MelbourneComparison from '../components/MelbourneComparison';
import MelbourneLocation from '../components/MelbourneLocation';
import MelbourneFAQ from '../components/MelbourneFAQ';
import LeadMagnet from '../components/LeadMagnet';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Melbourne = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Managed IT Services Melbourne | Secure & Scalable IT Solutions | Exigo Tech";

    // You would typically use a helmet library for this in a production app
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Melbourne's leading Managed IT Services provider. Proactive IT management, enterprise-grade cybersecurity, and tailored cloud solutions to help businesses scale efficiently and reduce costs.");
    }

    // Add CSS for animations if not already present
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes floatUpwards {
        0% { transform: translateY(100%); }
        100% { transform: translateY(-100%); }
      }
      
      .floating-services {
        animation: floatUpwards 60s linear infinite;
      }
    `;
    document.head.appendChild(styleElement);

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Cleanup
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <MelbourneAdvantages />
        <MelbourneServices />
        <MelbourneProcess />
        <MelbourneTestimonials />
        <MelbourneComparison />
        <MelbourneLocation />
        <MelbourneFAQ />
        <LeadMagnet />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Melbourne;
