import React from 'react';
import { Shield, Zap, Globe, HeartHandshake, BadgeCheck, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Secure Payments",
    description: "Industry-standard encryption and secure payment gateways protect your transactions",
    icon: Shield
  },
  {
    id: 2,
    title: "Instant Notifications",
    description: "Get real-time updates on contest results, new opportunities, and deadlines",
    icon: Zap
  },
  {
    id: 3,
    title: "Global Community",
    description: "Connect with talented creators from over 150 countries worldwide",
    icon: Globe
  },
  {
    id: 4,
    title: "Fair Judging",
    description: "Transparent evaluation process with expert judges and community voting",
    icon: BadgeCheck
  },
  {
    id: 5,
    title: "Creator Support",
    description: "24/7 customer service and dedicated support for all participants",
    icon: HeartHandshake
  },
  {
    id: 6,
    title: "Premium Features",
    description: "Access advanced tools, analytics, and portfolio showcasing options",
    icon: Sparkles
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose ContestVerse?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in creative competitions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-purple-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
}