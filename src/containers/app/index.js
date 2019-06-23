import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../not-found';
import Home from '../home';
import Hotel from '../hotel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:hotelId" component={Hotel} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
