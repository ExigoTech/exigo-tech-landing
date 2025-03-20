
import React from 'react';
import { Headphones, Cloud, Shield, HardDrive, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card p-8 flex flex-col items-center text-center hover-scale"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 mb-6 text-exigo-blue bg-exigo-blue/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-exigo-darkblue">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href="#" 
        className="flex items-center text-exigo-blue font-medium hover:text-exigo-darkblue transition-colors group"
      >
        Learn More 
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "IT Support",
      description: "24/7 assistance for all your IT needs with rapid response times and expert solutions.",
      delay: 0
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Secure and scalable cloud solutions that enhance productivity and reduce infrastructure costs.",
      delay: 100
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive protection strategies to safeguard your business from evolving digital threats.",
      delay: 200
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Data Backup",
      description: "Reliable backup systems ensuring your critical data is safe, secure, and always recoverable.",
      delay: 300
    }
  ];

  return (
    <section id="services" className="bg-exigo-gray py-24 relative overflow-hidden">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Comprehensive IT Solutions</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Tailored services designed to optimize your business operations and enhance productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-exigo-blue/5 rounded-full"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-exigo-blue/5 rounded-full"></div>
    </section>
  );
};

export default Services;
