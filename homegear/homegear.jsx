import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Wrench, Clock, Users, Star, Mail } from 'lucide-react';

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Title Slide
    {
      title: "HomeGear AI",
      subtitle: "Your Personal Home Equipment Expert",
      content: (
        <div className="flex flex-col items-center justify-center space-y-6">
          <Smartphone size={64} className="text-purple-400" />
          <p className="text-xl text-gray-300 font-light max-w-lg text-center">
            Transform your smartphone into an intelligent home maintenance assistant
          </p>
          <div className="w-24 h-0.5 bg-purple-400 mt-8"></div>
          <p className="text-sm text-gray-400 tracking-wide">Presented by HomeGear AI Team</p>
        </div>
      )
    },
    
    // Problem Statement
    {
      title: "The Challenge",
      content: (
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Clock className="text-purple-400 mt-1 flex-shrink-0" />
            <p className="text-lg text-gray-300 font-light">New homeowners waste valuable time managing home equipment</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center mb-4">
                <img src="/api/placeholder/192/128" className="mb-4" alt="Scattered documents" />
              </div>
              <h4 className="font-medium text-gray-200 mb-2 text-center">Manual Documentation</h4>
              <p className="text-gray-400 text-center">Hours spent searching for equipment manuals, warranty information, and maintenance guides across multiple sources</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center mb-4">
                <img src="/api/placeholder/192/128" className="mb-4" alt="Repair research" />
              </div>
              <h4 className="font-medium text-gray-200 mb-2 text-center">Repair Research</h4>
              <p className="text-gray-400 text-center">Extensive time investigating equipment issues, troubleshooting steps, and potential solutions without expert guidance</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center mb-4">
                <img src="/api/placeholder/192/128" className="mb-4" alt="Service provider search" />
              </div>
              <h4 className="font-medium text-gray-200 mb-2 text-center">Service Provider Search</h4>
              <p className="text-gray-400 text-center">Difficulty finding and vetting reliable professionals, comparing quotes, and scheduling timely repairs</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center mb-4">
                <img src="/api/placeholder/192/128" className="mb-4" alt="Maintenance tracking" />
              </div>
              <h4 className="font-medium text-gray-200 mb-2 text-center">Maintenance Tracking</h4>
              <p className="text-gray-400 text-center">Complex task of monitoring multiple maintenance schedules, remembering service dates, and preventing equipment failures</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Solution Overview
    {
      title: "Our Solution",
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <Smartphone size={48} className="text-purple-400 mx-auto mb-4" />
              <p className="text-center font-medium text-gray-200">Capture</p>
              <p className="text-sm text-gray-400 text-center mt-2">Take a photo of your equipment</p>
            </div>
            <ChevronRight className="text-gray-600" />
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <Wrench size={48} className="text-purple-400 mx-auto mb-4" />
              <p className="text-center font-medium text-gray-200">Support</p>
              <p className="text-sm text-gray-400 text-center mt-2">Get instant maintenance assistance</p>
            </div>
          </div>
          <p className="text-center text-gray-300 font-light text-lg max-w-lg mx-auto">
            AI-powered solution that instantly identifies home equipment and provides comprehensive support
          </p>
        </div>
      )
    },
    
    // Key Features
    {
      title: "Key Features",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex flex-col items-center">
              <img src="/api/placeholder/192/128" className="mb-4" alt="Instant recognition" />
              <h3 className="font-medium text-gray-200 mb-3">Instant Recognition</h3>
              <p className="text-gray-400 text-center">Advanced photo-based equipment identification</p>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex flex-col items-center">
              <img src="/api/placeholder/192/128" className="mb-4" alt="Digital library" />
              <h3 className="font-medium text-gray-200 mb-3">Digital Library</h3>
              <p className="text-gray-400 text-center">Automatic manual and guide organization</p>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex flex-col items-center">
              <img src="/api/placeholder/192/128" className="mb-4" alt="Smart maintenance" />
              <h3 className="font-medium text-gray-200 mb-3">Smart Maintenance</h3>
              <p className="text-gray-400 text-center">Predictive maintenance scheduling</p>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex flex-col items-center">
              <img src="/api/placeholder/192/128" className="mb-4" alt="Pro network" />
              <h3 className="font-medium text-gray-200 mb-3">Pro Network</h3>
              <p className="text-gray-400 text-center">Verified service provider connections</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Target Market
    {
      title: "Target Market",
      content: (
        <div className="space-y-8">
          <div className="flex justify-center mb-6">
            <Users size={64} className="text-purple-400" />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="font-medium text-gray-200 mb-3 text-center">Primary Market</h3>
            <p className="text-gray-300 text-center text-lg">2 million new homeowners annually</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-center">
                <span className="block text-2xl text-purple-400 font-medium mb-2">6hrs</span>
                <span className="text-gray-400">Monthly time savings</span>
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-center">
                <span className="block text-2xl text-purple-400 font-medium mb-2">30%</span>
                <span className="text-gray-400">Repair cost reduction</span>
              </p>
            </div>
          </div>
        </div>
      )
    },
    
    // Competitive Advantage
    {
      title: "Why HomeGear AI?",
      content: (
        <div className="space-y-8">
          <div className="flex justify-center mb-6">
            <Star size={64} className="text-purple-400" />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-200 mb-2">Effortless Experience</h3>
              <p className="text-gray-400">Simplified workflow - just snap a photo and let AI handle the rest</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-200 mb-2">Strong Partnerships</h3>
              <p className="text-gray-400">Three major appliance manufacturers already onboard</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="font-medium text-gray-200 mb-2">Complete Solution</h3>
              <p className="text-gray-400">End-to-end support from identification to maintenance</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Call to Action
    {
      title: "Investment Opportunity",
      content: (
        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
            <h3 className="text-xl text-gray-200 font-medium mb-4">Join Us in Revolutionizing Home Maintenance</h3>
            <p className="text-gray-400 max-w-lg mx-auto">Partner with us to scale this innovative solution to millions of homeowners</p>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Mail className="text-purple-400" />
            <p className="text-lg text-gray-300">contact@homegearai.com</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700">
      {/* Slide Content */}
      <div className="p-12">
        <h2 className="text-3xl font-light text-gray-100 mb-8 tracking-wide">{slides[currentSlide].title}</h2>
        {slides[currentSlide].content}
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between p-6 bg-gray-800 border-t border-gray-700">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="text-gray-400" />
        </button>
        
        <div className="text-sm text-gray-400 tracking-wide">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SlideDeck;