import React, { useState } from 'react';
import { Star, Plus, ShoppingCart, Heart, Eye, Check } from 'lucide-react';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call delay
    setTimeout(() => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setIsAdding(false);
      setIsAdded(true);
      
      // Reset "Added" state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 500);
  };

  const handleQuickAdd = async () => {
    setIsAdding(true);
    
    // Simulate API call delay for hover quick add
    setTimeout(() => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setIsAdding(false);
      setIsAdded(true);
      
      // Reset "Added" state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 300);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getDiscountPercentage = () => {
    // Simulate some products having discounts
    const discounts = [0, 5, 10, 15, 20];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  const discount = getDiscountPercentage();
  const originalPrice = discount > 0 ? product.price / (1 - discount / 100) : product.price;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discount}% OFF
        </div>
      )}

      {/* Stock Badge */}
      {product.stock < 10 && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Only {product.stock} left
        </div>
      )}

      {/* Added Success Badge */}
      {isAdded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full z-20 animate-pulse shadow-lg">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Added!</span>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden">
        {/* Image Skeleton */}
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">🛒</div>
          </div>
        )}
        
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white bg-opacity-90 text-gray-700 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            
            <button className="p-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full text-gray-700 hover:text-blue-500 transition-colors">
              <Eye className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleQuickAdd}
              disabled={isAdding || product.stock === 0 || isAdded}
              className={`p-2 rounded-full transition-colors disabled:opacity-50 ${
                isAdded 
                  ? 'bg-green-500 text-white' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {isAdding ? (
                <div className="w-5 h-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : isAdded ? (
                <Check className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews})
          </span>
          {product.rating >= 4.5 && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
              Top Rated
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              {discount > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">
              {product.unit}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdding || product.stock === 0 || isAdded}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] justify-center hover:shadow-lg transform hover:-translate-y-0.5 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isAdding ? (
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : product.stock === 0 ? (
              <span className="text-xs">Out of Stock</span>
            ) : isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>

        {/* Freshness Indicator */}
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="flex items-center text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
            Fresh Today
          </span>
          {product.stock <= 5 && product.stock > 0 && (
            <span className="text-orange-600 font-medium">
              Hurry! Only {product.stock} left
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;