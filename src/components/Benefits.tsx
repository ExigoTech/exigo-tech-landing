
import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`flex items-start gap-5 ${isEven ? 'animate-fade-in-right' : 'animate-fade-in-left'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-exigo-blue/10 flex items-center justify-center text-exigo-blue">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-exigo-darkblue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective Solutions",
      description: "Reduce operational costs with our managed IT services compared to maintaining an in-house IT department. Pay only for what you need, when you need it."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Access to Expert Knowledge",
      description: "Our team of certified IT professionals brings diverse expertise to solve complex IT challenges and implement best practices for your business."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Resources",
      description: "Our flexible IT solutions grow with your business, allowing you to easily scale resources up or down based on your changing needs."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-exigo-darkblue">
                Why Choose Managed IT Services?
              </h2>
              <p className="text-gray-600 text-lg">
                Partnering with Exigo Tech means gaining a strategic advantage through optimized IT operations.
              </p>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <Benefit
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-exigo-blue/20 to-transparent rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="IT professionals in a modern office setup" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-exigo-blue/30 rounded-2xl z-0"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-exigo-gray to-transparent opacity-50"></div>
    </section>
  );
};

export default Benefits;
