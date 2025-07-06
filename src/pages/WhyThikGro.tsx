import React from 'react';
import { CheckCircle, AlertTriangle, Clock, Shield, DollarSign, Users, Target, TrendingUp, Star, Award, Zap, Leaf } from 'lucide-react';

const WhyThikGro: React.FC = () => {
  const competitorProblems = [
    {
      service: "10-Minute Delivery Apps",
      problems: [
        "Damaged/bruised produce from rushing",
        "Hidden surge pricing during peak hours",
        "Frequent wrong or missing items",
        "Unpredictable delivery times (often 30-60 min)",
        "Poor customer service",
        "Limited product selection",
        "No quality guarantee"
      ],
      icon: "⚡",
      color: "red"
    },
    {
      service: "Traditional Grocery Stores",
      problems: [
        "Time-consuming shopping trips",
        "Limited operating hours",
        "Crowded stores and long lines",
        "Heavy lifting and transportation",
        "Parking hassles",
        "Impulse buying pressure",
        "No delivery option"
      ],
      icon: "🏪",
      color: "orange"
    }
  ];

  const thikgroAdvantages = [
    {
      title: "Quality-First Approach",
      description: "Every item hand-selected by experienced personal shoppers",
      details: [
        "Trained shoppers who know quality produce",
        "Freshness checks on every item",
        "Expiration date verification",
        "Damage-free handling and packaging"
      ],
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      color: "blue"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, surge pricing, or surprise charges",
      details: [
        "Same prices 24/7 - no peak hour markups",
        "Clear delivery fees upfront",
        "No service charges or tips required",
        "Price match guarantee"
      ],
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      color: "green"
    },
    {
      title: "Reliable 45-Minute Delivery",
      description: "Consistent timing you can actually count on",
      details: [
        "Realistic time estimates we actually meet",
        "Real-time tracking and updates",
        "Optimized delivery routes",
        "Weather and traffic considerations"
      ],
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      color: "purple"
    },
    {
      title: "99.8% Order Accuracy",
      description: "Double-checked orders mean you get what you ordered",
      details: [
        "Personal shoppers verify each item",
        "Photo confirmation for substitutions",
        "Quality control before packaging",
        "Easy returns for any issues"
      ],
      icon: <Target className="w-8 h-8 text-red-500" />,
      color: "red"
    },
    {
      title: "Sustainable Practices",
      description: "Eco-friendly delivery that cares for the environment",
      details: [
        "Optimized routes reduce carbon footprint",
        "Reusable and recyclable packaging",
        "Local sourcing when possible",
        "Minimal food waste practices"
      ],
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      color: "emerald"
    },
    {
      title: "Exceptional Customer Service",
      description: "Real people who care about your experience",
      details: [
        "24/7 customer support",
        "Personal shopper communication",
        "Easy refunds and replacements",
        "Proactive issue resolution"
      ],
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      color: "indigo"
    }
  ];

  const comparisonData = [
    {
      feature: "Delivery Time",
      thikgro: "Reliable 45 minutes",
      competitors: "Promised 10 min, often 30-60 min",
      advantage: "Consistent & predictable"
    },
    {
      feature: "Product Quality",
      thikgro: "Hand-picked by experts",
      competitors: "Rushed selection, often damaged",
      advantage: "Superior freshness"
    },
    {
      feature: "Pricing",
      thikgro: "Transparent, no hidden fees",
      competitors: "Surge pricing, hidden charges",
      advantage: "Fair & honest"
    },
    {
      feature: "Order Accuracy",
      thikgro: "99.8% accuracy rate",
      competitors: "85% industry average",
      advantage: "Nearly perfect orders"
    },
    {
      feature: "Customer Service",
      thikgro: "24/7 human support",
      competitors: "Limited chatbot support",
      advantage: "Real people helping"
    },
    {
      feature: "Product Selection",
      thikgro: "500+ premium products",
      competitors: "Limited quick-pick items",
      advantage: "Full grocery selection"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">The Smart Choice for Grocery Delivery</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why ThikGro Beats 10-Minute Delivery
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Speed isn't everything. Discover why quality, reliability, and fair pricing matter more than empty promises.
          </p>
        </div>
      </section>

      {/* Problems with Competitors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Hidden Problems with "Fast" Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ultra-fast delivery sounds great in theory, but here's what customers actually experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {competitorProblems.map((competitor, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{competitor.icon}</span>
                  <h3 className="text-2xl font-bold text-red-900">{competitor.service}</h3>
                </div>
                <div className="space-y-3">
                  {competitor.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ThikGro Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How ThikGro Solves These Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality-first approach addresses every pain point of modern grocery delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thikgroAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`flex justify-center mb-6 p-4 rounded-full bg-${advantage.color}-100 w-20 h-20 mx-auto`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {advantage.description}
                </p>
                <div className="space-y-3">
                  {advantage.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Side-by-Side Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how ThikGro stacks up against the competition
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 p-6 font-bold text-gray-900">
              <div>Feature</div>
              <div className="text-green-600">ThikGro</div>
              <div className="text-red-600">Competitors</div>
              <div className="text-blue-600">Our Advantage</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-4 p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="font-semibold text-gray-900">{row.feature}</div>
                <div className="text-green-600 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {row.thikgro}
                </div>
                <div className="text-red-600 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {row.competitors}
                </div>
                <div className="text-blue-600 font-medium">{row.advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Stories from Switchers
            </h2>
            <p className="text-xl text-gray-600">
              Customers who left 10-minute delivery services for ThikGro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Jennifer Martinez",
                role: "Working Mother",
                story: "I was using a 10-minute delivery app for months. Half my orders were wrong, and the produce was always bruised. ThikGro's 45-minute delivery gives me perfect groceries every time. Worth the wait!",
                savings: "Saved $200/month on wasted groceries",
                rating: 5
              },
              {
                name: "David Kim",
                role: "Small Business Owner",
                story: "The surge pricing on other apps was killing my budget. During peak hours, I'd pay 3x normal prices. ThikGro's transparent pricing means I know exactly what I'll pay, every time.",
                savings: "Saved 40% on grocery costs",
                rating: 5
              },
              {
                name: "Lisa Thompson",
                role: "Senior Citizen",
                story: "Other services were unreliable - sometimes 10 minutes, sometimes 2 hours. ThikGro always delivers in 45 minutes. I can plan my day around their reliable schedule.",
                savings: "Peace of mind is priceless",
                rating: 5
              },
              {
                name: "Carlos Rodriguez",
                role: "Chef & Food Blogger",
                story: "Quality matters in my profession. ThikGro's personal shoppers understand ingredients. They pick the best produce and even suggest alternatives when something isn't fresh enough.",
                savings: "Professional-grade ingredients",
                rating: 5
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Verified Switcher
                  </span>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{story.story}"
                </p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900">{story.name}</p>
                      <p className="text-gray-600 text-sm">{story.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold text-sm">{story.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who chose quality, reliability, and fair pricing over empty speed promises
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your First Quality Order
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-colors">
              See Our Quality Guarantee
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyThikGro;