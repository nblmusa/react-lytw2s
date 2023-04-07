import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get('API_ENDPOINT/transactions', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTransactions(res.data.transactions);
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default TransactionHistory;
