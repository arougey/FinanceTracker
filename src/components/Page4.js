import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Page4({ formData, setFormData }) {
  const navigate = useNavigate();

  // Local state to store and update data
  const [localFormData, setLocalFormData] = useState(formData);

  const {
    // fullName,
    studentLoanAmount,
    paymentOption,
    monthlyPets,
    monthlyGroceries,
    monthlyVehicle,
    monthlyInternet,
    monthlyRent,
    monthlyDiscretionary,
    stateOfResidence,
    expectedIncome,
    deffered,
    yearsDeffered
  } = localFormData;

  console.log(localFormData);

  const UserInfoBox = ({ formData }) => {
    // Calculate total expenses based on localFormData
    const groceriesAmount = parseInt(monthlyGroceries, 10) || 0;
    const vehicleAmount = parseInt(monthlyVehicle, 10) || 0;
    const petAmount = parseInt(monthlyPets, 10) || 0;
    const internetAmount = parseInt(monthlyInternet, 10) || 0;
    const discretionaryAmount = parseInt(monthlyDiscretionary, 10) || 0;
    const rentAmount = parseInt(monthlyRent, 10) || 0;
    var totalExpenses = groceriesAmount + vehicleAmount + petAmount + internetAmount + discretionaryAmount + rentAmount;

    return (
      <div className="info-box">
        {/* <h2>{fullName}'s Information Summary</h2> */}
        <p>Student Loan Amount: ${studentLoanAmount}</p>
        <p>Student Loan Payment Occurs {paymentOption}</p>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Expected Income: {expectedIncome}</p>
      </div>
    );
  };

  const handleDashboardClick = () => {
    // Update the parent component's formData with the localFormData
    setFormData(localFormData);

    navigate('/dashboard');
  }

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-4">
          <UserInfoBox formData={localFormData} />
        </div>
        <div className="w-1/2 p-4">
          <div className="header-box">
            <h2 className="header">Retirement</h2>
            <h2 className="header">Monthly Savings</h2>
            <h2 className="header">Monthly Mortgage</h2>
          </div>
        </div>
      </div>
      <Button variant="primary" onClick={handleDashboardClick}>View Dashboard</Button>
    </>
  )
}
