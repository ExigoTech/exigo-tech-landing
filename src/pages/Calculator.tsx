
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Calculator as CalcIcon, DollarSign, PieChart, BarChart, TrendingDown, Shield } from 'lucide-react';

const Calculator = () => {
  const navigate = useNavigate();
  const [employeeCount, setEmployeeCount] = useState(10);
  const [monthlyITCost, setMonthlyITCost] = useState(5000);
  const [downtime, setDowntime] = useState(5);
  const [hasInHouseIT, setHasInHouseIT] = useState(true);
  
  const calculateSavings = () => {
    let currentCosts = monthlyITCost;
    
    const hourlyRate = 50;
    const downtimeCost = employeeCount * downtime * hourlyRate;
    
    const inHouseITCost = hasInHouseIT ? 8000 : 0;
    
    currentCosts += inHouseITCost;
    
    const exigoCost = employeeCount * 100 + 2000;
    
    const monthlySavings = currentCosts - exigoCost;
    const annualSavings = monthlySavings * 12;
    
    const percentSaved = ((monthlySavings / currentCosts) * 100).toFixed(0);
    
    return {
      current: currentCosts,
      exigo: exigoCost,
      monthly: monthlySavings,
      annual: annualSavings,
      percent: percentSaved
    };
  };
  
  const savings = calculateSavings();

  useEffect(() => {
    document.title = "IT Savings Calculator | Exigo Tech Melbourne";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-exigo-darkblue to-exigo-blue py-20 text-white">
          <div className="container">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-white/80 hover:text-white mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Previous Page
            </button>
            
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Calculate Your IT Savings
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                See how much your business could save by switching to Exigo Tech's managed IT services in Melbourne.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CalcIcon className="mr-3 text-exigo-blue" />
                  Your Business IT Profile
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <label className="text-lg font-medium block mb-2">
                      How many employees do you have?
                    </label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[employeeCount]}
                        min={1}
                        max={500}
                        step={1}
                        onValueChange={(val) => setEmployeeCount(val[0])}
                        className="flex-grow"
                      />
                      <Input 
                        type="number" 
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(Number(e.target.value))}
                        className="w-20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-lg font-medium block mb-2">
                      Current monthly IT expenses ($AUD)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      <Input 
                        type="number" 
                        value={monthlyITCost}
                        onChange={(e) => setMonthlyITCost(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-lg font-medium block mb-2">
                      Average monthly downtime (hours)
                    </label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[downtime]}
                        min={0}
                        max={40}
                        step={1}
                        onValueChange={(val) => setDowntime(val[0])}
                        className="flex-grow"
                      />
                      <Input 
                        type="number" 
                        value={downtime}
                        onChange={(e) => setDowntime(Number(e.target.value))}
                        className="w-20"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="inhouse" 
                      checked={hasInHouseIT}
                      onCheckedChange={(checked) => setHasInHouseIT(checked === true)}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="inhouse"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Do you have in-house IT staff?
                      </label>
                      <p className="text-sm text-muted-foreground">
                        Include salaries, benefits, training, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <PieChart className="mr-3 text-exigo-blue" />
                    Your Estimated Savings
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Current Monthly Cost</p>
                        <p className="text-2xl font-bold text-gray-900">${savings.current.toLocaleString()}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Exigo Tech Cost</p>
                        <p className="text-2xl font-bold text-exigo-blue">${savings.exigo.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-100">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium">Monthly Savings</h3>
                        <span className="text-3xl font-bold text-green-600">${savings.monthly.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Annual Savings</h3>
                        <span className="text-3xl font-bold text-green-600">${savings.annual.toLocaleString()}</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-green-500 h-4 rounded-full" 
                          style={{ width: `${Math.min(100, Number(savings.percent))}%` }}
                        ></div>
                      </div>
                      <p className="text-right mt-2 text-green-700 font-semibold">
                        {savings.percent}% Cost Reduction
                      </p>
                    </div>
                    
                    <div className="flex items-center text-blue-600">
                      <TrendingDown size={20} className="mr-2" />
                      <span className="text-sm">Results are estimates based on your inputs and industry averages</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-exigo-blue hover:bg-exigo-darkblue text-white py-6 text-lg" onClick={() => window.location.href = "tel:1300EXIGOTECH"}>
                    Call Now for a Detailed Analysis
                  </Button>
                  
                  <Button variant="outline" className="w-full py-6 text-lg" onClick={() => navigate('/melbourne#contact')}>
                    Request a Free Consultation
                  </Button>
                  
                  <Button variant="secondary" className="w-full py-6 text-lg" onClick={() => navigate('/melbourne#services')}>
                    View All Managed IT Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Businesses Choose Exigo Tech</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-exigo-blue/10 flex items-center justify-center rounded-full mb-4">
                  <DollarSign className="text-exigo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Predictable IT Costs</h3>
                <p className="text-gray-600">
                  Switch from unpredictable break-fix expenses to a fixed monthly fee covering all your IT needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-exigo-blue/10 flex items-center justify-center rounded-full mb-4">
                  <BarChart className="text-exigo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Improved Productivity</h3>
                <p className="text-gray-600">
                  Reduce downtime and technical issues that interrupt your team's workflow and impact your bottom line.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-exigo-blue/10 flex items-center justify-center rounded-full mb-4">
                  <Shield className="text-exigo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
                <p className="text-gray-600">
                  Protect your business with enterprise-grade security solutions and proactive threat monitoring.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                className="bg-exigo-blue hover:bg-exigo-darkblue text-white py-6 px-8 text-lg"
                onClick={() => navigate('/melbourne')}
              >
                Return to Melbourne IT Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
