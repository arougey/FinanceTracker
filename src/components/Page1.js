import React from "react";
import "tailwindcss/tailwind.css"; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page1({formData, setFormData }) {

  const handleFullNameChange = (event) => {
    const fullNameValue = event.target.value;
    setFormData({fullName: fullNameValue });
  };

  const handleStudentLoanAmountChange = (event) =>{
    const studentLoanValue= event.target.value;
    setFormData({studentLoanAmount: studentLoanValue});
  }



  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          <Form.Label htmlFor="fullName" className="block text-lg font-semibold mb-1">Full Name</Form.Label>
          <InputGroup>
            <Form.Control
              id="fullName"
              placeholder="Enter full name here"
              aria-label="Full name"
              value={formData.fullName}
              className="border rounded py-2 px-4 w-full"
              onChange={handleFullNameChange}
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="studentLoanAmount" className="block text-lg font-semibold mb-1">Total Student Loan Amount</Form.Label>
          <InputGroup>
            <Form.Control
              id="studentLoanAmount"
              placeholder="Enter total student loans"
              aria-label="Deferred years"
              value={formData.studentLoanAmount}
              className="border rounded py-2 px-4 w-full"
              onChange={handleStudentLoanAmountChange}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
