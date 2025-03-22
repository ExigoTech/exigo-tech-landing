
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, DollarSign, Clock } from 'lucide-react';

const MelbourneAdvantages = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="advantages">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Melbourne's Trusted Managed IT Partner</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize, Secure, and Scale Your IT with Exigo Tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cost Reduction Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-aos="fade-up">
            <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <DollarSign size={28} className="text-exigo-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce IT Costs & Downtime</h3>
            <p className="text-gray-600">
              Our managed IT services save Melbourne businesses up to 30% on IT expenses while ensuring 99.9% uptime.
            </p>
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-exigo-blue">30%</span>
                <span className="text-gray-500 text-sm">Cost Reduction</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-exigo-blue h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Shield size={28} className="text-exigo-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Your Data & Operations</h3>
            <p className="text-gray-600">
              With multi-layered cybersecurity, we protect businesses from ransomware, data breaches, and compliance risks.
            </p>
            <div className="mt-6">
              <a href="#security" className="text-exigo-blue font-medium hover:underline flex items-center">
                Explore Cybersecurity Solutions
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Scalable IT Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <TrendingUp size={28} className="text-exigo-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable IT for Growth</h3>
            <p className="text-gray-600">
              Whether you're a startup or an enterprise, our solutions grow with your business, not against it.
            </p>
            <div className="mt-6">
              <a href="#calculator" className="inline-flex items-center px-4 py-2 rounded-lg bg-exigo-blue text-white text-sm font-medium hover:bg-exigo-darkblue transition-colors">
                Calculate Your IT Savings
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Cost Estimator CTA */}
        <div className="mt-16 bg-gradient-to-r from-exigo-darkblue to-exigo-blue p-8 rounded-xl shadow-lg text-white text-center" id="calculator">
          <h3 className="text-2xl font-bold mb-4">Calculate Your IT Savings with Exigo Tech</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our managed IT services typically save Melbourne businesses 20-30% on their IT costs. 
            Use our interactive calculator to estimate your potential savings.
          </p>
          <Link to="/calculator" className="bg-white text-exigo-darkblue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
            Open IT Savings Calculator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MelbourneAdvantages;
