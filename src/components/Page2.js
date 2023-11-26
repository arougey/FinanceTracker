import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page2() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          <Form.Label htmlFor="payment-option" className="block text-lg font-semibold mb-1">Do you intend to pay off student loans on a monthly, semi-annual, or annual basis?</Form.Label>
          <InputGroup>
            <Form.Select
              aria-label="Select option"
              className="border rounded py-2 px-4 w-full"
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option value="monthly">Monthly Payments</option>
              <option value="semi-annual">Semi-Annual Payments</option>
              <option value="annual">Annual Payments</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="rent" className="block text-lg font-semibold mb-1">Monthly Rent </Form.Label>
          <InputGroup>
            <Form.Control
              id="rent"
              placeholder="Enter monthly cost of rent"
              aria-label="Deferred years"
              className="border rounded py-2 px-4 w-[50%]" 
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="pets" className="block text-lg font-semibold mb-1">Monthly Pets</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="pets"
              placeholder="Enter monthly pets cost"
              aria-label="Monthly pets"
              className="border rounded py-2 px-4 w-[50%]" 
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="groceries" className="block text-lg font-semibold mb-1">Monthly Groceries</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="groceries"
              placeholder="Enter monthly groceries cost"
              aria-label="Monthly groceries"
              className="border rounded py-2 px-4 w-[50%]" 
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="vehicle-costs" className="block text-lg font-semibold mb-1">Monthly Vehicle Costs</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="vehicle-costs"
              placeholder="Enter monthly vehicle costs"
              aria-label="Monthly vehicle costs"
              className="border rounded py-2 px-4 w-[50%]" 
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="internet-costs" className="block text-lg font-semibold mb-1">Monthly Internet Costs</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="internet-costs"
              placeholder="Enter monthly internet costs"
              aria-label="Monthly internet costs"
              className="border rounded py-2 px-4 w-[50%]"
            />
          </InputGroup>
        </div>
        <div className="">
          <Form.Label htmlFor="discretionary-costs" className="block text-lg font-semibold mb-1">Monthly Discretionary Costs</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="discretionary-costs"
              placeholder="Enter monthly discretionary costs"
              aria-label="Monthly discretionary costs"
              className="border rounded py-2 px-4 w-[50%]" 
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
