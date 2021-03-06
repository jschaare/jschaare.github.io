import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./components/Main";
import './static/css/main.scss';

const About = lazy(() => import('./pages/About'));
const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
