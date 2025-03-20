
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import WhyExigo from '../components/WhyExigo';
import MelbourneTestimonials from '../components/MelbourneTestimonials';
import MelbourneLocation from '../components/MelbourneLocation';
import LeadMagnet from '../components/LeadMagnet';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Award, Users, Shield, Clock } from 'lucide-react';

const Melbourne = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Managed IT Services Melbourne | Exigo Tech";

    // You would typically use a helmet library for this in a production app
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Managed IT Services in Melbourne. Reliable IT support, cloud services, cybersecurity & data backup solutions for Melbourne businesses. Local team, 24/7 support.");
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Melbourne-specific content */}
        <section className="relative bg-gradient-to-r from-exigo-darkblue to-exigo-blue text-white py-20 md:py-32 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up">
                Expert Managed IT Services in Melbourne
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90" data-aos="fade-up" data-aos-delay="100">
                Empowering Melbourne businesses with reliable and scalable IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
                <a href="#contact" className="primary-button bg-white text-exigo-darkblue hover:bg-white/90">
                  Get a Free Assessment
                </a>
                <a href="#services" className="secondary-button bg-transparent text-white border-white hover:bg-white/10">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>

          {/* Melbourne skyline background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Melbourne Skyline - IT Services" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Melbourne-specific intro section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-exigo-darkblue mb-6">Melbourne's Trusted IT Partner</h2>
                <p className="text-gray-700 mb-4">
                  For over a decade, Exigo Tech has delivered exceptional managed IT services to businesses across Melbourne, from CBD startups to established enterprises in the eastern suburbs.
                </p>
                <p className="text-gray-700 mb-6">
                  Our Melbourne team understands the unique challenges faced by local businesses in industries ranging from healthcare and finance to professional services and manufacturing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-exigo-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-exigo-darkblue">Locally Based Support</h3>
                      <p className="text-gray-600">Our Melbourne office provides rapid on-site assistance when needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-exigo-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-exigo-darkblue">Melbourne Industry Expertise</h3>
                      <p className="text-gray-600">Specialists familiar with local regulations and business requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-exigo-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-exigo-darkblue">24/7 Melbourne Support</h3>
                      <p className="text-gray-600">Round-the-clock monitoring and assistance for Melbourne businesses</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Melbourne IT Support Team" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-exigo-blue text-white p-4 rounded-lg shadow-lg">
                  <div className="font-bold">100+</div>
                  <div className="text-sm">Melbourne Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Melbourne Case Study */}
        <section className="py-16 bg-exigo-gray">
          <div className="container">
            <div className="max-w-3xl mx-auto glass-card p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-exigo-blue" />
                <h2 className="text-2xl font-bold text-exigo-darkblue">Melbourne Success Story</h2>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">How We Helped a Melbourne Financial Services Firm Reduce IT Costs by 30%</h3>
              
              <p className="text-gray-700 mb-4">
                A leading Melbourne financial services firm was struggling with outdated infrastructure and frequent system outages that were impacting their operations. Their in-house IT team was overwhelmed with maintaining legacy systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-exigo-blue mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">Outdated systems causing frequent downtime and security vulnerabilities</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-exigo-blue mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">Implemented custom cloud migration and 24/7 monitoring</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-bold text-exigo-blue mb-2">Results</h4>
                  <p className="text-sm text-gray-600">30% cost reduction and 99.9% uptime achievement</p>
                </div>
              </div>
              
              <blockquote className="italic text-gray-700 border-l-4 border-exigo-blue pl-4 my-6">
                "Exigo Tech's Melbourne team understood our unique requirements and delivered a solution that not only reduced our costs but significantly improved our system reliability and security."
                <footer className="text-gray-600 mt-2 not-italic">— James Wilson, CTO, Melbourne Financial Services</footer>
              </blockquote>
              
              <a href="#contact" className="inline-block primary-button mt-4">
                Discuss Your Melbourne IT Needs
              </a>
            </div>
          </div>
        </section>

        <Services />
        <Benefits />
        <WhyExigo />
        <MelbourneTestimonials />
        <MelbourneLocation />
        <LeadMagnet />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Melbourne;
