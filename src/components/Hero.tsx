
import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  message: z.string().optional(),
});

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Contact Request Submitted",
      description: "We'll get back to you as soon as possible!",
    });
    form.reset();
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-20 w-64 h-64 bg-exigo-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-exigo-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content Container */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Hero Content */}
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center mb-6 space-x-3">
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded bg-exigo-blue/20 text-exigo-blue border border-exigo-blue/30 backdrop-blur-sm text-xs font-medium flex items-center">
                <Award size={14} className="mr-1" /> ARN Innovation Awards 2024 Winner
              </div>
              <div className="px-3 py-1 rounded bg-amber-500/20 text-amber-500 border border-amber-500/30 backdrop-blur-sm text-xs font-medium flex items-center">
                <Award size={14} className="mr-1" /> Australian Cyber Awards 2023 Finalist
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Secure Your Business with Exigo Tech's Cybersecurity Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-6 font-light">
            Cyber threats are real and growing - Protect your business today with our enterprise-grade security solutions.
          </p>

          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>24/7 security monitoring and real-time threat detection</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>Comprehensive security assessments and vulnerability scanning</span>
            </li>
            <li className="flex items-center text-white/80">
              <CheckCircle size={20} className="text-exigo-blue mr-2 flex-shrink-0" />
              <span>Expert team with industry-leading certifications</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="primary-button text-lg px-8 py-4 shadow-xl hover:-translate-y-1 flex items-center justify-center"
            >
              Get Protected Today
            </a>
            <a 
              href="#services" 
              className="secondary-button text-lg px-8 py-4 bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className={`transform transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Request a Security Consultation</h3>
              <p className="text-white/70 text-sm">Fill in the form below and our cybersecurity experts will contact you for a free consultation.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} className="bg-white/20 border-white/10 text-white placeholder:text-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="bg-white/20 border-white/10 text-white placeholder:text-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="0412 345 678" {...field} className="bg-white/20 border-white/10 text-white placeholder:text-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your security needs..." 
                          {...field} 
                          className="bg-white/20 border-white/10 text-white placeholder:text-white/50 min-h-[80px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-exigo-blue hover:bg-exigo-darkblue text-white py-6">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Award shield icon in the background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 z-0">
        <Shield size={400} className="text-exigo-blue" />
      </div>
    </section>
  );
};

export default Hero;
