import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await axios.get('API_ENDPOINT/balance', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setBalance(res.data.balance);
    };

    const fetchTransactions = async () => {
      const res = await axios.get('API_ENDPOINT/transactions', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTransactions(res.data.transactions);
    };

    fetchBalance();
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Balance: {balance}</p>
      <Link to="/add-funds">Add Funds</Link>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
      <Link to="/transaction-history">Transaction History</Link>
    </div>
  );
}

export default Dashboard;
