import React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox2.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
