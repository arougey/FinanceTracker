import React, { useState } from 'react';
// import ProgressBar from '../components/ProgressBar';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
 // Import other page components as needed

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const pageComponents = [Page1,Page2,Page3]; // Add more page components here
  const totalPages = pageComponents.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* Render progress bar */}
      {/* <ProgressBar currentPage={currentPage} totalPages={totalPages} /> */}

      {/* Render the current page */}
      {React.createElement(pageComponents[currentPage - 1], {
        formData,
        setFormData,
      })}
      
      {/* Navigation buttons */}
      <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default SignUpForm;
