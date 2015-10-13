import React = require('react');
let DropDownMenu = require('material-ui/lib/drop-down-menu');

module LanguageSelector {

  export interface ILanguage {
    payload: string,
    text: string,
  };

  interface ILanguageSelector {
    handleSelection: Function
  }

  export class Dropdown extends React.Component<ILanguageSelector, any> {

    private languages: ILanguage[] = [
      {
        payload: 'en',
        text: 'English'
      },
      {
        payload: 'de',
        text: 'Deutsch',
      },
      {
        payload: 'es',
        text: 'Espanol',
      },
    ];

    render() {
      return (
        <DropDownMenu menuItems={this.languages} onChange={ this.props.handleSelection } />
      )
    }
  }
}

export = LanguageSelector;