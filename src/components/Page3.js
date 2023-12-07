import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page3({formData, setFormData }) {
  const handleStateOfResidenceChange = (event) => {
    const stateOfResidenceValue = event.target.value;
    setFormData({stateOfResidence: stateOfResidenceValue });
  };

  const handleExpectedIncomeChange = (event) => {
    const expectedIncomeValue = event.target.value;
    setFormData({expectedIncome: expectedIncomeValue });
  };

  const handleDefferedChange = (event) => {
    const defferedValue = event.target.value;
    setFormData({deffered: defferedValue });
  };

  const handleYearsDeffered = (event) => {
    const yearsDefferedValue = event.target.value;
    setFormData({yearsDeffered: yearsDefferedValue });
  };
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
          <Form.Label htmlFor="stateOfResidence" className="block text-lg font-semibold mb-1">State of Residence</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select
              id="stateOfResidence"
              value={formData.stateOfResidence}
              onChange={handleStateOfResidenceChange}
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
          <Form.Label htmlFor="expectedIncome" className="block text-lg font-semibold mb-1">Expected Monthly Pre-tax Income</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="expectedIncome"
              placeholder="Enter expected pre-tax income"
              value={formData.expectedIncome}
              onChange={handleExpectedIncomeChange}
              aria-label="Expected income"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="deferred" className="block text-lg font-semibold mb-1">Are your student loans deferred?</Form.Label>
          <InputGroup>
            <Form.Select
              id="deferred"
              aria-label="Select option"
              className="border rounded py-2 px-4 w-full"
              value={formData.deffered}
              onChange={handleDefferedChange}
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="yearsDeffered" className="block text-lg font-semibold mb-1">Years of Loan Deferral</Form.Label>
          <InputGroup>
            <Form.Control
              id="yearsDeffered"
              value={formData.yearsDeffered}
              onChange={handleYearsDeffered}
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
