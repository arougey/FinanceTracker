import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export default function Page4({formData, setFormData }){
    const { fullName, studentLoanAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, stateOfResidence, expectedIncome, deffered, yearsDeffered} = formData;
    console.log(formData);

    
    const groceriesAmount = parseInt(monthlyGroceries, 10) || 0;
    const vehicleAmount = parseInt(monthlyVehicle, 10) || 0;
    const petAmount = parseInt(monthlyPets, 10) || 0;
    const internetAmount = parseInt(monthlyInternet, 10) || 0;
    const discretionaryAmount = parseInt(monthlyDiscretionary, 10) || 0;
    const rentAmount = parseInt(monthlyRent, 10) || 0;

  const data01 = [
    { name: 'Groceries', value: groceriesAmount },
    { name: 'Vehicles', value: vehicleAmount },
    { name: 'Pets', value: petAmount },
    { name: 'Internet', value: internetAmount },
    { name: 'Discretionary', value: discretionaryAmount },
    { name: 'Rent', value: rentAmount },
  ];

  const data02 = [
    { name: 'Groceries', value: groceriesAmount },
    { name: 'Vehicles', value: vehicleAmount },
    { name: 'Pets', value: petAmount },
    { name: 'Internet', value: internetAmount },
    { name: 'Discretionary', value: discretionaryAmount },
    { name: 'Rent', value: rentAmount },
  ];

    
    const UserInfoBox = ({ formData }) => {
        const groceriesAmount = parseInt(monthlyGroceries, 10) || 0;
        const vehicleAmount = parseInt(monthlyVehicle, 10) || 0;
        const petAmount = parseInt(monthlyPets, 10) || 0;
        const internetAmount = parseInt(monthlyInternet, 10) || 0;
        const discretionaryAmount = parseInt(monthlyDiscretionary, 10) || 0;
        const rentAmount = parseInt(monthlyRent, 10) || 0;
        var totalExpenses= groceriesAmount + vehicleAmount + petAmount + internetAmount + discretionaryAmount + rentAmount;
      
        return (
          <Sidebar>
          <Menu>
          <div className="info-box">
            <h2>{fullName}'s Information Summary</h2>
            <MenuItem>Student Loan Amount: ${studentLoanAmount}</MenuItem>
            <MenuItem> Student Loan Payment Occurs {paymentOption}</MenuItem>
            <MenuItem> Total Expense: ${totalExpenses}</MenuItem>
            <MenuItem> Expected Income: {expectedIncome}</MenuItem>
  
          </div>

          </Menu>
          </Sidebar>
        );
      };



      return(
        


        <div> 
          <h1> User Dashboard </h1>
          <UserInfoBox formData={formData} />
      
          <PieChart width={730} height={250}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}   labelLine={true} fill="#8884d8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} Label="name" fill="#82ca9d" />
        </PieChart>

        </div>
        );


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