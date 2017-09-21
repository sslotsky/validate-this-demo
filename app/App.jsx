import React from 'react';
import { Route, Switch } from 'react-router';

import 'APP_ASSETS/styles.scss';

import { Login } from 'MODULES/session/components';
import Home from './Home';

export default function App() {
  return (
    <div className="soft-half">
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}
