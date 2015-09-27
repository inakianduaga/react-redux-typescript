/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/immutable/dist/immutable.d.ts" />

import React = require('react');
import { createStore, compose, combineReducers } from 'redux';
let { Route, Link } = require('react-router');
let {Provider, connect} = require('react-redux');
let {ReduxRouter, routerStateReducer, reduxReactRouter} = require('redux-react-router');
let { devTools } = require('redux-devtools');
let { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
let createHistory = require('history/lib/createBrowserHistory');


import Layout = require('./components/layout/Layout.tsx');
let injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);

class Root extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Provider store={store}>
          { () =>
            <ReduxRouter>
              <Route path="/src/public/index.html" component={Layout.Layout} module="home" />
              <Route path="/" component={Layout.Layout} module="home" >
                <Route path="orders" component={Layout.Layout} module="orders" />
              </Route>
            </ReduxRouter>
          }
        </Provider>
        <DebugPanel top left bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

React.render(<Root />,document.getElementById('content'));
