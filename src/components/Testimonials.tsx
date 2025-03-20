
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, image }) => {
  return (
    <div className="flex flex-col items-center text-center px-8 py-12 glass-card md:min-h-[400px] flex-1">
      <div className="text-exigo-blue mb-6">
        <Quote className="w-12 h-12 opacity-40" />
      </div>
      <p className="text-gray-800 text-lg italic leading-relaxed mb-8">{quote}</p>
      <div className="mt-auto">
        {image && (
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-exigo-blue/20">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="font-semibold text-exigo-darkblue">{author}</div>
        <div className="text-gray-500 text-sm">{company}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Exigo Tech transformed our IT infrastructure completely. Their team's expertise and responsiveness have been crucial for our business operations, especially during our rapid growth phase.",
      author: "Sarah Johnson",
      company: "Axiom Financial Group, Sydney",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Since partnering with Exigo Tech, our technical issues have decreased by 70%. Their proactive approach to IT management has allowed us to focus on our core business without technology distractions.",
      author: "David Chen",
      company: "InnovateHub, Melbourne",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The cybersecurity solutions implemented by Exigo Tech have given us peace of mind. Their 24/7 monitoring and quick response to potential threats have proven invaluable to our organization.",
      author: "Michael Roberts",
      company: "Brisbane Health Partners",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
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
        <h2 className="section-title" data-aos="fade-up">Client Success Stories</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Don't just take our word for it - see what our clients have to say about working with Exigo Tech.
        </p>

        <div className="relative mt-16 px-4">
          <div className="flex flex-col md:flex-row gap-8 transition-all duration-500">
            {displayedTestimonials.map((testimonial, index) => (
              <Testimonial 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author} 
                company={testimonial.company} 
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

export default Testimonials;
