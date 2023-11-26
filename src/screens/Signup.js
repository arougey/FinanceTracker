import React, { useState } from 'react';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import ProgressBar from '../components/ProgressBar';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const pageComponents = [Page1, Page2, Page3];
  const totalPages = pageComponents.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-3/5 mx-auto">

       <ProgressBar totalPages={totalPages} currentPage={currentPage}/>

      {React.createElement(pageComponents[currentPage - 1], {
        formData,
        setFormData,
      })}

      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded text-black ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
