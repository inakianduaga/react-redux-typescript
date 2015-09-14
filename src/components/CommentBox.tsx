import React = require('react');

module CommentBox {

  interface Props {
    label: string
  }

  export class Component extends React.Component<Props, any> {
    render() {
      return (
        <div className="commentBox">
          <b>{ this.props.label }</b>: Hello, world! I am a Test 60.
        </div>
      );
    }
  };

}

export = CommentBox;
