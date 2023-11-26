// import React, { useState } from 'react';
// // import ProgressBar from '../components/ProgressBar';
// import Page1 from '../components/Page1';
// import Page2 from '../components/Page2';
// import Page3 from '../components/Page3';
//  // Import other page components as needed

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const pageComponents = [Page1,Page2,Page3]; // Add more page components here
//   const totalPages = pageComponents.length;

//   const [currentPage, setCurrentPage] = useState(1);

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div>
//       {/* Render progress bar */}
//       {/* <ProgressBar currentPage={currentPage} totalPages={totalPages} /> */}

//       {/* Render the current page */}
//       {React.createElement(pageComponents[currentPage - 1], {
//         formData,
//         setFormData,
//       })}
      
//       {/* Navigation buttons */}
//       <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
//       <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
//     </div>
//   );
// };

// export default SignUpForm;
import React, { useState } from 'react';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const pageComponents = [Page1, Page2, Page3]; // Add more page components here
  const totalPages = pageComponents.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
