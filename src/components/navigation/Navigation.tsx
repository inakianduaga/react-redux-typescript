import React = require('react');
import LanguageSelector = require('./LanguageSelector.tsx');

let M = require('material-ui/lib/toolbar');


module Navigation {
  export class Navigation extends React.Component<any, any> {

    render() {
      return (
        <M.Toolbar>
          <div className="end-xs">
            <LanguageSelector.Dropdown />
          </div>
        </M.Toolbar>
      )
    }
  }
}

export = Navigation;