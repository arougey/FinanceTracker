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
  BarChart,
  AreaChart,
} from "@tremor/react";



export default function Page4({formData, setFormData }){
  const [interestRate, setInterestRate] = useState('');

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const { fullName, studentLoanAmount, paymentAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, monthlyRetirementInvestment, retirementROI, yearsUntilRetirement, stateOfResidence, expectedIncome, deffered, yearsDeffered} = formData; 
  console.log(monthlyRetirementInvestment, retirementROI, yearsUntilRetirement);


  function calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment){
    const valueLoanAmount= parseInt(loanAmount, 10) ||0;
    const valueInterestRate= parseFloat(interestRate / 100).toPrecision(3) / 12;
    //console.log(parseFloat(valueInterestRate).toPrecision(3))
    
    var paymentsArray= [valueLoanAmount];
    for(let i= 0; i < (numberYears * 12); i++ ){
      //1. monthly interest
      var monthlyInterest= paymentsArray[i] * valueInterestRate;
      //2. principal protion of payment
      var principal= monthlyPayment - monthlyInterest;
      //console.log("principal: " + principal)
      //3. update remaining loan 
      var newLoanAmount= paymentsArray[i] - principal;
      //console.log("new loan amount: " + newLoanAmount)
      //push new loan amount to array
      if(newLoanAmount > 0){
        paymentsArray.push(parseFloat(newLoanAmount).toFixed(2));
      }
    }
    //console.log("payments arr:" + paymentsArray);
    return paymentsArray;
  }

  const calculateChartData = () => {
    //this works for monthly payments
    var finalArray= calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount);
    const chartData = [];
    var count = 1;
    for (let i = 0; i < finalArray.length; i++) {
      if(i % 4 == 0){
        chartData.push({
          year: `${2023 + count}`,
          RemainingBalance: finalArray[i],
        });
        count= count+1;
      }
    }
    //console.log(chartData)
    return chartData;
  };

  //function that calculates the long term savings every year in a retirement fund with a specific interest rate and annual compounding.
  function calculateRetirement(monthlyRetirementInvestment, retirementROI, yearsUntilRetirement){
    console.log('info', monthlyRetirementInvestment, retirementROI, yearsUntilRetirement)
    monthlyRetirementInvestment = parseInt(monthlyRetirementInvestment);
    retirementROI = parseFloat(retirementROI) / 100;
    yearsUntilRetirement = parseInt(yearsUntilRetirement);
    const savingsPerYear = []
    for(let i=0;i<=yearsUntilRetirement;i++){
      let amountSaved = (monthlyRetirementInvestment*12/retirementROI)*(Math.pow(1+retirementROI,i)-1) //calculates the amount saved every year using FV of annuity formula
      savingsPerYear.push({year: i, amountSaved});
    }
    console.log("savings", savingsPerYear);
    return savingsPerYear;
  }

  const retirementSavings = calculateRetirement(monthlyRetirementInvestment, retirementROI, yearsUntilRetirement)//calls the above function and gets the array above using data from the form

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
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

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
                  <Tab>Retirement Tracker</Tab>
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
                      
                        {/* create an array filled with how the loan balance decreases over time
                        populate that into a bar chart. take into account taxes, pie chart for paid off vs not paid off , text for student lonad,
                        get how long the payment period is for
                        
                        calculate semi and annual

                        
                        */}

                        {/* calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment) */}
                        {/* <p>{calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount)}</p> */}
                      </Card>
                      <Card>
                        <BarChart
                          data={calculateChartData()}
                          index="year"
                          categories={["RemainingBalance"]}
                          valueFormatter={dataFormatter}
                          height="h-72"
                          colors={["indigo"]}
                          marginTop="mt-4"
                        />
                      </Card>
                    </div> 
                  </TabPanel>
                  <TabPanel>
                    <AreaChart
                      data={retirementSavings}
                      index="year"
                      categories={["amountSaved"]}
                      colors={["blue"]}
                      showLegend={true}
                      yAxisWidth={56}
                      className="h-96 mt-8"
                    />
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