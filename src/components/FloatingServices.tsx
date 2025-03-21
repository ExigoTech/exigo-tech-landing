
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
  const [displayServices, setDisplayServices] = useState<Service[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a pool of services with duplicates to ensure continuous flow
    const servicePool = [...services, ...services, ...services];
    setDisplayServices(servicePool);
    
    // No need for interval-based cycling as we'll use CSS animation for continuous flow
  }, []);
  
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/80 z-10"></div>
      
      <div className="absolute inset-x-0 h-[2000px] grid grid-cols-3 gap-4 floating-services">
        {displayServices.map((service, index) => (
          <div 
            key={`${service.title}-${index}`}
            className={`${service.color} border ${service.borderColor} rounded-lg p-4 backdrop-blur-md 
              flex flex-col items-center justify-center text-center gap-2 h-[150px]
              transition-transform hover:scale-105 hover:z-20`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-white mb-2">
              {service.icon}
            </div>
            <h3 className="text-sm font-medium text-white">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingServices;
