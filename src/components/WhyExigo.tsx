
import React from 'react';
import { MapPin, Clock, Settings, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-14 h-14 bg-exigo-blue rounded-xl flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-exigo-darkblue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyExigo = () => {
  const features = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Local Expertise",
      description: "Our teams in Sydney, Melbourne, and Brisbane provide personalized service with local knowledge.",
      delay: 0
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Support",
      description: "Around-the-clock technical assistance ensures your systems run smoothly at all times.",
      delay: 100
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Customized Solutions",
      description: "We design IT strategies tailored specifically to your business needs and objectives.",
      delay: 200
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Experienced Team",
      description: "Our certified professionals bring years of industry experience to solve your IT challenges.",
      delay: 300
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-exigo-gray to-white py-24 relative">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">What Sets Us Apart</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          At Exigo Tech, we combine technical excellence with client-focused service to deliver exceptional IT solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-exigo-gray"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white"></div>
    </section>
  );
};

export default WhyExigo;
