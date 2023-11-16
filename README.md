Goal: Make a react app using some data visualization in order to help map out the early finances of a new grad

Overall Goal:
Create a website that tracks finances for recently graduated college students as well as allocate a certain amount (inputted by the user) that will go to retirement.

Examples of things to track:
Pets
Student loans
Groceries
Are your student loans deferred?
Expected Income
Expected Internet Costs
Expected Housing Costs
Expected Motor Vehicle costs
Interest rate for student loans
Estimate of Discretionary costs monthly (gaming, concerts, subscriptions)
Intended state to live in

Pages
Input Page: page with all of the input boxes for all the possible data that could possibly be inputted. 
Retirement Page: page with all the future retirement costs and benefits
Monthly Savings Page: page with a map of how much is saved each month
Monthly Mortgage page: page with all possible loans to be payed off on a monthly schedule 

### 1. Project Setup
- **Technology Stack:** React for the frontend, a state management library like Redux or Context API for managing application state, and D3.js or Recharts for data visualization.

### 2. Pages and Features
#### Input Page
- **User Input Fields:** Create forms for users to input their financial data. Include fields for:
  - Student loans, interest rates, and deferment status.
  - Expected income, housing, internet, and vehicle costs.
  - Monthly discretionary spending (e.g., entertainment, subscriptions).
  - State of residence (could affect tax calculations).
  - Pet expenses.
- **Data Validation:** Ensure data entered is valid and provide user feedback for incorrect inputs.

#### Retirement Page
- **Retirement Calculator:** Allow users to input their retirement savings goals, current savings, and expected annual contribution.
- **Visualizations:** Show projections of retirement savings growth using charts. Include variables like age, expected retirement age, and estimated return rate.

#### Monthly Savings Page
- **Savings Tracker:** Display how much the user is saving each month. Include visualizations that compare planned vs. actual savings.
- **Goal Setting:** Enable users to set and adjust savings goals.

#### Monthly Mortgage Page
- **Loan Tracker:** List all loans with details such as monthly payments, remaining balance, and interest rates.
- **Amortization Schedule:** Visualize the schedule of payments with the amount going towards the principal vs. interest.

### 3. Data Visualization
- Use libraries like D3.js or Recharts for dynamic and interactive charts.
- Visualizations could include bar graphs for monthly expenses, pie charts for expense categories, line graphs for loan repayment progress, and projection graphs for retirement savings.

### 4. Additional Features
- **Budget Planner:** Help users create a monthly budget based on their inputted data.
- **Advice and Tips:** Offer financial tips based on user data, like ways to reduce expenses or pay off loans faster.
- **Notifications:** Remind users of upcoming payments or when they exceed their budget.
- **Mobile Responsiveness:** Ensure the app is usable on various devices.

### 5. User Experience and Design
- **Intuitive Navigation:** Make it easy to move between different pages and features.
- **Clean Design:** Use a clean, minimalistic design with a focus on usability.
- **User Feedback:** Provide real-time feedback for user interactions.

