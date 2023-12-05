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
  Table, 
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  SearchSelect,
  SearchSelectItem, 
  ProgressCircle,
  Flex

} from "@tremor/react";


export default function Page4({formData, setFormData }){
  const [interestRate, setInterestRate] = useState('');

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const tableData= [];

  function calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment){
    const valueLoanAmount= parseInt(loanAmount, 10) ||0;
    const valueInterestRate= parseFloat(interestRate / 100).toPrecision(3) / 12;
    
    var paymentsArray= [valueLoanAmount];
    for(let i= 0; i < (numberYears * 12); i++ ){
      var monthlyInterest= paymentsArray[i] * valueInterestRate;
      var principal= monthlyPayment - monthlyInterest;
      var newLoanAmount= paymentsArray[i] - principal;

      if(newLoanAmount > 0){
        paymentsArray.push(parseFloat(newLoanAmount).toFixed(2));
      }
    }
    console.log("payments arr:" + paymentsArray);
    return paymentsArray;
  }

  const calculateChartData = () => {
    //this works for monthly payments
    //if == semi do diff, if == annual do diff
    var finalArray= calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount);
    const chartData = [];
    var count = 1;
    for (let i = 0; i < finalArray.length; i++) {
      if(i % 4 == 0 || (i == finalArray.length -1)){
        chartData.push({year: `${2023 + count}`, RemainingBalance: finalArray[i],});
        tableData.push({year: `${2023 + count}`, RemainingBalance: finalArray[i],});
        count= count+1;
      }
    }
    console.log(chartData)
    console.log(tableData)
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

      const LoanProgressCircle = ({ year, remainingBalance, totalLoanAmount }) => {
        const percentagePaid = ((totalLoanAmount - remainingBalance) / totalLoanAmount) * 100;
      
        return (
          <div className="space-y-3">
            <p className="text-slate-500 text-sm text-center font-mono">Percentage of Student Loan Paid Off By {year}</p>
            <Card className="max-w-sm mx-auto">
              <Flex className="space-x-5" justifyContent="center">
                <ProgressCircle value={percentagePaid} size="md">
                  <span className="text-xs text-gray-700 font-medium">{`${percentagePaid.toFixed(2)}%`}</span>
                </ProgressCircle>
              </Flex>
            </Card>
          </div>
        );
      };

      const LoanTracker = ({ data, totalLoanAmount }) => {
        const [selectedYear, setSelectedYear] = useState(null);

        const selectedData = selectedYear ? data.find((item) => item.year === selectedYear) : null;
      
        const handleYearChange = (selectedItem) => {
          setSelectedYear(selectedItem);
        };
      
        return (
          <div className="flex flex-col">
            <div className="p-4">
              <Title>Progress Paying off Student Loan</Title>
              <SearchSelect
                label="Select Year"
                placeholder="Select A Year"
                value={selectedYear}
                onChange={handleYearChange}
                className="my-4"
              >
                {data.map((item, index) => (
                  <SearchSelectItem key={index} value={item.year}>
                    {item.year}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
      
            <div className="p-4">
              {selectedYear && (
                <LoanProgressCircle
                  year={selectedYear}
                  remainingBalance= {selectedData.RemainingBalance}
                  totalLoanAmount={totalLoanAmount}
                />
              )}
            </div>
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
                        get how long the payment period is for
                        
                        calculate semi and annual

                        create summary of each payment (with scroll bar)

                        fix floating point math

                        add costs of student loans to total cost on other pae

                        break into categories and show total wants/needs breakdown

                        use suggested 30/50/20 method

                        show breakdown of income after tax

                        */}

                        {/* calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment) */}
                        {/*implementfor semi-annual or annual payments */}
                      </Card>
                      <Card>
                      <Title>Loan Balance Over Time</Title>
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
                      <div className="flex">
                          <div className="scrollable-table-container w-53 p-4">
                          <Card className="mt-6"  style={{ width: '100%', maxHeight: '300px', overflowY: 'auto' }}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableHeaderCell>Year</TableHeaderCell>
                                  <TableHeaderCell>Remaining Balance</TableHeaderCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {tableData.map((item) => (
                                  <TableRow key={item.year}>
                                    <TableCell>{item.year}</TableCell>
                                    <TableCell>
                                      <Text>{`$${item.RemainingBalance}`}</Text>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Card>
                        </div>
                        <div  className="w-47 p-4">
                          <LoanTracker data={tableData} totalLoanAmount={studentLoanAmount} />
                        </div>
                      </div> 
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