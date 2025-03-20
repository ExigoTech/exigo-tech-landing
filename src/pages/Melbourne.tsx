
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/MelbourneHero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import WhyExigo from '../components/WhyExigo';
import MelbourneTestimonials from '../components/MelbourneTestimonials';
import MelbourneLocation from '../components/MelbourneLocation';
import LeadMagnet from '../components/LeadMagnet';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import MelbourneServices from '../components/MelbourneServices';
import MelbourneAdvantages from '../components/MelbourneAdvantages';
import MelbourneProcess from '../components/MelbourneProcess';
import MelbourneComparison from '../components/MelbourneComparison';
import MelbourneFAQ from '../components/MelbourneFAQ';

const Melbourne = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Managed IT Services Melbourne | Secure & Scalable IT Solutions | Exigo Tech";

    // You would typically use a helmet library for this in a production app
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Melbourne's leading Managed IT Services provider. Proactive IT management, enterprise-grade cybersecurity, and tailored cloud solutions to help businesses scale efficiently and reduce costs.");
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
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
