import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate app initialization
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-emerald-50 z-50 flex items-center justify-center">
        <div className="text-center">
          {/* ThikGro Logo Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
              <span className="text-white font-bold text-4xl">🛒</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3 animate-fadeIn">ThikGro</h1>
            <p className="text-gray-600 text-xl animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              Fresh Groceries, Delivered Daily
            </p>
          </div>

          {/* Enhanced Grocery Items Animation */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Shopping Cart in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-white text-2xl">🛒</span>
              </div>
            </div>

            {/* Rotating Grocery Items */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
              {/* Fresh Items */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <span className="text-2xl">🍎</span>
                </div>
              </div>
              
              <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🥕</span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🥛</span>
                </div>
              </div>
              
              <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <span className="text-2xl">🥬</span>
                </div>
              </div>

              {/* Additional items */}
              <div className="absolute top-1/4 right-1/4 transform translate-x-2 -translate-y-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '2s' }}>
                  <span className="text-lg">🍌</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-2 translate-y-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shadow-md animate-pulse" style={{ animationDelay: '2.5s' }}>
                  <span className="text-lg">🍇</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-600 text-sm mt-2">{loadingProgress}% Complete</p>
          </div>

          {/* Loading Messages */}
          <div className="space-y-2">
            <p className="text-gray-700 text-lg font-medium">
              {loadingProgress < 30 && "Stocking fresh produce..."}
              {loadingProgress >= 30 && loadingProgress < 60 && "Preparing your cart..."}
              {loadingProgress >= 60 && loadingProgress < 90 && "Almost ready..."}
              {loadingProgress >= 90 && "Welcome to ThikGro!"}
            </p>
            
            {/* Animated Dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fadeIn">{children}</div>;
};

export default AppLoader;