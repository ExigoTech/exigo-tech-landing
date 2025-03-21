
import React, { useEffect, useRef, useState } from 'react';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Monitor, 
  Wifi, 
  HardDrive, 
  Laptop,
  Phone,
  Users
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  color: string;
  borderColor: string;
};

const services: Service[] = [
  {
    icon: <Server size={36} />,
    title: "Managed IT Support",
    color: "bg-blue-900/70",
    borderColor: "border-blue-500/50"
  },
  {
    icon: <Shield size={36} />,
    title: "Cybersecurity Services",
    color: "bg-green-900/70",
    borderColor: "border-green-500/50"
  },
  {
    icon: <Cloud size={36} />,
    title: "Cloud Solutions",
    color: "bg-purple-900/70",
    borderColor: "border-purple-500/50"
  },
  {
    icon: <Database size={36} />,
    title: "Data Backup & Recovery",
    color: "bg-orange-900/70",
    borderColor: "border-orange-500/50"
  },
  {
    icon: <Monitor size={36} />,
    title: "IT Strategy & Consulting",
    color: "bg-teal-900/70", 
    borderColor: "border-teal-500/50"
  },
  {
    icon: <Wifi size={36} />,
    title: "Network Infrastructure",
    color: "bg-red-900/70",
    borderColor: "border-red-500/50"
  },
  {
    icon: <HardDrive size={36} />,
    title: "Hardware Procurement",
    color: "bg-yellow-900/70",
    borderColor: "border-yellow-500/50"
  },
  {
    icon: <Laptop size={36} />,
    title: "Remote Work Solutions",
    color: "bg-indigo-900/70",
    borderColor: "border-indigo-500/50"
  },
  {
    icon: <Phone size={36} />,
    title: "Mobile Device Management",
    color: "bg-pink-900/70",
    borderColor: "border-pink-500/50"
  },
  {
    icon: <Users size={36} />,
    title: "IT Staff Augmentation",
    color: "bg-emerald-900/70",
    borderColor: "border-emerald-500/50"
  }
];

const FloatingServices = () => {
  const [visibleServices, setVisibleServices] = useState<Service[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Shuffle services
    const shuffledServices = [...services].sort(() => Math.random() - 0.5);
    
    // Initially show 7 services
    setVisibleServices(shuffledServices.slice(0, 7));
    
    // Setup interval to continuously cycle services
    intervalRef.current = setInterval(() => {
      setVisibleServices(prev => {
        const newServices = [...prev];
        // Remove first service and add a new one at the end
        newServices.shift();
        const nextService = shuffledServices[Math.floor(Math.random() * shuffledServices.length)];
        newServices.push(nextService);
        return newServices;
      });
    }, 2000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
      {visibleServices.map((service, index) => (
        <div 
          key={`${service.title}-${index}`}
          className={`relative ${service.color} border ${service.borderColor} rounded-lg p-4 backdrop-blur-md 
            flex flex-col items-center justify-center text-center gap-2 aspect-square
            transition-all duration-500 hover:scale-105 animate-float`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-white mb-2">
            {service.icon}
          </div>
          <h3 className="text-sm font-medium text-white">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FloatingServices;
