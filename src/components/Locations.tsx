
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationCardProps {
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ city, address, phone, email, image }) => {
  return (
    <div className="glass-card overflow-hidden hover-scale">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${city} office`} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-exigo-darkblue">{city}</h3>
        
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="w-5 h-5 text-exigo-blue flex-shrink-0 mt-1" />
          <p className="text-gray-700">{address}</p>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <Phone className="w-5 h-5 text-exigo-blue flex-shrink-0" />
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-exigo-blue transition-colors">
            {phone}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-exigo-blue flex-shrink-0" />
          <a href={`mailto:${email}`} className="text-gray-700 hover:text-exigo-blue transition-colors">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

const Locations = () => {
  const locations = [
    {
      city: "Sydney",
      address: "123 Business Park Drive, North Sydney, NSW 2060",
      phone: "+61 2 8765 4321",
      email: "sydney@exigotech.com.au",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "Melbourne",
      address: "456 Corporate Avenue, Melbourne, VIC 3000",
      phone: "+61 3 9876 5432",
      email: "melbourne@exigotech.com.au",
      image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      city: "Brisbane",
      address: "789 Technology Square, Brisbane, QLD 4000",
      phone: "+61 7 3456 7890",
      email: "brisbane@exigotech.com.au",
      image: "https://images.unsplash.com/photo-1602948900777-adc91d4491a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Locations</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          With offices in Sydney, Melbourne, and Brisbane, we provide local support across Australia's major business centers.
        </p>

        {/* Map placeholder - would be replaced with a real map integration */}
        <div className="w-full h-[400px] bg-exigo-gray rounded-xl mb-16 overflow-hidden relative" data-aos="fade-up">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Australia map" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-exigo-darkblue text-lg font-semibold bg-white/80 px-4 py-2 rounded-md">
              Interactive map would be integrated here
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              city={location.city}
              address={location.address}
              phone={location.phone}
              email={location.email}
              image={location.image}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-exigo-gray/50 -z-10 transform skew-y-6"></div>
    </section>
  );
};

export default Locations;
