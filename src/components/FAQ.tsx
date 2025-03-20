
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our cybersecurity and managed IT services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex items-center mb-6">
            <HelpCircle size={24} className="text-exigo-blue mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Common Questions</h3>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                What cybersecurity services does Exigo Tech offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Exigo Tech provides comprehensive cybersecurity services including vulnerability assessments, penetration testing, 24/7 security monitoring, incident response, and security awareness training for employees. Our solutions are tailored to businesses of all sizes across Sydney, Melbourne, and Brisbane.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                How quickly can you respond to a security incident?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our dedicated security operations center operates 24/7, with an average response time of under 15 minutes for critical security incidents. We employ automated detection systems combined with expert human analysis to ensure rapid identification and mitigation of threats.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                What makes Exigo Tech different from other cybersecurity providers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Exigo Tech combines local expertise with global security standards. Our team holds industry-leading certifications (CISSP, CEH, CISM) and we've been recognized with multiple awards including the ARN Innovation Award 2024 for security excellence. We provide customized solutions rather than one-size-fits-all approaches.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                Do you offer compliance assistance for regulations like GDPR or the Privacy Act?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our security experts can help your business achieve and maintain compliance with various regulatory frameworks including Australia's Privacy Act, GDPR for international operations, PCI DSS for payment processing, and industry-specific requirements. We provide both technical solutions and documentation support.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                What size businesses do you typically work with?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We serve businesses of all sizes, from small operations with 5-10 employees to large enterprises with 500+ staff. Our solutions are scalable and customizable to meet the specific needs and budget constraints of each client. We pride ourselves on providing enterprise-grade security that's accessible to SMBs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                Do you offer ongoing training for our staff?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely. We offer comprehensive security awareness training programs that can be customized to your organization's needs. These include regular phishing simulations, security best practices workshops, and role-specific training for IT staff and managers. Our training materials are updated regularly to address emerging threats.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
