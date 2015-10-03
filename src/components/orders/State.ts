/// <reference path="../../../typings/tsd.d.ts" />
import Immutable = require('immutable');
import IOrder = require('./IOrder');
import OrderTable = require('./OrdersTable');
import Pagination = require('../pagination/Pagination');
import PaginationActions = require('../pagination/Actions');

module State {

  interface IDefaultState {
    orderFields: OrderTable.Fields,
    orders: Immutable.List<IOrder.Order>,
    pagination: Pagination.PaginationOptions,
    ordersPaginated: Immutable.List<IOrder.Order>,
  }

  const defaultState: IDefaultState = {
    orderFields: {
      fields: [
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
    },
    orders: require('json!./../../mocks/mocks.json'),
    pagination: {
      perPage: 20,
      current: 1,
      edges: 2
    },
    ordersPaginated: require('json!./../../mocks/mocks.json'),
  };

  class reducers {

    paginator(state: IDefaultState = defaultState, action: PaginationActions.SelectPage) {
      const selectedPage = action.payload.page;
      const newPaginatedOrders = state.orders.slice((selectedPage - 1) * state.pagination.perPage, selectedPage * state.pagination.perPage);

      return Object.assign({}, state, { ordersPaginated: newPaginatedOrders });
    }

  };


}