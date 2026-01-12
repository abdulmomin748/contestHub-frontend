import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-purple-600 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center mb-3">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Privacy Policy
          </h1>
          <p className="text-center text-purple-200">
            Last Updated: January 12, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to ContestVerse. We are committed to protecting your privacy. This policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-3">We collect information you provide when you:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
            <li>Create an account</li>
            <li>Participate in contests</li>
            <li>Make payments</li>
            <li>Contact our support team</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-3">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
            <li>Manage your account and contest entries</li>
            <li>Process payments and distribute prizes</li>
            <li>Send important updates and notifications</li>
            <li>Improve our platform and services</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-700 mb-6">
            We do not sell your personal information. We may share your data with contest organizers, payment processors, and service providers who help us operate the platform. We will also share information when required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We use industry-standard security measures including encryption and secure payment processing to protect your information. However, no system is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-3">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your account</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-6">
            We use cookies to improve your experience on our platform. You can control cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">
            If you have questions about this policy, contact us at:
          </p>
          <p className="text-gray-700 mb-6">
            Email: <a href="mailto:privacy@contestverse.com" className="text-purple-600 hover:underline">privacy@contestverse.com</a><br />
            Phone: +1 (555) 123-4567
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-600">
              We may update this Privacy Policy from time to time. Continued use of our platform after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}