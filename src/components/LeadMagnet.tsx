
import React, { useState } from 'react';
import { FileText, Check } from 'lucide-react';

const LeadMagnet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Clear form
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-24 bg-exigo-blue relative overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Download Our Free Guide to Managed IT Services
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Learn how to optimize your IT infrastructure with our expert guide. Discover strategies for cost reduction, enhanced security, and improved productivity.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">Best practices for IT infrastructure management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">Cost-saving strategies for small and medium businesses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">Security protocols to protect your business data</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-6">
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-exigo-darkblue mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">Your guide is on its way to your inbox.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-exigo-blue hover:text-exigo-darkblue underline transition-colors"
                    >
                      Request another copy
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-6 h-6 text-exigo-blue" />
                      <h3 className="text-xl font-bold text-exigo-darkblue">Get Your Free Guide</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                        
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`w-full primary-button flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            'Download Now'
                          )}
                        </button>
                        
                        <p className="text-xs text-gray-500 text-center">
                          We respect your privacy. Your information will never be shared.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white"></div>
      <div className="absolute -top-12 left-0 w-full h-24 bg-white rounded-b-[50%]"></div>
      <div className="absolute -top-12 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/5 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default LeadMagnet;
