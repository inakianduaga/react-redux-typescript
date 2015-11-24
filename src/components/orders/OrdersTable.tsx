/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import * as React from 'react';
import * as IOrder from './IOrder';
import * as Immutable from 'immutable';
import { ILanguage as IOrderLanguage } from './lang/ILang';

let M = require('material-ui/lib/table');

//Stylesheets
require('../../public/stylesheets/orders.less');

module OrdersTable {

  export interface TableData {
    orders: Immutable.List<IOrder.Order>,
    visibleFields: Fields,
    translations: IOrderLanguage
  };

  export interface HeaderData {
    fields: Field[],
    translations: IOrderLanguage
  }

  interface Field {
    label: string,
    /**
     * Fields visibility value
     */
    enabled: boolean,
  };

  export interface Fields {
    fields: Field[]
  };

  interface OrderRow {
    order: IOrder.Order,
    fields: Field[]
  };

  export class Table extends React.Component<TableData, any> {

    public state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',
    };

    render() {
      return (
        <table className="striped">
          <Header {...this.props.visibleFields} translations={ this.props.translations } />
          <Body {...this.props} />
        </table>
      );
    }
  };

  class Header extends React.Component<HeaderData, any> {
    render() {
      return (
        <thead>
          <tr>
            {
              this.props.fields
                .filter(field => field.enabled)
                .map(field =>
                  <th>{this.props.translations.table.fields[field.label]}</th>
                )
            }
          </tr>
        </thead>
      );
    }
  }

  class Body extends React.Component<TableData, any> {
    render() {
      let { orders, fields} = { orders: this.props.orders, fields: this.props.visibleFields.fields };
      return (
        <tbody>
        {
          orders.map(order =>
              <Row order={ order } fields={ fields }  />
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
                <td>
                  { this.fieldContent[field.label](this.props.order) }
                </td>
              )
          }
        </tr>
      )
    }
  }

}

export default OrdersTable;
