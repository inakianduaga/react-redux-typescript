import React = require('react');
let DropDownMenu = require('material-ui/lib/drop-down-menu');

module LanguageSelector {

  interface ILanguage {
    payload: string,
    text: string,
  };

  export class Dropdown extends React.Component<any, any> {

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
        <DropDownMenu menuItems={this.languages} />
      )
    }
  }
}

export = LanguageSelector;