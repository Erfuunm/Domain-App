import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchProducts = async (skip = 0, limit = 10) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  )
  return data
}

export const useProducts = (skip, limit) => {
  return useQuery({
    queryKey: ['products', skip, limit],
    queryFn: () => fetchProducts(skip, limit),
    keepPreviousData: true,
    staleTime: 5000,
  })
}