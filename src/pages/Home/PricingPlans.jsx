import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Free",
    price: "0",
    description: "Perfect for beginners",
    features: [
      "Join 3 contests per month",
      "Basic profile",
      "Community access",
      "Email support"
    ],
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Pro",
    price: "19",
    description: "For serious creators",
    features: [
      "Unlimited contests",
      "Premium profile",
      "Priority support",
      "Analytics dashboard",
      "Early notifications"
    ],
    buttonText: "Go Pro",
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "99",
    description: "For organizations",
    features: [
      "Everything in Pro",
      "Create contests",
      "Team tools",
      "Custom branding",
      "Dedicated manager"
    ],
    buttonText: "Contact Sales"
  }
];

export default function PricingPlans() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gray-50 rounded-lg p-6 border ${
                plan.popular ? 'border-purple-600 border-2' : 'border-gray-200'
              }`}
            >
              {/* Plan Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-600">/month</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}