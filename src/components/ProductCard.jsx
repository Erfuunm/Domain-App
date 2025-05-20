import { useState } from 'react';
import { FaStar, FaRegStar, FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';
import { MdDiscount, MdLocalShipping } from 'react-icons/md';
import { RiLeafLine } from 'react-icons/ri';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const renderRating = () => {
    return Array(5).fill(0).map((_, i) => (
      i < Math.round(product.rating) ? 
        <FaStar key={i} className="text-yellow-400" /> : 
        <FaRegStar key={i} className="text-yellow-400" />
    ));
  };

  return (
    <div 
      className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"

    >

      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-3 left-3 z-10 p-2 rounded-full transition-colors duration-200 ${isFavorite ? 'text-red-500 bg-gray-900/80' : 'text-gray-300 bg-gray-900/50 hover:bg-gray-900/80'}`}
      >
        <FaHeart className={isFavorite ? 'fill-current' : ''} />
      </button>


      {product.discountPercentage > 0 && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full flex items-center text-xs font-bold z-10">
          <MdDiscount className="mr-1" />
          {Math.round(product.discountPercentage)}% OFF
        </div>
      )}


      <div className="relative h-60 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>


      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-white truncate">{product.title}</h3>
          <span className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
            {product.category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>


        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex mr-2">
              {renderRating()}
            </div>
            <span className="text-sm text-gray-400">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <div className={`text-xs px-2 py-1 rounded-full ${product.stock > 10 ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
            {product.stock > 10 ? 'In Stock' : 'Low Stock'}
          </div>
        </div>


        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-white">${product.price.toFixed(2)}</p>
            {product.discountPercentage > 0 && (
              <p className="text-sm text-gray-400 line-through">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex space-x-2">
            <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-200 hover:scale-110">
              <FaEye className="text-blue-400" />
            </button>
            <button className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-200 hover:scale-110 shadow-lg shadow-blue-500/20">
              <FaShoppingCart />
            </button>
          </div>
        </div>


        <div className={`mt-4 pt-4 border-t border-gray-700/50 transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center">
              <MdLocalShipping className="mr-1" />
              <span>{product.shippingInformation}</span>
            </div>
            <div className="flex items-center">
              <RiLeafLine className="mr-1" />
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
