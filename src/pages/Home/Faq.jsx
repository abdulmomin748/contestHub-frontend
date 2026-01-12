import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How do I participate in a contest?",
    answer: "Simply browse our contest categories, select one that interests you, register by paying the entry fee (if applicable), and submit your work before the deadline. You'll receive confirmation and updates via email."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are secured with industry-standard encryption."
  },
  {
    id: 3,
    question: "How are winners selected?",
    answer: "Winners are chosen through a combination of expert judge evaluations and community voting, depending on the contest type. All judging criteria are clearly outlined in each contest's rules section."
  },
  {
    id: 4,
    question: "When will I receive my prize money?",
    answer: "Prize money is typically distributed within 7-14 business days after the contest results are announced. You'll need to verify your payment details in your account settings."
  },
  {
    id: 5,
    question: "Can I submit multiple entries?",
    answer: "Yes! Most contests allow multiple entries. Check the specific contest rules for entry limits and any additional fees for multiple submissions."
  },
  {
    id: 6,
    question: "What if I miss the deadline?",
    answer: "Unfortunately, late submissions cannot be accepted to maintain fairness. However, we have new contests launching daily, so you'll always find new opportunities."
  },
  {
    id: 7,
    question: "Can I get a refund on my entry fee?",
    answer: "Entry fees are non-refundable once submitted. However, if a contest is cancelled by the organizer, you'll receive a full refund within 5-7 business days."
  },
  {
    id: 8,
    question: "How do I create my own contest?",
    answer: "Upgrade to a Pro or Enterprise plan, then navigate to 'Create Contest' in your dashboard. Fill in the details, set your prize pool, and our team will review and publish it within 24 hours."
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ContestVerse
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12 bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you 24/7
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}