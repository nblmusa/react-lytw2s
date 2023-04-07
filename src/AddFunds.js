import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddFunds() {
  const [amount, setAmount] = useState(0);
  const history = useHistory();

  const handleAddFunds = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'API_ENDPOINT/add-funds',
        { amount },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Funds</h1>
      <form onSubmit={handleAddFunds}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Funds</button>
      </form>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}

export default AddFunds;
