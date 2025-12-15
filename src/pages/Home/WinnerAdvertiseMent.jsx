import { Trophy, DollarSign, Star, TrendingUp, Award, Sparkles, Crown, Target } from 'lucide-react';

const WinnerAdvertiseMent = () => {
  const recentWinners = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "UI/UX Designer",
      contest: "Design Innovation Challenge 2024",
      prize: 5000,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      date: "December 2024",
      category: "Design"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Content Writer",
      contest: "Creative Writing Excellence",
      prize: 3500,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "November 2024",
      category: "Writing"
    },
    {
      id: 3,
      name: "Aisha Patel",
      title: "Entrepreneur",
      contest: "Business Innovation Summit",
      prize: 10000,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      date: "November 2024",
      category: "Business"
    }
  ];

  const stats = [
    { icon: Trophy, label: "Total Winners", value: "2,847", color: "from-yellow-400 to-orange-500" },
    { icon: DollarSign, label: "Prizes Distributed", value: "$2.4M", color: "from-green-400 to-emerald-500" },
    { icon: Star, label: "Active Contests", value: "156", color: "from-purple-400 to-pink-500" },
    { icon: TrendingUp, label: "Success Rate", value: "94%", color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-purple-600" size={20} />
            <span className="text-purple-800 font-semibold">Success Stories</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Champions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of talented creators who have turned their passion into prizes. Your success story could be next!
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Winner Spotlight */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Crown className="text-yellow-300" size={20} />
                <span className="font-semibold">Featured Winner of the Month</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                "Dreams Do Come True!"
              </h3>
              
              <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                "I never thought my passion for design could earn me this much. CreativeArena gave me the platform to showcase my skills and compete with the best. The $10,000 prize changed my life!"
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop" 
                  alt="Winner"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <div className="font-bold text-xl">Aisha Patel</div>
                  <div className="text-purple-200">Business Innovation Winner</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-yellow-300 text-2xl font-bold">
                <Trophy size={32} />
                <span>$10,000 Prize</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
                alt="Featured Winner"
                className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition"
              />
            </div>
          </div>
        </div>

        {/* Recent Winners Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Recent Winners</h3>
            <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
              View All
              <TrendingUp size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentWinners.map((winner) => (
              <div key={winner.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={winner.image} 
                    alt={winner.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    <Trophy className="inline mr-1" size={16} />
                    Winner
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <div className="text-white">
                      <div className="text-2xl font-bold">{winner.name}</div>
                      <div className="text-purple-300">{winner.title}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {winner.category}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2">{winner.contest}</h4>
                  <p className="text-gray-600 text-sm mb-4">{winner.date}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
                      <DollarSign size={24} />
                      <span>{winner.prize.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational CTA Section */}
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
          
          <div className="relative text-center px-8 py-16 md:py-20">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Target className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">Your Turn to Shine</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Become Our Next Winner?
            </h3>
            
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Don't just dream about success—make it happen! Join our community of talented creators and start competing today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                <Award size={24} />
                Browse Contests
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-700 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                See All Winners
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 pt-8 border-t border-white border-opacity-30">
              <div>
                <div className="text-4xl font-bold text-white mb-2">1K+</div>
                <div className="text-purple-200">Monthly Winners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$50K</div>
                <div className="text-purple-200">Avg Monthly Prize</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24h</div>
                <div className="text-purple-200">Fast Payout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[
              { quote: "Life-changing experience!", author: "John D." },
              { quote: "Best decision ever!", author: "Emma S." },
              { quote: "Won $5000 in my first try!", author: "Mike R." },
              { quote: "Professional and transparent", author: "Sarah L." },
              { quote: "Amazing community support", author: "Alex K." },
              { quote: "Quick prize delivery!", author: "Lisa M." }
            ].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 min-w-[300px]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 font-medium mb-2">"{testimonial.quote}"</p>
                <p className="text-purple-600 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default WinnerAdvertiseMent;