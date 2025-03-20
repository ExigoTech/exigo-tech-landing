
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import WhyExigo from '../components/WhyExigo';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';
import LeadMagnet from '../components/LeadMagnet';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Exigo Tech | Managed IT Services in Sydney, Melbourne & Brisbane";

    // You would typically use a helmet library for this in a production app
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Managed IT Services in Sydney, Melbourne, and Brisbane. Reliable IT support, cloud services, cybersecurity & data backup solutions for businesses.");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <WhyExigo />
        <Testimonials />
        <Locations />
        <LeadMagnet />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
