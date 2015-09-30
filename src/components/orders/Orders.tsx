import React = require('react');
import Pagination = require('../pagination/Pagination');
import OrderTable = require('./OrdersTable');
import IOrder = require('./IOrder');

module Orders {

  type LayoutData = {
    pagination: Pagination.PaginationData,
    orders: OrderTable.TableData,
  };

  export class Layout extends React.Component<LayoutData, any> {

    render() {
      let {pagination, orders} = this.props;
      return (
        <div>
          <Pagination.Pagination {...pagination} />
          <OrderTable.Table {...orders}/>
        </div>

      );
    }
  };

}

export = Orders;