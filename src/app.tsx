/// <reference path="../typings/tsd.d.ts" />

import React = require('react');
import CommentBox = require('./components/CommentBox.tsx');

React.render(
  <CommentBox.Component label="Label" />,
  document.getElementById('content')
);
