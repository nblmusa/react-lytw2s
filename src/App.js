import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import TransactionHistory from './TransactionHistory';
import AddFunds from './AddFunds';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/transaction-history"
          component={TransactionHistory}
        />
        <PrivateRoute exact path="/add-funds" component={AddFunds} />
      </Switch>
    </Router>
  );
}
