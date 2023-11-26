import React from "react";
import "tailwindcss/tailwind.css"; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page1() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          <Form.Label htmlFor="full-name" className="block text-lg font-semibold mb-1">Full Name</Form.Label>
          <InputGroup>
            <Form.Control
              id="full-name"
              placeholder="Enter full name here"
              aria-label="Full name"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="total-loans" className="block text-lg font-semibold mb-1">Total Student Loan Amount</Form.Label>
          <InputGroup>
            <Form.Control
              id="deferred-years"
              placeholder="Enter total student loans"
              aria-label="Deferred years"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
