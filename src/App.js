import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Header from './components/organisms/Header/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>

      <Switch>
      <Route path="/products">
          <h1>Products</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/register">
          <h1>Register</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
