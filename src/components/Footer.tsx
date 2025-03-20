
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-exigo-darkblue text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold">
                <span className="text-white">Exigo</span>
                <span className="text-exigo-blue">Tech</span>
              </a>
              <p className="mt-3 text-white/70">
                Empowering businesses with reliable and scalable IT solutions across Sydney, Melbourne, and Brisbane.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-exigo-blue/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-exigo-blue/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-exigo-blue/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-exigo-blue/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">IT Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Cloud Services</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Cybersecurity</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Data Backup & Recovery</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Network Management</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">IT Consulting</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-exigo-blue mt-1 flex-shrink-0 mr-3" />
                <div>
                  <p className="text-white/70">Sydney: 123 Business Park Dr, North Sydney, NSW 2060</p>
                  <p className="text-white/70 mt-1">Melbourne: 456 Corporate Ave, Melbourne, VIC 3000</p>
                  <p className="text-white/70 mt-1">Brisbane: 789 Technology Sq, Brisbane, QLD 4000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-exigo-blue flex-shrink-0 mr-3" />
                <a href="tel:1300394468" className="text-white/70 hover:text-white transition-colors">
                  1300 EXIGO TECH
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-exigo-blue flex-shrink-0 mr-3" />
                <a href="mailto:info@exigotech.com.au" className="text-white/70 hover:text-white transition-colors">
                  info@exigotech.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications/Awards */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-b border-white/10 mb-8">
          <div className="bg-white/10 px-4 py-2 rounded-md">
            <p className="text-sm text-white/90">Microsoft Partner</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-md">
            <p className="text-sm text-white/90">ISO 27001 Certified</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-md">
            <p className="text-sm text-white/90">ITIL Certified</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-md">
            <p className="text-sm text-white/90">AWS Partner</p>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Exigo Tech. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
