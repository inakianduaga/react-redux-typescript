/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/immutable/dist/immutable.d.ts" />

import React = require('react');
import Layout = require('./components/layout/Layout.tsx');

React.render(
  <Layout.Layout />,
  document.getElementById('content')
);
