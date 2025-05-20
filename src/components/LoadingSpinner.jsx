import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 space-y-4">
      <div className="relative">
        <FaSpinner className="animate-spin text-5xl text-blue-500" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping"></div>
      </div>
      <p className="text-gray-400 text-lg font-medium">Loading Products...</p>
    </div>
  );
};

export default LoadingSpinner;
