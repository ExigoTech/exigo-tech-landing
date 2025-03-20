
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
        service: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-exigo-gray relative overflow-hidden">
      <div className="container">
        <div className="glass-card max-w-4xl mx-auto overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-exigo-blue p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">Get Started with Exigo Tech Today</h2>
              <p className="text-white/90 mb-8">
                Ready to transform your IT infrastructure? Contact us today to discuss how our managed IT services can help your business in Sydney, Melbourne, or Brisbane.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                  <p className="text-white/90">Email: info@exigotech.com.au</p>
                  <p className="text-white/90">Phone: 1300 EXIGO TECH</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <p className="text-white/90">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-white/90">After hours support available 24/7</p>
                </div>
              </div>
              
              <div className="mt-12 hidden md:block">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-10 h-10 text-white opacity-70" />
                </div>
              </div>
            </div>
            
            <div className="p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-exigo-darkblue mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. One of our team members will be in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="secondary-button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-exigo-darkblue mb-6">Contact Us</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                      >
                        <option value="">Select a service</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Data Backup">Data Backup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-exigo-blue"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`primary-button w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-exigo-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-exigo-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default CallToAction;
