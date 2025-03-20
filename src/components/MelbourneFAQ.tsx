
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MelbourneFAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs – Your IT Questions, Answered</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our Melbourne managed IT services
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
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We work with a wide range of industries throughout Melbourne, including finance, healthcare, retail, manufacturing, professional services, education, and not-for-profit organizations. Our team has specialized experience in meeting the unique IT and compliance requirements of regulated industries such as financial services and healthcare.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                How do your cybersecurity services protect businesses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer multi-layered security, including real-time threat detection, penetration testing, compliance audits, and AI-driven risk management. Our comprehensive approach includes endpoint protection, email security, network security, data encryption, and security awareness training. We're aligned with Australian government security frameworks including the Essential Eight and ACSC guidelines.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                What makes your Managed IT Services different?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Unlike traditional IT support, we proactively manage & secure your IT environment, ensuring zero downtime & maximum business efficiency. Our Melbourne-based team combines local expertise with enterprise-grade solutions at SMB-friendly prices. We focus on business outcomes, not just technical metrics, with a strategic approach that aligns IT with your business goals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                How quickly can you respond to IT issues in Melbourne?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our Melbourne clients receive immediate remote support with response times typically under 15 minutes for critical issues. For on-site support, we guarantee 2-hour response times within the Melbourne CBD and inner suburbs, with same-day service throughout Greater Melbourne. Our 24/7 monitoring often allows us to detect and resolve issues before they impact your business.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                What sizes of businesses do you work with in Melbourne?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We serve Melbourne businesses of all sizes, from startups with 5-10 employees to enterprises with 500+ staff. Our solutions are scalable and customizable to meet the specific needs and budget constraints of each client. We pride ourselves on providing enterprise-grade technology that remains accessible and affordable for smaller businesses.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                How does your pricing work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer transparent, fixed monthly pricing based on your business size and specific IT needs. Our managed service plans include all routine maintenance, monitoring, and support, eliminating surprise costs. We provide tiered service levels to match different budgets and requirements, with the flexibility to scale as your business grows. All plans include our core cybersecurity protections and 24/7 support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-exigo-blue">
                Do you offer compliance assistance for Australian regulations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our security experts can help your Melbourne business achieve and maintain compliance with various regulatory frameworks including Australia's Privacy Act, GDPR for international operations, PCI DSS for payment processing, and industry-specific requirements. We provide both technical solutions and documentation support to ensure you meet all necessary compliance obligations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 flex justify-center">
            <a href="#contact" className="inline-flex items-center font-medium text-exigo-blue hover:text-exigo-darkblue">
              Speak with an IT Expert
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MelbourneFAQ;
