import React, { useState } from 'react';
import { Star, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import LoadingSpinner from './LoadingSpinner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call delay
    setTimeout(() => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setIsAdding(false);
    }, 500);
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

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="text-green-600 hover:text-green-700 transition-colors disabled:opacity-50"
          >
            {isAdding ? (
              <div className="w-5 h-5 animate-spin rounded-full border-2 border-green-600 border-t-transparent"></div>
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
        </div>
        {product.stock < 10 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Low Stock
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {product.unit}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[80px] justify-center"
          >
            {isAdding ? (
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;