import React from 'react';
import { UserPlus, Search, Trophy, Gift } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Sign Up Free",
    description: "Create your account in seconds and join our creative community",
    icon: UserPlus
  },
  {
    id: 2,
    title: "Find Contests",
    description: "Browse through various categories and discover contests that match your skills",
    icon: Search
  },
  {
    id: 3,
    title: "Submit Entry",
    description: "Upload your work, follow guidelines, and showcase your talent",
    icon: Trophy
  },
  {
    id: 4,
    title: "Win Prizes",
    description: "Get recognized, earn rewards, and build your creative portfolio",
    icon: Gift
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in just four simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-300 -z-10" />
                )}
                
                <div className="text-center">
                  {/* Step Number & Icon */}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center border-4 border-purple-100">
                      <Icon className="w-10 h-10 text-purple-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}