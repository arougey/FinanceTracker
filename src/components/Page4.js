import React from "react";

export default function Page4({formData, setFormData }){
    const { fullName, studentLoanAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, stateOfResidence, expectedIncome, deffered, yearsDeffered} = formData;
    console.log(formData);

    const UserInfoBox = ({ formData }) => {
        const groceriesAmount = parseInt(monthlyGroceries, 10) || 0;
        const vehicleAmount = parseInt(monthlyVehicle, 10) || 0;
        const petAmount = parseInt(monthlyPets, 10) || 0;
        const internetAmount = parseInt(monthlyInternet, 10) || 0;
        const discretionaryAmount = parseInt(monthlyDiscretionary, 10) || 0;
        const rentAmount = parseInt(monthlyRent, 10) || 0;
        var totalExpenses= groceriesAmount + vehicleAmount + petAmount + internetAmount + discretionaryAmount + rentAmount;
      
        return (
          <div className="info-box">
            <h2>{fullName}'s Information Summary</h2>
            <p>Student Loan Amount: ${studentLoanAmount}</p>
            <p>Student Loan Payment Occurs {paymentOption}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Expected Income: {expectedIncome}</p>
          </div>
        );
      };

    return(
        <div className="flex">
        {/* Left side - User Information */}
        <div className="w-1/2 p-4">
          <UserInfoBox formData={formData} />
        </div>
  
        {/* Right side - Headers in a box */}
        <div className="w-1/2 p-4">
          <div className="header-box">
            <h2 className="header">Retirement</h2>
            <h2 className="header">Monthly Savings</h2>
            <h2 className="header">Monthly Mortgage</h2>
          </div>
        </div>
      </div>
    )
}