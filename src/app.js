import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signup, Signin } from './pages/index';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>

      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      
    </Router>
  );
}