import Immutable = require('immutable');
import IOrder = require('./IOrder');
import OrderTable = require('./OrdersTable');
import Pagination = require('../pagination/Pagination');
import {PAGINATION_SELECT_PAGE, SelectPage as ISelectPageAction} from '../pagination/Actions';
import {Action as StandardAction} from '../../types/FrameworkTypes';

module State {

  let orders = Immutable.List(<IOrder.Order[]> require('json!./../../mocks/mocks.json'));

  export interface IDefaultState {
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
    orders: orders,
    pagination: {
      perPage: 7,
      current: 1,
      edges: 2
    },
    ordersPaginated: orders,
  };

  function paginator(state: IDefaultState = defaultState, action: ISelectPageAction) {
    const selectedPage = action.payload.page;
    const newPaginatedOrders = state.orders.slice((selectedPage - 1) * state.pagination.perPage, selectedPage * state.pagination.perPage);

    return Immutable.Map(state).set('ordersPaginated', newPaginatedOrders).toObject();
    // return Object.assign({}, state, { ordersPaginated: newPaginatedOrders });
  };

  export function reducer(state: IDefaultState = defaultState, action: StandardAction) {
    switch (action.type) {
      case PAGINATION_SELECT_PAGE:
        return this.paginator(state, <ISelectPageAction>action)

      default:
        return state;
    }
  };
}

export = State;
