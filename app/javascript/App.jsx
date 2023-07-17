import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Greeting} />
    </Router>
  );
};

export default App;
