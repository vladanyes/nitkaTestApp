import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import moment from 'moment';
import NotFound from '../not-found';
import Home from '../home';
import Hotel from '../hotel';
import { HotelsProvider } from '../../contexts/hotels-context';

moment.locale('ru');
moment.updateLocale('ru', {
  monthsShort: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
});

const App = () => {
  return (
    <HotelsProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route exact path="/search" component={Home} />
          <Route exact path="/hotels/:hotelId" component={Hotel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </HotelsProvider>
  );
};

export default App;
