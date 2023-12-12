import React, { PureComponent, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Form, InputGroup, Button } from 'react-bootstrap'

import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Metric,
  DonutChart,
  SearchSelectItem,
  BarChart,
  AreaChart,
  SearchSelect,
  ProgressCircle,
  Callout,
  Flex
} from "@tremor/react";



export default function Page4({ formData, setFormData }) {
  const [interestRate, setInterestRate] = useState('');

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };
  const tableData = [];


  const { fullName, studentLoanAmount, paymentAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, monthlyRetirementInvestment, retirementROI, yearsUntilRetirement, stateOfResidence, expectedIncome, deffered, yearsDeffered } = formData;
  console.log(monthlyRetirementInvestment, retirementROI, yearsUntilRetirement);


  function calculateMonthlyLoanPayments(loanAmount, interestRate, numberYears, monthlyPayment) {
    const valueLoanAmount = parseInt(loanAmount, 10) || 0;
    const valueInterestRate = parseFloat(interestRate / 100).toPrecision(3) / 12;
    //console.log(parseFloat(valueInterestRate).toPrecision(3))

    var paymentsArray = [valueLoanAmount];
    for (let i = 0; i < (numberYears * 12); i++) {
      //1. monthly interest
      var monthlyInterest = paymentsArray[i] * valueInterestRate;
      //2. principal protion of payment
      var principal = monthlyPayment - monthlyInterest;
      //console.log("principal: " + principal)
      //3. update remaining loan 
      var newLoanAmount = paymentsArray[i] - principal;
      //console.log("new loan amount: " + newLoanAmount)
      //push new loan amount to array
      if (newLoanAmount > 0) {
        paymentsArray.push(parseFloat(newLoanAmount).toFixed(2));
      }
    }
    //console.log("payments arr:" + paymentsArray);
    return paymentsArray;
  }

  const calculateChartData = () => {
    //this works for monthly payments
    //if == semi do diff, if == annual do diff
    var finalArray = calculateMonthlyLoanPayments(studentLoanAmount, interestRate, 10, paymentAmount);
    const chartData = [];
    var count = 1;
    for (let i = 0; i < finalArray.length; i++) {
      if (i % 4 == 0 || (i == finalArray.length - 1)) {
        chartData.push({ year: `${2023 + count}`, RemainingBalance: finalArray[i], });
        tableData.push({ year: `${2023 + count}`, RemainingBalance: finalArray[i], });
        count = count + 1;
      }
    }
    console.log(chartData)
    console.log(tableData)
    return chartData;
  };


  //function that calculates the long term savings every year in a retirement fund with a specific interest rate and annual compounding.
  function calculateRetirement(monthlyRetirementInvestment, retirementROI, yearsUntilRetirement) {
    let yearlyRetirementInvestment = parseInt(monthlyRetirementInvestment) * 12;
    retirementROI = parseFloat(retirementROI) / 100;
    yearsUntilRetirement = parseInt(yearsUntilRetirement);
    console.log('info', yearlyRetirementInvestment, retirementROI, yearsUntilRetirement)
    const savingsPerYear = []
    for (let i = 1; i <= yearsUntilRetirement; i++) {
      let amountSaved = (yearlyRetirementInvestment / retirementROI) * (Math.pow(1 + retirementROI, i) - 1) //calculates the amount saved every year using FV of annuity formula
      savingsPerYear.push({ year: i, amountSaved });
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
  const IncomeBeforeTax = parseInt(expectedIncome, 10) || 0;



  const TaxState = stateOfResidence;
  var statefile = {
    'AL': 5.0,
    'AK': 0.0,
    'AZ': 4.5,
    'AR': 6.0,
    'CA': 9.3,
    'CO': 4.63,
    'CT': 6.99,
    'DE': 6.6,
    'FL': 0.0,
    'GA': 5.75,
    'HI': 11.0,
    'ID': 6.925,
    'IL': 4.95,
    'IN': 3.23,
    'IA': 8.53,
    'KS': 4.6,
    'KY': 5.0,
    'LA': 4.45,
    'ME': 7.15,
    'MD': 5.75,
    'MA': 5.0,
    'MI': 4.25,
    'MN': 9.85,
    'MS': 3.0,
    'MO': 5.4,
    'MT': 6.9,
    'NE': 6.84,
    'NV': 0.0,
    'NH': 0.0,
    'NJ': 10.75,
    'NM': 4.9,
    'NY': 8.82,
    'NC': 5.25,
    'ND': 2.9,
    'OH': 4.8,
    'OK': 5.0,
    'OR': 9.0,
    'PA': 3.07,
    'RI': 5.99,
    'SC': 7.0,
    'SD': 0.0,
    'TN': 0.0,
    'TX': 0.0,
    'UT': 4.95,
    'VT': 8.75,
    'VA': 5.75,
    'WA': 0.0,
    'WV': 6.5,
    'WI': 7.65,
  };
  var StateTax = statefile[TaxState];

  const IncomeAfterTax = IncomeBeforeTax * (0.01 * (100 - StateTax))

  const Needs = 0.5 * IncomeAfterTax;
  const NeedsValue = parseInt(Needs, 10) || 0;
  const Wants = 0.3 * IncomeAfterTax;
  const WantsValue = parseInt(Wants, 10) || 0;
  const Savings = 0.2 * IncomeAfterTax;
  const SavingsValue = parseInt(Savings, 10) || 0;

  const data01 = [
    { name: 'Groceries', value: groceriesAmount },
    { name: 'Vehicles', value: vehicleAmount },
    { name: 'Pets', value: petAmount },
    { name: 'Internet', value: internetAmount },
    { name: 'Discretionary', value: discretionaryAmount },
    { name: 'Rent', value: rentAmount },
  ];

  const data02 = [
    { name: 'Necessities', value: NeedsValue},
    { name: 'Wants', value: WantsValue },
    { name: 'Savings', value: SavingsValue },
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
    var totalExpenses = groceriesAmount + vehicleAmount + petAmount + internetAmount + discretionaryAmount + rentAmount;

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
          <Title color="black">Progress Paying off Student Loan</Title>
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
              remainingBalance={selectedData.RemainingBalance}
              totalLoanAmount={totalLoanAmount}
            />
          )}
        </div>
      </div>
    );
  };
  return (

    <div>
      <main className="p-12">

        <Title color="black">{full_Name}'s Dashboard</Title>
        <Text>Here is the financial information that you have provided us regarding your current expenses</Text>

        <TabGroup className="mt-6">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Student Loan Tracker</Tab>
            <Tab>Budgeting Report</Tab>
            <Tab>Retirement Tracker</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <Text> Groceries:</Text>
                  <Metric>${groceriesAmount}</Metric>
                  <ProgressCircle value={(monthlyGroceries / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card>
                  <Text> Vehicle:</Text>
                  <Metric>${vehicleAmount}</Metric>
                  <ProgressCircle value={(monthlyVehicle / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card>
                  <Text> Pets:</Text>
                  <Metric>${petAmount}</Metric>
                  <ProgressCircle value={(monthlyVehicle / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card>
                  <Text> Internet:</Text>
                  <Metric>${internetAmount}</Metric>
                  <ProgressCircle value={(monthlyVehicle / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card>
                  <Text> Discretionary:</Text>
                  <Metric>${discretionaryAmount}</Metric>
                  <ProgressCircle value={(monthlyDiscretionary / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card>
                  <Text>Rent:</Text>
                  <Metric>${rentAmount}</Metric>
                  <ProgressCircle value={(monthlyRent / (expectedIncome / 12)) * 100} size="md" />
                </Card>
              </Grid>
              <div className="mt-6">
                <Card>
                  <Title style={{ textAlign: "center" }}>Monthly Breakdown</Title>
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
                  <Form.Label htmlFor="interestRate" className="block text-lg font-semibold mb-1" color="#fff">Enter Student Loan Interest Rate</Form.Label>
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
                    <Card className="mt-6" style={{ width: '100%', maxHeight: '300px', overflowY: 'auto' }}>
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
                  <div className="w-47 p-4">
                    <LoanTracker data={tableData} totalLoanAmount={studentLoanAmount} />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <p>Budgeting</p>
              <o>Your overall monthly budget is calculated based on your monthly income</o>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card style={{ height: '10rem' }}>
                  <Text>Necessities:</Text>
                  <Metric>${NeedsValue}</Metric>
                  <ProgressCircle value={((NeedsValue) / (expectedIncome / 12)) * 100} size="md" />
                </Card>
                <Card style={{ height: '10rem' }}>
                  <Text>Wants:</Text>
                  <Metric>${WantsValue}</Metric>
                  <ProgressCircle value={(WantsValue / expectedIncome) * 100} size="md" />
                </Card>
                <Card style={{ height: '10rem' }}>
                  <Text>Savings:</Text>
                  <Metric>${SavingsValue}</Metric>
                  <ProgressCircle value={(SavingsValue / expectedIncome) * 100} size="md" />
                </Card>
              </Grid>
              <div className="mt-6" style={{ marginBottom: "30px" }}>
                <Card>
                  <Title style={{ textAlign: 'center' }}>Monthly 50-30-20 Breakdown</Title>
                  <DonutChart
                    className="mt-6"
                    data={data02}
                    category="value"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["slate", "violet", "indigo"]}
                  />
                </Card>
              </div>
              <Card className="max-w-md" style={{ margin: "auto" }}>
                <Text>Budget</Text>
                <Metric>Budget Feedback</Metric>
                <Callout className="mt-4" title="Here you go!" color="teal">
                  By following the 50-30-20 rule, your budget will be in better shape!
                </Callout>
              </Card>
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
  return (


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