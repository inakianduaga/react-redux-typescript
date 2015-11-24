import * as React from 'react';
import { ReduxConnectedComponent } from '../../types/FrameworkTypes';
let { connect } = require('react-redux');
import { Dropdown as LanguageSelector, ILanguage as LanguageItem } from './../languageSelector/LanguageSelector.tsx';
import { Actions as LanguageActions } from './../languageSelector/Actions';
let M = require('material-ui/lib/toolbar');

module Navigation {

  export class Navigation extends React.Component<ReduxConnectedComponent, any> {

    private handleSelection =  (e: any, selectIndex: number, menuItem: LanguageItem) => {
      this.props.dispatch(LanguageActions.selectLanguage(menuItem.payload)) ;
    };

    render() {
      return (
        <M.Toolbar>
          <div className="end-xs">
            <LanguageSelector handleSelection={ this.handleSelection } />
          </div>
        </M.Toolbar>
      )
    }

    /**
     * Which props do we want to inject, given the global state?
     * Note: use https://github.com/faassen/reselect for better performance.
     */
    public static selectState(state: any) {
      return {
        languages: state.languages
      };
    }
  }
}

export default connect(Navigation.Navigation.selectState)(Navigation.Navigation);
