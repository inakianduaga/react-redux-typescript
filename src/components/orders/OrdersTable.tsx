/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import React = require('react');
import IOrder = require('./IOrder');
import Immutable = require('immutable');

let M = require('material-ui/lib/table');

//Stylesheets
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
        <div>
          <M.Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            >
            <Header {...this.props.visibleFields} />
            <Body {...this.props} />
          </M.Table>
        </div>
      );
    }
  };

  class Header extends React.Component<Fields, any> {
    render() {
      return (
        <M.TableHeader>
          <M.TableRow>
            {
              this.props.fields
                .filter(field => field.enabled)
                .map(field =>
                  <M.TableHeaderColumn>{field.label}</M.TableHeaderColumn>
                )
            }
          </M.TableRow>
        </M.TableHeader>
      );
    }
  }

  class Body extends React.Component<TableData, any> {
    render() {
      return (
        <M.TableBody>
        {
          this.props.orders.map(order =>
              <Row order={Immutable.fromJS(order)} fields={Immutable.fromJS(this.props.visibleFields.fields)}  />
            )
        }
        </M.TableBody>
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
        <M.TableRow>
          {
            this.props.fields
              .filter(field => field.enabled)
              .map(field =>
                <M.TableRowColumn>
                  { this.fieldContent[field.label] }
                </M.TableRowColumn>
              )
          }
        </M.TableRow>
      )
    }
  }

}

export = OrdersTable;
