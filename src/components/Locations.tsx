
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LocationCardProps {
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  route: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ city, address, phone, email, image, route }) => {
  const navigate = useNavigate();
  
  return (
    <div className="glass-card overflow-hidden hover-scale">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={`Exigo Tech ${city} office - Managed IT Services ${city}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-2xl font-bold text-white mb-1">{city}</h3>
            <div className="bg-exigo-blue/80 text-white text-xs py-1 px-2 rounded-full inline-block">
              Managed IT Services {city}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
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
        
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-5 h-5 text-exigo-blue flex-shrink-0" />
          <a href={`mailto:${email}`} className="text-gray-700 hover:text-exigo-blue transition-colors">
            {email}
          </a>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => navigate(route)} 
            className="flex-1 bg-exigo-blue hover:bg-exigo-darkblue text-white font-medium py-2 px-4 rounded-md transition-all duration-300 text-center"
          >
            View {city} Services
          </button>
          <a 
            href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-all duration-300 flex items-center justify-center"
            aria-label={`View ${city} office on map`}
          >
            <ExternalLink className="w-5 h-5" />
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
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "/sydney"
    },
    {
      city: "Melbourne",
      address: "456 Corporate Avenue, Melbourne, VIC 3000",
      phone: "+61 3 9876 5432",
      email: "melbourne@exigotech.com.au",
      image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      route: "/melbourne"
    },
    {
      city: "Brisbane",
      address: "789 Technology Square, Brisbane, QLD 4000",
      phone: "+61 7 3456 7890",
      email: "brisbane@exigotech.com.au",
      image: "https://images.unsplash.com/photo-1602948900777-adc91d4491a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      route: "/brisbane"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Locations</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          With offices in Sydney, Melbourne, and Brisbane, we provide local support across Australia's major business centers.
        </p>

        {/* Map with location pins */}
        <div className="w-full h-[400px] bg-exigo-gray rounded-xl mb-16 overflow-hidden relative" data-aos="fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15067192.819542892!2d134.35250299999998!3d-25.73909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sAustralia!5e0!3m2!1sen!2sus!4v1617653455264!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Exigo Tech Office Locations"
          ></iframe>
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
              route={location.route}
            />
          ))}
        </div>
        
        {/* Service coverage areas */}
        <div className="mt-16 bg-exigo-gray p-6 md:p-10 rounded-xl" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8 text-exigo-darkblue">Our Service Coverage Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-exigo-blue">Sydney Region</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Sydney CBD</li>
                <li>North Sydney</li>
                <li>Parramatta</li>
                <li>Eastern Suburbs</li>
                <li>Western Sydney</li>
                <li>Northern Beaches</li>
                <li>All Sydney Metropolitan Area</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-exigo-blue">Melbourne Region</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Melbourne CBD</li>
                <li>Inner Suburbs</li>
                <li>Eastern Suburbs</li>
                <li>Western Suburbs</li>
                <li>Southeastern Suburbs</li>
                <li>Bayside</li>
                <li>All Melbourne Metropolitan Area</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-exigo-blue">Brisbane Region</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Brisbane CBD</li>
                <li>South Brisbane</li>
                <li>North Brisbane</li>
                <li>East Brisbane</li>
                <li>West Brisbane</li>
                <li>Gold Coast</li>
                <li>All Brisbane Metropolitan Area</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-exigo-gray/50 -z-10 transform skew-y-6"></div>
    </section>
  );
};

export default Locations;
