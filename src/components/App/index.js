import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../layout';
import HomePage from '../home';
import AboutPage from '../about';
import CoursesPage from '../courses';
import ManageCoursePage from '../courses/ManageCoursePage';
import PageNotFound from '../PageNotFound';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />

        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
}
