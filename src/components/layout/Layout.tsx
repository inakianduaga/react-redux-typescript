/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import React = require('react');
import { ReduxConnectedComponent } from '../../types/FrameworkTypes';
let { connect } = require('react-redux');
//Different components
import Navigation from '../navigation/Navigation.tsx';
import OrdersLayout from './../orders/Orders.tsx';
//Material UI
let materialUI = require('material-ui');
let ThemeManager = new materialUI.Styles.ThemeManager();
//Flexbox & CSS
require('../../../node_modules/flexboxgrid/dist/flexboxgrid.css');
require('../../../node_modules/materialize-css/dist/css/materialize.css');

module Layout {

  interface ILayoutProps extends ReduxConnectedComponent {
  }

  export class Main extends React.Component<ILayoutProps, any> {

    // Material UI pass manager context
    public getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    // Material UI pass manager context
    public static childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    render() {

      return (
        <div className="col-xs-offset-3">
          <div className="row">
            <Navigation />
          </div>
          <OrdersLayout />
        </div>
      );
    }

    /**
     * Which props do we want to inject, given the global state?
     * Note: use https://github.com/faassen/reselect for better performance.
     */
    public static selectState(state: any) {
      return {
        // orders: state.orders
      };
    }

  }

}

export default connect(Layout.Main.selectState)(Layout.Main);
