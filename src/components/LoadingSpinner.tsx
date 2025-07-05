import React from 'react';
import { ShoppingCart, Apple, Carrot, Milk } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'page' | 'app' | 'button';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  type = 'page',
  message = 'Loading...'
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const containerClasses = {
    page: 'fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center',
    app: 'fixed inset-0 bg-gradient-to-br from-green-50 to-emerald-50 z-50 flex items-center justify-center',
    button: 'inline-flex items-center justify-center'
  };

  if (type === 'button') {
    return (
      <div className={containerClasses[type]}>
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
      </div>
    );
  }

  if (type === 'app') {
    return (
      <div className={containerClasses[type]}>
        <div className="text-center">
          {/* ThikGro Logo Animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <span className="text-white font-bold text-3xl">🛒</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">ThikGro</h1>
            <p className="text-gray-600">Fresh Groceries, Delivered Daily</p>
          </div>

          {/* Grocery Items Animation */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Shopping Cart in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Rotating Grocery Items */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              {/* Apple */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Apple className="w-5 h-5 text-red-500" />
                </div>
              </div>
              
              {/* Carrot */}
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Carrot className="w-5 h-5 text-orange-500" />
                </div>
              </div>
              
              {/* Milk */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Milk className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              
              {/* Leaf */}
              <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-lg">🥬</span>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          <p className="text-gray-600 text-lg font-medium">Preparing your fresh experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses[type]}>
      <div className="text-center">
        {/* Grocery Cart Loading Animation */}
        <div className="relative mb-6">
          <div className={`${sizeClasses[size]} mx-auto relative`}>
            {/* Cart Body */}
            <div className="absolute inset-0 border-4 border-green-200 rounded-lg animate-pulse"></div>
            
            {/* Cart Handle */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-4 border-green-500 rounded-full animate-spin"></div>
            
            {/* Cart Items */}
            <div className="absolute inset-2 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">{message}</p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;