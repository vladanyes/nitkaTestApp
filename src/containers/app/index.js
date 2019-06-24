import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/:hotelId" component={Hotel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </HotelsProvider>
  );
};

export default App;
