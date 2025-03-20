
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-exigo-blue">
            <span className="font-montserrat">Exigo</span>
            <span className="text-exigo-darkblue">Tech</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-gray-800 hover:text-exigo-blue transition-colors">Home</a>
          <a href="#services" className="text-gray-800 hover:text-exigo-blue transition-colors">Services</a>
          <a href="#about" className="text-gray-800 hover:text-exigo-blue transition-colors">About Us</a>
          <a href="#contact" className="text-gray-800 hover:text-exigo-blue transition-colors">Contact</a>
          <a href="#contact" className="primary-button">Request a Quote</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-exigo-darkblue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
      >
        <div className="container py-5 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-gray-800 hover:text-exigo-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-gray-800 hover:text-exigo-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-gray-800 hover:text-exigo-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="text-gray-800 hover:text-exigo-blue transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="primary-button text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
