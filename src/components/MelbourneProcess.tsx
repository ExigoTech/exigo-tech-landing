
import React from 'react';
import { Search, Cog, LineChart, Rocket } from 'lucide-react';

const MelbourneProcess = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Managed IT Services Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Proven 4-Step Approach to IT Success
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col md:flex-row items-center mb-16" data-aos="fade-up">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right">
              <span className="inline-block text-sm font-bold tracking-wider text-exigo-blue bg-blue-50 px-3 py-1 rounded-full mb-3">STEP 1</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Assess & Plan</h3>
              <p className="text-gray-600">
                We begin with a deep IT & security audit to identify your specific business needs, pain points, and objectives. Our experts assess your current infrastructure, security posture, and compliance requirements to develop a tailored IT strategy.
              </p>
            </div>
            
            <div className="w-16 h-16 flex-shrink-0 bg-exigo-blue rounded-full flex items-center justify-center text-white z-20 shadow-lg mb-6 md:mb-0">
              <Search size={28} />
            </div>
            
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="font-semibold text-exigo-darkblue">Key Deliverables:</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>- Comprehensive IT assessment report</li>
                  <li>- Security vulnerability analysis</li>
                  <li>- Custom IT strategy roadmap</li>
                  <li>- Budget & ROI projections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center mb-16" data-aos="fade-up">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12 text-center md:text-left">
              <span className="inline-block text-sm font-bold tracking-wider text-exigo-blue bg-blue-50 px-3 py-1 rounded-full mb-3">STEP 2</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Implement & Secure</h3>
              <p className="text-gray-600">
                Our expert team deploys tailored IT solutions and security enhancements based on the assessment findings. We implement best-practice technologies, security controls, and seamless integrations to optimize your IT environment.
              </p>
            </div>
            
            <div className="w-16 h-16 flex-shrink-0 bg-exigo-blue rounded-full flex items-center justify-center text-white z-20 shadow-lg mb-6 md:mb-0">
              <Cog size={28} />
            </div>
            
            <div className="md:w-1/2 md:pr-12 text-center md:text-right">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="font-semibold text-exigo-darkblue">Key Deliverables:</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>- Systems configuration & optimization</li>
                  <li>- Security controls implementation</li>
                  <li>- Network infrastructure upgrades</li>
                  <li>- Data migration & protection setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col md:flex-row items-center mb-16" data-aos="fade-up">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right">
              <span className="inline-block text-sm font-bold tracking-wider text-exigo-blue bg-blue-50 px-3 py-1 rounded-full mb-3">STEP 3</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimize & Automate</h3>
              <p className="text-gray-600">
                We continuously improve performance with AI-driven monitoring and proactive maintenance. Our team optimizes your systems for maximum efficiency, automates routine tasks, and provides regular performance reports.
              </p>
            </div>
            
            <div className="w-16 h-16 flex-shrink-0 bg-exigo-blue rounded-full flex items-center justify-center text-white z-20 shadow-lg mb-6 md:mb-0">
              <LineChart size={28} />
            </div>
            
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="font-semibold text-exigo-darkblue">Key Deliverables:</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>- 24/7 proactive monitoring</li>
                  <li>- Regular performance optimization</li>
                  <li>- Automated maintenance & updates</li>
                  <li>- Monthly performance reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center" data-aos="fade-up">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12 text-center md:text-left">
              <span className="inline-block text-sm font-bold tracking-wider text-exigo-blue bg-blue-50 px-3 py-1 rounded-full mb-3">STEP 4</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale & Innovate</h3>
              <p className="text-gray-600">
                We ensure your IT infrastructure evolves with your business goals. Our team provides strategic guidance, introduces new technologies, and scales your IT capabilities to support business growth and innovation.
              </p>
            </div>
            
            <div className="w-16 h-16 flex-shrink-0 bg-exigo-blue rounded-full flex items-center justify-center text-white z-20 shadow-lg mb-6 md:mb-0">
              <Rocket size={28} />
            </div>
            
            <div className="md:w-1/2 md:pr-12 text-center md:text-right">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="font-semibold text-exigo-darkblue">Key Deliverables:</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>- Quarterly technology reviews</li>
                  <li>- IT roadmap updates & planning</li>
                  <li>- Scalability recommendations</li>
                  <li>- Emerging technology adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center bg-exigo-blue hover:bg-exigo-darkblue text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Get a Free IT Assessment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MelbourneProcess;
