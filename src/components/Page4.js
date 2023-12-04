import React, { PureComponent, useState  } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Form, InputGroup, Button } from 'react-bootstrap'

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Metric,
  DonutChart,
  BarChart
} from "@tremor/react";



export default function Page4({formData, setFormData }){
  const [interestRate, setInterestRate] = useState('');

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Interest Rate:', interestRate);
  };
  //var finalArray= [];
  function calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment){
    const valueLoanAmount= parseInt(loanAmount, 10) ||0;
    const valueInterestRate= parseFloat(interestRate / 100).toPrecision(3) / 12;
    console.log(parseFloat(valueInterestRate).toPrecision(3))
    
    var paymentsArray= [valueLoanAmount];
    //20,000
    for(let i= 0; i < (numberYears * 12); i++ ){
      //1. monthly interest
      var monthlyInterest= paymentsArray[i] * valueInterestRate;
      console.log(monthlyInterest)
      //2. principal protion of payment
      var principal= monthlyPayment - monthlyInterest;
      console.log(principal)
      //3. update remaining loan 
      var newLoanAmount= paymentsArray[i] - principal;
      console.log(newLoanAmount)
      //push new loan amount to array
      if(newLoanAmount > 0){
        paymentsArray.push(parseFloat(newLoanAmount.toPrecision(3)));
      }
    }
    console.log(paymentsArray);
    return paymentsArray;
    // for(let i= 0; i< (numberYears * 12); i++){
    //   if(i % 12 == 0){
    //     finalArray.push(paymentsArray[i])
    //   }
    // }
    // console.log(finalArray)
    //continue -- combine i%12 logic
  }

  const calculateChartData = () => {
    var finalArray= calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount);
    const chartData = [];
    for (let i = 0; i < finalArray.length; i++) {
      chartData.push({
        year: `202${i + 3}`,
        remainingBalance: finalArray[i],
      });
    }
    return chartData;
  };

  const { fullName, studentLoanAmount, paymentAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, stateOfResidence, expectedIncome, deffered, yearsDeffered} = formData;
  console.log(formData);

    const full_Name = fullName;
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

  const valueFormatter = (number) => `$ ${new Intl.NumberFormat("us").format(number).toString()}`;
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
            <p> Student Loan Payment Occurs {paymentOption}</p>
            <p> Total Expense: ${totalExpenses}</p>
            <p> Expected Income: {expectedIncome}</p>
  
          </div>

        
        );
      };



      return(
        
        

        <div> 
          <main className="p-12">
              <Title>{full_Name}'s Dashboard</Title>
              <Text>Here is the financial information that you have provided us regarding your current expenses</Text>

              <TabGroup className="mt-6">
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Student Loan Tracker</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                      <Card>
                        <Text> Groceries:</Text>
                        <Metric>${groceriesAmount}</Metric>
                        <div className="h-28" />
                      </Card>
                      <Card>
                        <Text> Vehicle:</Text>
                        <Metric>${vehicleAmount}</Metric>
                        <div className="h-28" />
                      </Card>
                      <Card>
                        <Text> Pets:</Text>
                        <Metric>${petAmount}</Metric>
                        <div className="h-28" />
                      </Card>
                      <Card>
                        <Text> Internet:</Text>
                        <Metric>${internetAmount}</Metric>
                        <div className="h-28" />
                      </Card>
                      <Card>
                        <Text> Discretionary:</Text>
                        <Metric>${discretionaryAmount}</Metric>
                        <div className="h-28" />
                      </Card>
                      <Card>
                        <Text>Rent:</Text>
                        <Metric>${rentAmount}</Metric>
                        <div className="h-28" />
                      </Card>
            
                      
                    </Grid>
                    <div className="mt-6">
                      <Card>
                      <DonutChart
                        className="mt-6"
                        data={data01}
                        category="value"
                        index="name"
                        valueFormatter={valueFormatter}
                        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                      />
                      </Card>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Card>
                      <Form.Label htmlFor="interestRate" className="block text-lg font-semibold mb-1">Enter Student Loan Interest Rate</Form.Label>
                      <InputGroup>
                        <Form.Control
                          id="interestRate"
                          placeholder="Interest Rate"
                          aria-label="Interest Rate"
                          value={interestRate}
                          onChange={handleInterestRateChange}
                          className="border rounded py-2 px-4 w-full"
                        />
                      </InputGroup>
                        {/* create an array filled with how the loan balance decreases over time
                        populate that into a bar chart. take into account taxes, pie chart for paid off vs not paid off , text for student lonad,
                        get how long the payment period is for*/}

                        {/* calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment) */}
                        {/* <p>{calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount)}</p> */}
                      </Card>
                      <Card>
                        <BarChart
                          data={calculateChartData()}
                          index="year"
                          categories={["remainingBalance"]}
                          height="h-72"
                          colors={["indigo"]}
                          marginTop="mt-4"
                        />
                      </Card>
                    </div> 
                    
                  </TabPanel>
                </TabPanels>
              </TabGroup>
          </main>
    

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