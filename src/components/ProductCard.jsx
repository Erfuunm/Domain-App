import { FaStar, FaRegStar, FaShoppingCart, FaEye } from 'react-icons/fa'
import { MdDiscount } from 'react-icons/md'

const ProductCard = ({ product }) => {
  const renderRating = () => {
    const stars = []
    const fullStars = Math.floor(product.rating)
    const hasHalfStar = product.rating % 1 >= 0.5

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />)
      }
    }

    return stars
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {product.discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full flex items-center text-xs">
            <MdDiscount className="mr-1" />
            {Math.round(product.discountPercentage)}% OFF
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>
          <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3">
          {renderRating()}
          <span className="ml-2 text-sm text-gray-400">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            {product.discountPercentage && (
              <p className="text-sm text-gray-400 line-through">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex space-x-2">
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
              <FaEye className="text-blue-400" />
            </button>
            <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between text-xs text-gray-400">
          <span>Stock: {product.stock}</span>
          <span>{product.availabilityStatus}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard