import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../not-found';
import SearchPage from '../search-page';
import Hotel from '../hotel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/:hotelId" component={Hotel} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
