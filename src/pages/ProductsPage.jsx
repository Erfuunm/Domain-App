import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  const skip = (currentPage - 1) * productsPerPage

  const { data, isLoading, isError, error } = useProducts(skip, productsPerPage)

  if (isLoading) return <LoadingSpinner />
  if (isError) return <ErrorMessage message={error.message} />

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalItems={data.total}
          itemsPerPage={productsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ProductsPage