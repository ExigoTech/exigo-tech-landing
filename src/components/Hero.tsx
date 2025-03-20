
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-exigo-darkblue/80 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Expert Managed IT Services in Sydney, Melbourne, and Brisbane
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Empowering your business with reliable and scalable IT solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="primary-button text-lg px-8 py-4 shadow-xl hover:-translate-y-1"
            >
              Request a Quote
            </a>
            <a 
              href="#services" 
              className="secondary-button text-lg px-8 py-4 bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
            >
              Explore Services
            </a>
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
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-exigo-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-exigo-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
