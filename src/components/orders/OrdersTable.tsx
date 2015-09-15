/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import IOrder = require('./IOrder');
import Immutable = require('immutable');
require('../../public/stylesheets/orders.less');

module OrdersTable {

  interface TableData {
    orders: IOrder.Order[]
    header: VisibleFields,
  }

  interface VisibleFields {
    /**
     * Fields visibility value
     */
    fields: [
      {
        label: string,
        enabled: boolean,
      }
    ]
  }

  export class Table extends React.Component<TableData, any> {
    render() {
      return (
        <table>
          <Header fields={Immutable.fromJS(this.props.header.fields)} />
          <Body {...this.props} />
        </table>
      );
    }
  };

  class Header extends React.Component<VisibleFields, any> {
    render() {
      return (
        <tr>
          {
            this.props.fields.filter(field => field.enabled).map(field =>
              <td key={field.label}>field.label</td>
            )
          }
        </tr>
      );
    }
  }

  class Body extends React.Component<TableData, any> {
    render() {
      return (
        <div>Here would go the body</div>
      )
    }
  }



}

export = OrdersTable;
