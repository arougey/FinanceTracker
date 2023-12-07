import React, { useState } from 'react';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import ProgressBar from '../components/ProgressBar';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentLoanAmount: '',
    paymentAmount:'',
    paymentOption: '',
    monthlyPets: '',
    monthlyGroceries: '',
    monthlyVehicle: '',
    monthlyInternet: '',
    monthlyRent: '',
    monthlyDiscretionary: '',
    stateOfResidence: '',
    expectedIncome: '',
    deffered: '',
    yearsDeffered: ''

  });

  const pageComponents = [Page1, Page2, Page3, Page4];
  const totalPages = pageComponents.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    //if current page = 3 & next is clicked, setCurrentPage(4)
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-3/5 mx-auto">
      {/* dont want progress bar or buttons showin on page 4 - page four should display info from the first bit then options for data vis */}
      {currentPage !== 4 && (
        <ProgressBar
          totalPages={totalPages}
          currentPage={currentPage}
          className={`${
            currentPage === 4 ? 'opacity-50 cursor-not-allowed hidden' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        />
      )}

      {React.createElement(pageComponents[currentPage - 1], {
        formData,
        setFormData: updateFormData,
      })}

      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            (currentPage === 1 || currentPage === 4 )? 'opacity-50 cursor-not-allowed hidden' : 'bg-gray-200 hover:bg-gray-300'
          }`  }
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded text-black ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed hidden' : 'bg-gray-500 hover:bg-gray-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;