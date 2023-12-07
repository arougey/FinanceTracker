import React from 'react';
import "tailwindcss/tailwind.css"; 

const ProgressBar = ({ totalPages, currentPage }) => {
    return (
      <div className="flex items-center justify-between w-full bg-gray-200 rounded overflow-hidden h-8 mt-4" style={{marginBottom:"40px"}}>
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index + 1}
            className={`flex-1 h-full ${
              index + 1 <= currentPage ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };
  

export default ProgressBar;
