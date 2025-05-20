import { FaChevronLeft, FaChevronRight, FaEllipsisH } from 'react-icons/fa';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-1 my-8">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-3 rounded-lg flex items-center ${currentPage === 1 ? 'text-gray-600 bg-gray-800 cursor-not-allowed' : 'text-white bg-gray-700 hover:bg-gray-600'}`}
      >
        <FaChevronLeft className="mr-1" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {getPageNumbers().map((page, index) => (
        page === 'ellipsis-start' || page === 'ellipsis-end' ? (
          <span key={index} className="px-4 py-2 text-gray-400">
            <FaEllipsisH />
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${currentPage === page ? 'bg-blue-600 text-white font-bold' : 'text-white bg-gray-700 hover:bg-gray-600'}`}
          >
            {page}
          </button>
        )
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-lg flex items-center ${currentPage === totalPages ? 'text-gray-600 bg-gray-800 cursor-not-allowed' : 'text-white bg-gray-700 hover:bg-gray-600'}`}
      >
        <span className="hidden sm:inline">Next</span>
        <FaChevronRight className="ml-1" />
      </button>
    </div>
  );
};

export default Pagination;
