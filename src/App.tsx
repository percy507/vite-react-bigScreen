import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ScreenAdaptor from '@/components/ScreenAdaptor';
import HomePage from '@/pages/Home';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';

import uiConfig from './ui.config.json';

function App() {
  return (
    <ScreenAdaptor uiConfig={uiConfig}>
      <RecoilRoot>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/p1" exact component={Page1} />
            <Route path="/p2" exact component={Page2} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </RecoilRoot>
    </ScreenAdaptor>
  );
}

export default App;
