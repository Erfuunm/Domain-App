import { FaExclamationTriangle } from 'react-icons/fa'

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-lg max-w-md mx-auto mt-10 flex items-center">
      <FaExclamationTriangle className="mr-3 text-xl" />
      <div>
        <h3 className="font-bold">Error loading products</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage