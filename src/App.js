import React from 'react';
import Expenses from "./components/expenses/Expenses";
import NewExpense from './components/newExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet paper',
      amount: 5.99,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Spotify',
      amount: 10.00,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e4',
      title: 'Prime video',
      amount: 6.00,
      date: new Date(2021, 2, 12)
    },
  ];

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
