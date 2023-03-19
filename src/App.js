import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
// import Login from './components/Firebase/Login';
// import Register from './components/Firebase/Register';
// import Reset from './components/Firebase/Reset';
// import Dashboard from './components/Firebase/Dashboard';
import { AppProvider } from './context/AppContext';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import ProgressBar from './components/Progress';
import { GiTakeMyMoney } from 'react-icons/gi'


const App = () => {
	
  return (
  //   <div className="app">
  //     <Router>
  //       <Routes>
  //         <Route exact path="/" element={<Login />} />
  //         <Route exact path="/register" element={<Register />} />
  //         <Route exact path="/reset" element={<Reset />} />
  //         <Route exact path="/dashboard" element={<Dashboard />} />
  //       </Routes>
  //     </Router>
  //   </div>
  // ) (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3' id='header'> <GiTakeMyMoney size='1.3em'/>My Budget Planner</h1>
        <div className='row mt-3' id='top-row'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3' id='expenses'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm' id='expense-list'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3' id='add'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm' id='add-form'>
            <AddExpenseForm />
          </div>
        </div>
        {/* <div>
            <ProgressBar />
        </div> */}
      </div>
    </AppProvider>
  )
};

export default App;