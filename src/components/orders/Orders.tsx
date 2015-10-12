import React = require('react');
import Pagination = require('../pagination/Pagination.tsx');
import { Actions as PaginationActions } from '../pagination/Actions';
import { ReduxConnectedComponent } from '../../types/FrameworkTypes';
let { connect } = require('react-redux');
import Immutable = require('immutable');
import OrderTable = require('./OrdersTable.tsx');
import { IDefaultState as IOrdersState } from '../orders/State';
import IOrder = require('./IOrder');


module Orders {

  interface LayoutData extends ReduxConnectedComponent {
    orders: IOrdersState;
  };

  export class Layout extends React.Component<LayoutData, any> {

    private static component = 'orders';

    selectHandler(dispatch: Function) {
      return function(page: number) {
        dispatch(PaginationActions.page(page, Layout.component));
      }
    };

    render() {
      const { dispatch } = this.props;
      const { ordersPaginated, orderFields, pagination } = this.props.orders;
      const total = this.props.orders.orders.size;
      return (
        <div className="row">
          <Pagination.Pagination {...pagination} selectHandler={this.selectHandler(dispatch)} total={ total } class='orders'/>
          <OrderTable.Table orders={ Immutable.List(ordersPaginated) } visibleFields={ orderFields } />
        </div>

      );
    }

    /**
     * Which props do we want to inject, given the global state?
     * Note: use https://github.com/faassen/reselect for better performance.
     */
    public static selectState(state: any) {
      return {
        orders: state.orders
      };
    }
  };

}

export default connect(Orders.Layout.selectState)(Orders.Layout);
