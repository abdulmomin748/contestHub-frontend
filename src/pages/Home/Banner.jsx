import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Sparkles, Users, TrendingUp } from 'lucide-react';

const slides = [
  {
    title: "Unleash Your Creative Potential",
    subtitle: "Join thousands of creators in exciting contests",
    description: "Design, write, innovate, and win amazing prizes",
    gradient: "from-purple-600 via-pink-600 to-red-500",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    title: "Compete. Create. Conquer.",
    subtitle: "Show the world what you're made of",
    description: "Participate in design, writing, gaming, and business contests",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
  {
    title: "Build Your Creative Legacy",
    subtitle: "Connect with a global community",
    description: "Network with talented creators and grow your portfolio",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    title: "Turn Passion Into Prizes",
    subtitle: "Real rewards for real talent",
    description: "Win cash prizes, recognition, and career opportunities",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
  }
];

export default function ContestVerseHero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const CurrentIcon = slides[current].icon;

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden bg-black">
      {/* Background Images with Parallax */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient Overlay Animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient} opacity-40 mix-blend-multiply transition-all duration-1000 z-20`}
      />

      {/* Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Icon Animation */}
            <div className={`mb-6 transition-all duration-700 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1
              className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
                isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
              }`}
            >
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-2xl md:text-3xl text-cyan-300 mb-6 font-light transition-all duration-700 delay-200 ${
                isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
              }`}
            >
              {slides[current].subtitle}
            </p>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-700 delay-300 ${
                isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
              }`}
            >
              {slides[current].description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                Explore Contests
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Create Contest
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrent(idx);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-40 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-sm font-medium">Scroll</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000 z-20" />
    </div>
  );
}