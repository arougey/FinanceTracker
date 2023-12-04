import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Page2({formData, setFormData }) {
  const handlePaymentOptionChange = (event) => {
    const paymentOptionValue = event.target.value;
    setFormData({paymentOption: paymentOptionValue });
  };

  const handleMonthlyRentChange = (event) => {
    const monthlyRentValue = event.target.value;
    setFormData({monthlyRent: monthlyRentValue });
  };

  const handleMonthlyPetsChange = (event) => {
    const monthlyPetsValue = event.target.value;
    setFormData({monthlyPets: monthlyPetsValue });
  };

  const handleMonthlyGroceriesChange = (event) => {
    const monthlyGroceriesValue = event.target.value;
    setFormData({monthlyGroceries: monthlyGroceriesValue });
  };

  const handleMonthlyVehicleChange = (event) =>{
    const monthlyVehicleValue= event.target.value;
    setFormData({monthlyVehicle: monthlyVehicleValue})
  }

  const handleMonthlyInternetChange = (event) =>{
    const monthlyInternetValue= event.target.value;
    setFormData({monthlyInternet: monthlyInternetValue})
  }

  const handleMonthlyDiscretionaryChange = (event) =>{
    const monthlyDiscretionaryValue= event.target.value;
    setFormData({monthlyDiscretionary: monthlyDiscretionaryValue})
  }
const handlePaymentAmount = (event)=>{
  const paymentValue= event.target.value;
  setFormData({paymentAmount: paymentValue})
}



  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%]"> 
        <div className="mb-3">
          <Form.Label htmlFor="paymentOption" className="block text-lg font-semibold mb-1">Do you intend to pay off student loans on a monthly, semi-annual, or annual basis?</Form.Label>
          <InputGroup>
            <Form.Select
              aria-label="Select option"
              value={formData.paymentOption}
              className="border rounded py-2 px-4 w-full"
              onChange={handlePaymentOptionChange}
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option value="monthly">Monthly Payments</option>
              <option value="semi-annual">Semi-Annual Payments</option>
              <option value="annual">Annual Payments</option>
            </Form.Select>
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="paymentAmount" className="block text-lg font-semibold mb-1">Student Loan Payment Amount </Form.Label>
          <InputGroup>
            <Form.Control
              id="paymentAmount"
              placeholder="Enter Payment Amount"
              aria-label="Payment Amount"
              value={formData.paymentAmount}
              onChange={handlePaymentAmount}
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyRent" className="block text-lg font-semibold mb-1">Monthly Rent </Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyRent"
              placeholder="Enter monthly cost of rent"
              aria-label="Deferred years"
              value={formData.monthlyRent}
              onChange={handleMonthlyRentChange}
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyPets" className="block text-lg font-semibold mb-1">Monthly Pets</Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyPets"
              placeholder="Enter monthly pets cost"
              aria-label="Monthly pets"
              value={formData.monthlyPest}
              onChange={handleMonthlyPetsChange}
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyGroceries" className="block text-lg font-semibold mb-1">Monthly Groceries</Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyGroceries"
              placeholder="Enter monthly groceries cost"
              aria-label="Monthly groceries"
              value={formData.monthlyGroceries}
              onChange={handleMonthlyGroceriesChange}
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyVehicle" className="block text-lg font-semibold mb-1">Monthly Vehicle Costs</Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyVehicle"
              placeholder="Enter monthly vehicle costs"
              value={formData.monthlyVehicle}
              onChange={handleMonthlyVehicleChange}
              aria-label="Monthly vehicle costs"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyInternet" className="block text-lg font-semibold mb-1">Monthly Internet Costs</Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyInternet"
              placeholder="Enter monthly internet costs"
              value={formData.monthlyInternet}
              onChange={handleMonthlyInternetChange}
              aria-label="Monthly internet costs"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="monthlyDiscretionary" className="block text-lg font-semibold mb-1">Monthly Discretionary Costs</Form.Label>
          <InputGroup>
            <Form.Control
              id="monthlyDiscretionary"
              placeholder="Enter monthly discretionary costs"
              value={formData.monthlyDiscretionary}
              onChange={handleMonthlyDiscretionaryChange}
              aria-label="Monthly discretionary costs"
              className="border rounded py-2 px-4 w-full"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
