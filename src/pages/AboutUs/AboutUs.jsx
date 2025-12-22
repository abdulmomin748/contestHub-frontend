import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: The Vision */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Where Talent Meets{" "}
                <span className="text-blue-600">Opportunity.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ContestHub was born out of a simple idea: that every creative
                mind deserves a stage, regardless of their background. We've
                built a ecosystem where designers, writers, and innovators can
                turn their passion into recognized success.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                  View Contests
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Collaboration"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full -z-0 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section: Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-2">500+</h2>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                Contests Hosted
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-2">10k+</h2>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                Active Users
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-2">$50k</h2>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                Prizes Awarded
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-2">98%</h2>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Values We Stand By
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We operate with three core principles to ensure our platform
              remains the best in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:border-blue-200 transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity First</h3>
              <p className="text-gray-500 leading-relaxed">
                Our payment and judging systems are transparent, ensuring every
                winner is chosen fairly and paid instantly.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:border-blue-200 transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Driven</h3>
              <p className="text-gray-500 leading-relaxed">
                We listen to our creators and participants to build tools that
                actually solve their real-world creative problems.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl bg-white hover:border-blue-200 transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Pure Innovation</h3>
              <p className="text-gray-500 leading-relaxed">
                We provide the latest tech to host writing, coding, and design
                contests with ease and high performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
