import React = require('react');
import OrdersTable = require('../orders/OrdersTable.tsx');
import Navigation = require('../navigation/Navigation.tsx');
import Immutable = require('immutable');

let materialUI = require('material-ui');
let ThemeManager = new materialUI.Styles.ThemeManager();
let orders = require('json!./../../mocks/mocks.json');

require('../../../node_modules/flexboxgrid/dist/flexboxgrid.css');

const orderFields = {
    fields : [
      {
          label: "name",
          enabled: true
      },
      {
          label: "email",
          enabled: true
      },
      {
          label: "orderNumber",
          enabled: true
      },
      {
          label: "amount",
          enabled: true
      },
      {
          label: "taxRate",
          enabled: true
      },
    ]
};

module Layout {

  export class Layout extends React.Component<any, any> {

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
        <div>
          <div className="row">
            <Navigation.Navigation />
          </div>
          <div className="row">
            <OrdersTable.Table orders={ Immutable.fromJS(orders) } visibleFields={ orderFields } />
          </div>
        </div>
      );
    }
  }



}

export = Layout;