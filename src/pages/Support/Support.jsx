import React from "react";

const Support = () => {
  return (
    <div>
      <div className="bg-white min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help?
            </h1>
            <p className="text-gray-500">
              Everything you need to know about ContestHub rules and payments.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How do I claim my prize money?
              </h3>
              <p className="text-gray-600">
                Once a winner is declared, the prize money is automatically
                transferred to your platform wallet within 48 hours.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I participate in multiple contests?
              </h3>
              <p className="text-gray-600">
                Yes! There is no limit to how many contests a user can join,
                provided they pay the individual registration fees.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What is the contest "Approved" status?
              </h3>
              <p className="text-gray-600">
                It means our admin team has verified the contest details and it
                is now live for public registration.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-blue-50 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Still have questions?
            </h2>
            <p className="text-blue-700 mb-6 text-sm">
              Our support team is available 24/7 to assist you with any issues.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
