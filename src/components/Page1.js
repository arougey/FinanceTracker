import React from "react";
import "tailwindcss/tailwind.css"; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page1() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/5">
        <div className="mb-3">
          <Form.Label htmlFor="first-name" className="block text-lg font-semibold mb-1">First Name</Form.Label>
          <InputGroup>
            <Form.Control
              id="first-name"
              placeholder="Enter first name here"
              aria-label="First name"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="expected-income" className="block text-lg font-semibold mb-1">Expected Pre-tax Income</Form.Label>
          <InputGroup>
            <Form.Control
              id="expected-income"
              placeholder="Enter expected pre-tax income here"
              aria-label="Expected income"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="deferred" className="block text-lg font-semibold mb-1">Are your student loans deffered?</Form.Label>
          <InputGroup>
            <Form.Select
              aria-label="Select option"
              className="border rounded py-2 px-4 w-full"
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="deferred-years" className="block text-lg font-semibold mb-1">Years of Loan Deferral</Form.Label>
          <InputGroup>
            <Form.Control
              id="deferred-years"
              placeholder="If yes, How many years are they deferred?"
              aria-label="Deferred years"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
