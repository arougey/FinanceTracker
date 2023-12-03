import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
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
  Metric
} from "@tremor/react";



export default function Page4({formData, setFormData }){
    const { fullName, studentLoanAmount, paymentOption, monthlyPets, monthlyGroceries, monthlyVehicle, monthlyInternet, monthlyRent, monthlyDiscretionary, stateOfResidence, expectedIncome, deffered, yearsDeffered} = formData;
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
                  <Tab>Detail</Tab>
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
                        <Metric>${studentLoanAmount}</Metric>
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
                        <div className="h-80" />
                      </Card>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-6">
                      <Card>
                        <div className="h-96" />
                      </Card>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
          </main>
      
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