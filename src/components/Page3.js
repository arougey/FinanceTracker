import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page3() {
  // An array of state abbreviations
  const stateAbbreviations = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL",
    "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
    "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          <Form.Label htmlFor="intended-state" className="block text-lg font-semibold mb-1">State of Residence</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select
              id="intended-state"
              aria-label="Select state"
              className="border rounded py-2 px-4 w-full"
            >
              <option value="" disabled>Select intended state</option>
              {stateAbbreviations.map((stateAbbr, index) => (
                <option key={index} value={stateAbbr}>{stateAbbr}</option>
              ))}
            </Form.Select>
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="expected-income" className="block text-lg font-semibold mb-1">Expected Pre-tax Income</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="expected-income"
              placeholder="Enter expected pre-tax income"
              aria-label="Expected income"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="deferred" className="block text-lg font-semibold mb-1">Are your student loans deferred?</Form.Label>
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
        <div className="">
          <Form.Label htmlFor="deferred-years" className="block text-lg font-semibold mb-1">Years of Loan Deferral</Form.Label>
          <InputGroup>
            <Form.Control
              id="deferred-years"
              placeholder="If yes, How many years?"
              aria-label="Deferred years"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
