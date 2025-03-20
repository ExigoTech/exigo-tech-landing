
import React from 'react';
import { Headphones, Cloud, ShieldCheck, Database } from 'lucide-react';

const MelbourneServices = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive IT Services for Melbourne Businesses</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From 24/7 support to advanced cybersecurity, we provide all the IT solutions your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IT Support Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group" data-aos="fade-up">
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-exigo-blue/10 transition-colors">
                <Headphones size={28} className="text-exigo-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Managed IT Support</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">24/7 Melbourne-based Helpdesk & On-Site IT Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Fast Response Times – Get issues resolved within minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">IT Infrastructure monitoring, troubleshooting, & system health checks</span>
                </li>
              </ul>
              
              <a href="#contact" className="inline-flex items-center font-medium text-exigo-blue hover:text-exigo-darkblue group-hover:underline">
                Get Fast IT Support
                <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Cloud Solutions Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group" data-aos="fade-up" data-aos-delay="100">
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-exigo-blue/10 transition-colors">
                <Cloud size={28} className="text-exigo-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Solutions</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Secure & scalable Microsoft Azure & AWS Cloud Hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Hybrid cloud integration for seamless business operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Cloud migrations, remote work solutions, & SaaS management</span>
                </li>
              </ul>
              
              <a href="#contact" className="inline-flex items-center font-medium text-exigo-blue hover:text-exigo-darkblue group-hover:underline">
                Explore Cloud Solutions
                <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Cybersecurity Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group" data-aos="fade-up" data-aos-delay="200">
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-exigo-blue/10 transition-colors">
                <ShieldCheck size={28} className="text-exigo-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Cybersecurity</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">24/7 Security Monitoring & AI-Driven Threat Detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Cyber risk assessments, penetration testing & compliance audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Zero Trust Security Framework for maximum protection</span>
                </li>
              </ul>
              
              <a href="#contact" className="inline-flex items-center font-medium text-exigo-blue hover:text-exigo-darkblue group-hover:underline">
                Request a Free Security Audit
                <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Data Backup Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group" data-aos="fade-up" data-aos-delay="300">
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-exigo-blue/10 transition-colors">
                <Database size={28} className="text-exigo-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Backup & Disaster Recovery</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Automated cloud & on-premise backups for critical business data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Fast disaster recovery ensures minimal downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-exigo-blue mr-2">🔹</span>
                  <span className="text-gray-600">Ransomware-proof backup solutions</span>
                </li>
              </ul>
              
              <a href="#contact" className="inline-flex items-center font-medium text-exigo-blue hover:text-exigo-darkblue group-hover:underline">
                Secure Your Data Today
                <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Exigo Tech the Best Choice in Melbourne?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border-l-4 border-exigo-blue bg-gray-50 rounded-r-lg">
              <div className="text-2xl font-bold text-exigo-blue mb-2">1️⃣</div>
              <h4 className="font-bold text-gray-900 mb-2">Local Expertise & Fast On-Site Support</h4>
              <p className="text-gray-600 text-sm">Unlike offshore IT providers, our Melbourne-based team provides instant remote support and fast on-site assistance when needed.</p>
            </div>
            
            <div className="p-5 border-l-4 border-exigo-blue bg-gray-50 rounded-r-lg">
              <div className="text-2xl font-bold text-exigo-blue mb-2">2️⃣</div>
              <h4 className="font-bold text-gray-900 mb-2">Fixed Monthly Pricing – No Surprises</h4>
              <p className="text-gray-600 text-sm">We offer affordable managed IT packages that eliminate unexpected costs. Get enterprise-level IT solutions without breaking your budget.</p>
            </div>
            
            <div className="p-5 border-l-4 border-exigo-blue bg-gray-50 rounded-r-lg">
              <div className="text-2xl font-bold text-exigo-blue mb-2">3️⃣</div>
              <h4 className="font-bold text-gray-900 mb-2">Proactive Monitoring – 99.9% Uptime Guarantee</h4>
              <p className="text-gray-600 text-sm">We don't wait for IT issues to happen—we prevent them before they impact your business.</p>
            </div>
            
            <div className="p-5 border-l-4 border-exigo-blue bg-gray-50 rounded-r-lg">
              <div className="text-2xl font-bold text-exigo-blue mb-2">4️⃣</div>
              <h4 className="font-bold text-gray-900 mb-2">Advanced Cybersecurity & Compliance-First Approach</h4>
              <p className="text-gray-600 text-sm">With ISO 27001 & Essential 8 compliance, we ensure your business meets all Australian cybersecurity & data protection regulations.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#contact" className="primary-button inline-flex items-center">
              Get a Custom IT Strategy
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MelbourneServices;
