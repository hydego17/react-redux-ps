import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../home';
import AboutPage from '../about';
import CoursesPage from '../courses';

import PageNotFound from '../PageNotFound';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />

        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
