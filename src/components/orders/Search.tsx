import * as React from 'react';

module Search {

  type SearchProps = {
    onChange: Function,
    value: string
  }

  export class Layout extends React.Component<SearchProps, any> {

    handleChange = (event) => {
      this.props.onChange(event.target.value)
    }

    render() {
      return (
        <div className="input-field">
          <input id="search" type="search" value={ this.props.value } required onChange={ this.handleChange } />
          <label htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      );
    }
  }

}

export default Search;