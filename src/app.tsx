/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/immutable/dist/immutable.d.ts" />

import React = require('react');
import CommentBox = require('./components/CommentBox');

React.render(
  <CommentBox.Component label="Label" />,
  document.getElementById('content')
);
