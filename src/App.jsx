import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductsPage from './pages/ProductsPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <ProductsPage />
      </div>
    </QueryClientProvider>
  )
}

export default App