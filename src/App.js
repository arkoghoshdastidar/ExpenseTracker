import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';
import NewExpenses from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, updateExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 1, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const newExpenseDataHandler = newData => {
    updateExpenses((oldExpenses) => {
      return [...oldExpenses, newData];
    })
  }

  return (
    <div>
      <NewExpenses onAddNewExpenseData={newExpenseDataHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;