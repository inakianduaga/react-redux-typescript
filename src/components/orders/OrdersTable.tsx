/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import React = require('react');
import IOrder = require('./IOrder');
import Immutable = require('immutable');

require('../../public/stylesheets/orders.less');

module OrdersTable {

  interface TableData {
    orders: IOrder.Order[],
    visibleFields: Fields,
  };

  interface Field {
    label: string,
    /**
     * Fields visibility value
     */
    enabled: boolean,
  };

  interface Fields {
    fields: Field[]
  };

  interface OrderRow {
    order: IOrder.Order,
    fields: Field[]
  };

  export class Table extends React.Component<TableData, any> {
    render() {
      return (
        <table>
          <Header {...this.props.visibleFields} />
          <Body {...this.props} />
        </table>
      );
    }
  };

  class Header extends React.Component<Fields, any> {
    render() {
      return (
        <tr>
          {
            this.props.fields
              .filter(field => field.enabled)
              .map(field =>
                <td key={field.label}>{field.label}</td>
              )
          }
        </tr>
      );
    }
  }

  class Body extends React.Component<TableData, any> {
    render() {
      return (
        <tbody>
        {
          this.props.orders.map(order =>
              <Row order={Immutable.fromJS(order)} fields={Immutable.fromJS(this.props.visibleFields.fields)}  />
            )
          }
        </tbody>
      )
    }
  }

  class Row extends React.Component<OrderRow, any> {
    private fieldContent = {
      name: (order: IOrder.Order) => `${order.firstName}, ${order.lastName}`,
      email: (order: IOrder.Order) => order.email,
      orderNumber: (order: IOrder.Order) => order.orderNumber,
      amount: (order: IOrder.Order) => `${order.amount} ${order.currency}`,
      taxRate: (order: IOrder.Order) => `${order.taxRate}%`,
    };

    render() {
      return (
        <tr>
          {
            this.props.fields
              .filter(field => field.enabled)
              .map(field =>
                <td key={field.label + this.props.order.id}>
                  { this.fieldContent[field.label] }
                </td>
              )
          }
        </tr>
      )
    }
  }

}

export = OrdersTable;
