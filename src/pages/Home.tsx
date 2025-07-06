import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Star, Zap, Leaf, Award, CheckCircle, AlertTriangle, DollarSign, Users, Target, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [featuredProducts] = useState(products.slice(0, 8));

  const competitiveAdvantages = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Quality Over Speed',
      description: 'Hand-picked fresh produce vs rushed selections',
      detail: 'While others rush, we ensure every item meets our quality standards',
      color: 'blue',
      badge: 'Quality First'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'No Hidden Fees',
      description: 'Transparent pricing vs surge charges',
      detail: 'No peak-time markups, delivery fees, or service charges',
      color: 'green',
      badge: 'Fair Pricing'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Personal Shoppers',
      description: 'Dedicated shoppers vs automated picking',
      detail: 'Real people who care about your groceries, not robots',
      color: 'purple',
      badge: 'Human Touch'
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: 'Sustainable Delivery',
      description: 'Eco-friendly routes vs wasteful speed',
      detail: 'Optimized delivery routes that care for the environment',
      color: 'emerald',
      badge: 'Eco-Friendly'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Accurate Orders',
      description: '99.8% accuracy vs frequent mistakes',
      detail: 'Double-checked orders mean you get exactly what you ordered',
      color: 'red',
      badge: 'Precision'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Reliable Timing',
      description: 'Consistent 45-min delivery vs unpredictable waits',
      detail: 'We promise 45 minutes and deliver on time, every time',
      color: 'orange',
      badge: 'Reliable'
    }
  ];

  const problemsSolved = [
    {
      problem: "Damaged/Poor Quality Items",
      solution: "Quality-first approach with freshness guarantee",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      checkIcon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      problem: "Hidden Surge Pricing",
      solution: "Transparent, consistent pricing always",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      checkIcon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      problem: "Wrong/Missing Items",
      solution: "Personal shoppers with 99.8% accuracy",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      checkIcon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      problem: "Unpredictable Delivery Times",
      solution: "Reliable 45-minute delivery window",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      checkIcon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: 'Smart Delivery',
      description: 'Optimized 45-minute delivery that actually works',
      color: 'green'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Freshness Guarantee',
      description: 'Every item hand-selected for peak freshness',
      color: 'blue'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Personal Shoppers',
      description: 'Experienced shoppers who know quality',
      color: 'purple'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-Time Updates',
      description: 'Track your shopper and delivery in real-time',
      color: 'yellow'
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: 'Sustainable Practices',
      description: 'Eco-friendly packaging and delivery routes',
      color: 'emerald'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Fair Pricing',
      description: 'No surge pricing, hidden fees, or markups',
      color: 'green'
    }
  ];

  const stats = [
    { number: '99.8%', label: 'Order Accuracy', sublabel: 'vs 85% industry avg' },
    { number: '45min', label: 'Reliable Delivery', sublabel: 'Consistent timing' },
    { number: '50K+', label: 'Happy Customers', sublabel: '4.9★ average rating' },
    { number: '0%', label: 'Hidden Fees', sublabel: 'Transparent pricing' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🍎</div>
          <div className="absolute top-20 right-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🥕</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🥛</div>
          <div className="absolute bottom-10 right-10 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🥬</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-300 mr-2">⭐</span>
              <span className="text-sm font-medium">Quality Over Speed - Every Single Time</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Quality Groceries
              <span className="block text-yellow-300">Worth The Wait</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              While others rush and compromise quality, we deliver <strong>fresh, hand-picked groceries</strong> in a reliable 45 minutes with <strong>zero hidden fees</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/products"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Experience Quality
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/why-thikgro"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Why We're Different
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90 font-medium">{stat.label}</div>
                  <div className="text-xs opacity-75">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ThikGro is Better Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">The Problem with 10-Minute Delivery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Speed vs Quality: Why We Choose Quality
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              10-minute delivery sounds great, but at what cost? Here's why ThikGro's approach delivers better value
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Problems with Ultra-Fast Delivery
              </h3>
              {problemsSolved.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-red-900">{item.problem}</h4>
                    <p className="text-red-700 text-sm">Common issue with speed-focused services</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                ThikGro's Quality Solutions
              </h3>
              {problemsSolved.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  {item.checkIcon}
                  <div>
                    <h4 className="font-semibold text-green-900">{item.solution}</h4>
                    <p className="text-green-700 text-sm">Our quality-first approach</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                <div className="relative">
                  <div className={`flex justify-center mb-6 p-4 rounded-full bg-${advantage.color}-100 w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 bg-${advantage.color}-500 text-white text-xs px-2 py-1 rounded-full font-bold`}>
                    {advantage.badge}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {advantage.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {advantage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our service is designed for quality, reliability, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`flex justify-center mb-6 p-4 rounded-full bg-${feature.color}-100 w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 mr-2 fill-current" />
              <span className="text-sm font-medium">Hand-Picked Quality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Products, Fair Prices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every item is carefully selected by our personal shoppers for maximum freshness and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Quality Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Customers Choose Quality Over Speed
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from customers who switched from 10-minute delivery services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Former 10-min delivery user',
                review: 'I was tired of receiving bruised fruits and wrong items. ThikGro\'s quality is worth the extra 35 minutes. My groceries actually last longer now!',
                rating: 5,
                avatar: '👩‍💼',
                highlight: 'Quality over speed'
              },
              {
                name: 'Mike Chen',
                role: 'Professional Chef',
                review: 'Other services rush and make mistakes. ThikGro\'s personal shoppers understand quality ingredients. No more surprise charges either!',
                rating: 5,
                avatar: '👨‍🍳',
                highlight: 'Professional quality'
              },
              {
                name: 'Emma Davis',
                role: 'Busy Parent',
                review: 'Reliable 45-minute delivery beats unpredictable "10-minute" service that often takes an hour. Plus, no hidden fees during peak times!',
                rating: 5,
                avatar: '👩‍👧‍👦',
                highlight: 'Reliable timing'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
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
            Ready for Quality You Can Trust?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who chose quality over speed and never looked back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Quality Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Premium Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;