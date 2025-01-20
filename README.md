###Wisdom-user

Objective
The goal of this assignment is to create a functional React.js application that fetches and displays a list of users from an API. The application should include features for searching, filtering, and viewing detailed information about each user. The expected learning outcomes from this assignment include understanding how to integrate APIs in a React application, managing state using either React Context API or Redux, handling asynchronous data fetching with loading and error states, and implementing responsive design with optional dark/light mode toggle.

Step-by-Step Instructions
1. Project Setup and Initialization
Set up the project directory:

Create a new directory for your project and navigate into it.
Initialize a new React project using Create React App:

npx create-react-app user-directory

Navigate into the project directory:

cd user-directory

Install necessary dependencies:

React Router for navigation:

npm install react-router-dom

For state management (choose one):
React Context API (Builtin, no installation needed)
Redux:

npm install redux react-redux


Material-UI:
npm install @mui/material @emotion/react @emotion/styled
2. Development Process
Home Page Setup:

Create a Home.js component.
Fetch the list of users from the API: https://jsonplaceholder.typicode.com/users
Display the users with their name, email, and city.
Implement a search bar to filter users by name.
Implement sorting functionality for the user list (A-Z, Z-A).
Ensure that clicking on a user navigates to their detail page.
User Detail Page:

Create a UserDetail.js component.
Fetch and display full user details (name, email, phone, company name, website).
Include a "Go Back" button to return to the home page.
State Management:

If using React Context API:
Set up a context provider to manage global state.
Use the context in your components to manage user data and application state.
If using Redux:
Set up Redux store, actions, and reducers.
Connect your components to the Redux store.
Error Handling & Loading States:

Implement loading states while fetching data.
Handle any potential errors that may occur during the data fetching process.
3. Styling and Design
CSS Styling:

Add CSS styles to ensure the application is visually appealing.
Implement responsiveness to ensure the application works well on both mobile and desktop devices.
Tailwind or Material-UI:


Utilize pre-built components and theming capabilities if using Material-UI.
Bonus Features:

Implement a dark/light mode toggle.
Add pagination to the user list for better user experience on larger datasets.
4. Deployment
Deploying to Netlify/Vercel:
Initialize a Git repository and commit your code.
Push the repository to GitHub.
For Netlify:
Link your GitHub repository to your Netlify account.
Choose the branch to deploy and set up build settings.
For Vercel:
Link your GitHub repository to your Vercel account.
Import the project and configure deployment settings.
