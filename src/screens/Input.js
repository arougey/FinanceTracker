import React, { useState } from 'react';
import IncomeSources from '../components/input_pages/IncomeSources';
// import ProgressBar from '../components/ProgressBar'; ????? stop chatgpt random bs
import MonthlyExpenses from '../components/input_pages/MonthlyExpenses';
import PersonalInfo from '../components/input_pages/PersonalInfo';
 // Import other page components as needed

const InputForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const pageComponents = [IncomeSources,MonthlyExpenses,PersonalInfo, Savings, TotalDebts]; // Add more page components here
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
