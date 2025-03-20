
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  industry: string;
  rating: number;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, industry, rating, image }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 glass-card md:min-h-[400px] flex-1">
      <div className="text-exigo-blue mb-4">
        <Quote className="w-12 h-12 opacity-40" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
      
      <p className="text-gray-800 text-lg italic leading-relaxed mb-8">{quote}</p>
      
      <div className="mt-auto">
        {image && (
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-exigo-blue/20">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="font-semibold text-exigo-darkblue">{author}</div>
        <div className="text-exigo-blue font-medium">{company}</div>
        <div className="text-gray-500 text-sm">{industry}</div>
      </div>
    </div>
  );
};

const MelbourneTestimonials = () => {
  const testimonials = [
    {
      quote: "As a Melbourne-based healthcare provider, we needed IT services that understood our specific regulatory requirements. Exigo Tech has been exceptional in providing tailored solutions that keep our patient data secure while ensuring our systems are always operational.",
      author: "Dr. Sarah Chen",
      company: "Melbourne Health Partners",
      industry: "Healthcare",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      quote: "When our Melbourne office experienced a major system failure during our busiest season, Exigo Tech had us back up and running within hours. Their local team's quick response saved us from significant revenue loss and kept our clients happy.",
      author: "Michael Thompson",
      company: "Thompson & Associates",
      industry: "Legal Services",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "We've tried several IT providers in Melbourne, but none have matched Exigo Tech's level of service. Their proactive approach to monitoring our systems has prevented numerous potential issues and their cloud migration strategy saved us 25% on infrastructure costs.",
      author: "Rebecca Williams",
      company: "Innovative Design Co",
      industry: "Creative Agency",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<TestimonialProps[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedTestimonials([testimonials[currentIndex]]);
    } else {
      // For desktop, show current and next testimonial (or loop back to start)
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setDisplayedTestimonials([testimonials[currentIndex], testimonials[nextIndex]]);
    }
  }, [currentIndex, isMobile, testimonials]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-exigo-gray relative overflow-hidden">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Melbourne Client Success Stories</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          See what our Melbourne clients have to say about our managed IT services
        </p>

        <div className="relative mt-16 px-4">
          <div className="flex flex-col md:flex-row gap-8 transition-all duration-500">
            {displayedTestimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author} 
                company={testimonial.company}
                industry={testimonial.industry}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:bg-exigo-blue hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:bg-exigo-blue hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-exigo-blue/5 rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-exigo-blue/5 rounded-full"></div>
    </section>
  );
};

export default MelbourneTestimonials;
