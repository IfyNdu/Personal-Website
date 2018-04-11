import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

// View Componenets
import App from './entry-point/App';

const onEnter = () => {
  console.log('[!! STUB] Entering Route', this);
};

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ App } />
      {/* <Route path="/yacht/:yachtName" component={ YachtDetail } /> */}
    </Switch>
  </HashRouter>
)
