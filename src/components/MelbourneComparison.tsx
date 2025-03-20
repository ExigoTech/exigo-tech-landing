
import React from 'react';
import { Check, X } from 'lucide-react';

const MelbourneComparison = () => {
  return (
    <section className="py-20 bg-gray-50" id="comparison">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Exigo Tech vs. Other Managed IT Providers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See why businesses in Melbourne choose Exigo Tech for their managed IT needs
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px]">
              <thead>
                <tr className="bg-exigo-darkblue text-white">
                  <th className="py-4 px-6 text-left w-1/3">Feature</th>
                  <th className="py-4 px-6 text-center w-1/3 bg-exigo-blue">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-lg">Exigo Tech</span>
                      <span className="text-sm opacity-80">Melbourne's Trusted IT Partner</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center w-1/3">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-lg">Competitors</span>
                      <span className="text-sm opacity-80">Other IT Providers</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Local Melbourne Support</td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <div className="flex items-center justify-center">
                      <Check size={24} className="text-green-600" />
                      <span className="ml-2 text-gray-800">24/7 Local Team</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <X size={24} className="text-red-500" />
                      <span className="ml-2 text-gray-600">Offshore Teams</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Fixed Monthly Pricing</td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <div className="flex items-center justify-center">
                      <Check size={24} className="text-green-600" />
                      <span className="ml-2 text-gray-800">Transparent Plans</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <X size={24} className="text-red-500" />
                      <span className="ml-2 text-gray-600">Hidden Costs</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Cybersecurity-First Approach</td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <div className="flex items-center justify-center">
                      <Check size={24} className="text-green-600" />
                      <span className="ml-2 text-gray-800">ISO 27001, Essential 8</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <X size={24} className="text-red-500" />
                      <span className="ml-2 text-gray-600">Basic IT Support</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Scalable IT Solutions</td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <div className="flex items-center justify-center">
                      <Check size={24} className="text-green-600" />
                      <span className="ml-2 text-gray-800">SMBs to Enterprises</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <X size={24} className="text-red-500" />
                      <span className="ml-2 text-gray-600">Limited Growth Support</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">AI-Driven IT Monitoring</td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <div className="flex items-center justify-center">
                      <Check size={24} className="text-green-600" />
                      <span className="ml-2 text-gray-800">24/7 Intelligent Automation</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <X size={24} className="text-red-500" />
                      <span className="ml-2 text-gray-600">Manual Checks</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="primary-button inline-flex items-center">
            See Why We're #1 in Melbourne
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MelbourneComparison;
