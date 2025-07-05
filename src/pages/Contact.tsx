import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak with our customer service team',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us an email anytime',
      contact: 'support@thikgro.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-7PM'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'WhatsApp',
      description: 'Message us on WhatsApp',
      contact: '+1 (555) 987-6543',
      availability: '24/7 automated responses'
    }
  ];

  const locations = [
    {
      name: 'Downtown Store',
      address: '123 Main Street, Downtown, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sun: 7AM-10PM'
    },
    {
      name: 'Uptown Branch',
      address: '456 Oak Avenue, Uptown, NY 10002',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sun: 8AM-9PM'
    },
    {
      name: 'Suburban Location',
      address: '789 Pine Road, Suburbs, NY 10003',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Sun: 8AM-9PM'
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver Monday through Sunday from 8AM to 8PM. Same-day delivery is available for orders placed before 2PM.'
    },
    {
      question: 'Do you offer organic products?',
      answer: 'Yes! We have a wide selection of certified organic fruits, vegetables, dairy products, and pantry items.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with any product, contact us within 24 hours for a full refund or replacement.'
    },
    {
      question: 'Is there a minimum order for delivery?',
      answer: 'Our minimum order for delivery is $25. Orders over $50 qualify for free delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help with all your grocery needs. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {method.description}
                </p>
                <p className="font-semibold text-green-600 mb-2">
                  {method.contact}
                </p>
                <p className="text-xs text-gray-500">
                  {method.availability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="delivery">Delivery Issues</option>
                    <option value="product">Product Questions</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Store Locations */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-green-500" />
                  Store Locations
                </h3>
                
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        {location.name}
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                          {location.address}
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-green-500" />
                          {location.phone}
                        </p>
                        <p className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-green-500" />
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Services
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Truck className="w-6 h-6 text-green-500 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                      <p className="text-sm text-gray-600">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Same Day Delivery</h4>
                      <p className="text-sm text-gray-600">Order by 2 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <Headphones className="w-6 h-6 text-purple-500 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Always here to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            Emergency or Urgent Issues?
          </h3>
          <p className="text-red-700 mb-6">
            For urgent delivery issues, food safety concerns, or emergency support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </a>
            <a
              href="mailto:emergency@thikgro.com"
              className="border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Emergency Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;