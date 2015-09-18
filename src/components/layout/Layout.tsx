import React = require('react');
import OrdersTable = require('../orders/OrdersTable.tsx');
// let mocker = require('casual');

require('../../../node_modules/flexboxgrid/dist/flexboxgrid.css');
//
module Layout {
  export class Layout extends React.Component<any, any> {

    private generateMockOrderData(count: number) {
      let orders = [];
      // for (let index = 0; index < count; index++) {
      //   orders.push({
      //       id: mocker.integer(1, 100000),
      //       firstName: mocker.first_name,
      //       lastName: mocker.first_name,
      //       email: mocker.email,
      //       orderNumber: mocker.integer(1, 100000),
      //       amount: mocker.integer(10, 1000),
      //       currency: mocker.random_element(['EUR', 'USD', 'CHF']),
      //       taxRate: mocker.integer(10, 22),
      //       items: (() => {
      //           return [1, 2, 3].map(() => ({
      //               sku: mocker.word,
      //               name: mocker.title,
      //               quantity: mocker.integer(1, 99),
      //               amount: mocker.integer(1, 150),
      //         }));
      //       })(),
      //       shipping: {
      //           provider: mocker.random_element(['dhl', 'fedex', 'ups']),
      //           type: mocker.random_element(['parcel', 'express', 'overnight']),
      //           amount: mocker.integer(1, 15),
      //       },
      //       discount: {
      //           'name': mocker.word,
      //           'amount': mocker.integer(1, 50),
      //           'isPercent': true
      //       }
      //   });
      // }

      return orders;
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
          <OrdersTable.Table orders={ this.generateMockOrderData(50) } visibleFields={this.orderFields} />
        </div>
      );
    }
  }
}

export = Layout;