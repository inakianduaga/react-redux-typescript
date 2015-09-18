import React = require('react');
import OrdersTable = require('../orders/OrdersTable.tsx');

let materialUI = require('material-ui');
let ThemeManager = new materialUI.Styles.ThemeManager();
let orders = require('json!./../../mocks/mocks.json');
console.log(orders);
require('../../../node_modules/flexboxgrid/dist/flexboxgrid.css');

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

    private orderFields = {
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

    render() {
      return (
        <div className="row">
          <OrdersTable.Table orders={ orders } visibleFields={this.orderFields} />
        </div>
      );
    }
  }



}

export = Layout;