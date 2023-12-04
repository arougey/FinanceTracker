import React from "react";
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
    ProgressCircle,
    Metric
} from "@tremor/react";
import RandomImage from "../components/RandomImage";
import { useNavigate } from "react-router-dom";

export default function Dashboard({formData}) {
    if (!formData || !formData.fullName) {
        return <div>Loading...</div>; // or handle this case as needed
      }
    const {
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
    } = formData;
    return (
        <>
            <main className="p-12">
                <Title style={{ color: "black" }}>Dashboard</Title>
                <Text>Here are your results.</Text>

                <TabGroup className="mt-6">
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Retirement</Tab>
                        <Tab>Savings</Tab>
                        <Tab>Loan Tracker</Tab>
                        <Tab>Budget Planner</Tab>
                        <Tab>Tips</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                                <Card>
                                    {/* Placeholder to set height */}
                                    <div className="h-33">
                                        <ProgressCircle value={100} size="lg" />
                                        <div>
                                            <Text className="font-medium">Expected Income</Text>
                                            <Text>${expectedIncome}</Text>
                                        </div>
                                    </div>

                                </Card>
                                <Card>
                                    {/* Placeholder to set height */}
                                    <div className="h-33">
                                        <ProgressCircle value={45} size="lg" />
                                        <div>
                                            <Text className="font-medium">Disposable Income</Text>
                                            <Text>$54,000</Text>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    {/* Placeholder to set height */}
                                    <div className="h-33">
                                        <Text className="font-medium">Expected State of Residence: FL</Text>
                                        <RandomImage />
                                    </div>
                                </Card>
                            </Grid>
                            <div className="mt-6">
                                <Card>
                                    <div className="h-90">
                                        <h1 style={{ textAlign: "center" }}>Expenses</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
                                            {/* Row 1 */}
                                            <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Pets</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Student Loans</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Groceries</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Sales</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>

                                            {/* Row 2 */}
                                            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Rent</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Car Note</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                                <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                                                    <Text>Discretionary</Text>
                                                    <Metric>$ 34,743</Metric>
                                                </Card>
                                            </div>
                                        </div>

                                    </div>
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
        </>
    )

}