
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Clock, Wifi } from 'lucide-react';

const MelbourneLocation = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="location">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Melbourne Office</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Centrally located to provide rapid on-site support across Melbourne
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Map and Image - Large Column */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <div className="rounded-xl overflow-hidden shadow-lg mb-6 h-80">
              {/* This would be replaced with an actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096118!2d144.9559541153414!3d-37.81711724221534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2s456%20Collins%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1623142098892!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Exigo Tech Melbourne Office Location"
                aria-label="Map showing Exigo Tech's Melbourne office location"
              ></iframe>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Exigo Tech Melbourne Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Contact Information - Smaller Column */}
          <div className="lg:col-span-2 glass-card p-8" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-exigo-darkblue mb-6">Melbourne Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-exigo-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-exigo-darkblue">Address</p>
                  <p className="text-gray-700">456 Corporate Avenue</p>
                  <p className="text-gray-700">Melbourne, VIC 3000</p>
                  <a 
                    href="https://goo.gl/maps/A7B3CD4E5F6G7H8J9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-exigo-blue hover:underline flex items-center mt-1 text-sm"
                  >
                    Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-exigo-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-exigo-darkblue">Phone</p>
                  <a 
                    href="tel:+61398765432" 
                    className="text-gray-700 hover:text-exigo-blue transition-colors"
                  >
                    +61 3 9876 5432
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Local Melbourne number</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-exigo-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-exigo-darkblue">Email</p>
                  <a 
                    href="mailto:melbourne@exigotech.com.au" 
                    className="text-gray-700 hover:text-exigo-blue transition-colors"
                  >
                    melbourne@exigotech.com.au
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Melbourne support team</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-exigo-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-exigo-darkblue">Office Hours</p>
                  <p className="text-gray-700">Monday - Friday: 8:30 AM - 5:30 PM</p>
                  <p className="text-gray-700">After Hours Support: Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Wifi className="w-6 h-6 text-exigo-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium text-exigo-darkblue">Coverage Area</p>
                  <p className="text-gray-700">Melbourne CBD, Inner Suburbs, Greater Melbourne</p>
                  <p className="text-sm text-gray-500 mt-1">Rapid response within 2 hours for Melbourne CBD</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="primary-button w-full text-center flex justify-center"
              >
                Contact Melbourne Team
              </a>
            </div>
          </div>
        </div>
        
        {/* Melbourne Service Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-xl shadow-md p-6 text-center" data-aos="fade-up">
            <div className="text-3xl font-bold text-exigo-blue mb-1">100+</div>
            <div className="text-gray-700">Melbourne Clients</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl font-bold text-exigo-blue mb-1">15</div>
            <div className="text-gray-700">Melbourne IT Experts</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl font-bold text-exigo-blue mb-1">10+</div>
            <div className="text-gray-700">Years in Melbourne</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl font-bold text-exigo-blue mb-1">99.9%</div>
            <div className="text-gray-700">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MelbourneLocation;
