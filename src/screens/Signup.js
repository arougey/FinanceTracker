import React, { useState } from 'react';
// import ProgressBar from '../components/ProgressBar';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SignUpForm = () => {
  const navigate = useNavigate(); // Create a navigate function for redirection

  const [formData, setFormData] = useState({
    firstName: '',
    expectedIncome: '',
    deferred:'',
    yrsDeferred:'',
    monthlyLoans:'',
    monthlyPets:'',
    monthlyGroceries:'',
    monthlyVehicles:'',
    monthlyInternet:'',
    monthlyDiscretionary:'',
    intendedState: '',
    
  });

  const pageComponents = [Page1, Page2, Page3]; // Add more page components here
  const totalPages = pageComponents.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage === totalPages) {
      handleSubmit();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    navigate('/submission-success');
  };

  return (
    <div>
      {/* Render progress bar */}
      {/* <ProgressBar currentPage={currentPage} totalPages={totalPages} /> */}
      {React.createElement(pageComponents[currentPage - 1], {
        formData,
        setFormData,
      })}
      
      <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        {currentPage === totalPages ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default SignUpForm;
