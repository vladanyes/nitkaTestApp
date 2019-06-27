import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../not-found';
import Home from '../home';
import Hotel from '../hotel';
import { HotelsProvider } from '../../contexts/hotels-context';
import ScrollToTop from '../../components/scroll-to-top';

const App = () => {
  return (
    <HotelsProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Redirect exact from="/" to="/search" />
            <Route exact path="/search" component={Home} />
            <Route exact path="/hotels/:hotelId" component={Hotel} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </HotelsProvider>
  );
};

export default App;
