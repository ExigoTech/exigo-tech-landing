
import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Award, CheckCircle } from 'lucide-react';
import FloatingServices from './FloatingServices';

const MelbourneHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-20 w-64 h-64 bg-exigo-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-exigo-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content Container */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Hero Content */}
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-6 space-x-3">
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 rounded bg-exigo-blue/20 text-exigo-blue border border-exigo-blue/30 backdrop-blur-sm text-xs font-medium flex items-center">
                <Award size={14} className="mr-1" /> ISO 27001 Certified
              </div>
              <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-500 border border-amber-500/30 backdrop-blur-sm text-xs font-medium flex items-center">
                <Award size={14} className="mr-1" /> Essential 8 Compliant
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Managed IT Services Melbourne – Secure, Scalable & Future-Ready IT Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-6 font-light">
            Empowering Melbourne Businesses with Cutting-Edge IT Management & Cybersecurity
          </p>

          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>Melbourne-Based, Rapid Response IT Support</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>24/7 Monitoring, Cybersecurity, & Cloud Management</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>Cost-Effective, Fixed Monthly Pricing – No Hidden Fees</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>Tailored IT Solutions for SMBs & Enterprises</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>ISO 27001 & Essential 8 Compliant – Unmatched Security</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="primary-button text-lg px-8 py-4 shadow-xl hover:-translate-y-1 flex items-center justify-center"
            >
              Request a Free IT Audit
            </a>
            <a 
              href="#services" 
              className="secondary-button text-lg px-8 py-4 bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-8">
            <p className="text-white/80 font-bold">
              📞 Call 1300 EXIGO TECH for Immediate Assistance
            </p>
          </div>
        </div>

        {/* Right Column - Floating Services */}
        <div className={`transform transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <FloatingServices />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Award shield icon in the background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 z-0">
        <Shield size={400} className="text-exigo-blue" />
      </div>
    </section>
  );
};

export default MelbourneHero;
