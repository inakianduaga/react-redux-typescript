import Immutable = require('immutable');
import IOrder = require('./IOrder');
import OrderTable = require('./OrdersTable');
import Pagination = require('../pagination/Pagination');
import {PAGINATION_SELECT_PAGE, ISelectPage as ISelectPageAction} from '../pagination/Actions';
import {Action as StandardAction} from '../../types/FrameworkTypes';

module State {

  let orders = Immutable.List(<IOrder.Order[]> require('json!./../../mocks/mocks.json'));

  export interface IDefaultState {
    orderFields: OrderTable.Fields,
    orders: Immutable.List<IOrder.Order>,
    pagination: Pagination.PaginationOptions,
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
    }
  };

  function paginator(state: IDefaultState = defaultState, action: ISelectPageAction) {
    const selectedPage = action.payload.page;
    const newPaginatedOrders = state.orders.slice((selectedPage - 1) * state.pagination.perPage, selectedPage * state.pagination.perPage);

    return Immutable.Map(state)
      // .set('ordersPaginated', newPaginatedOrders)
      // .setIn(['pagination', 'current'], selectedPage)
      .updateIn(['pagination'], x => { x.current = selectedPage; return x; })
      .toObject();
    // return Object.assign({}, state, { ordersPaginated: newPaginatedOrders });
  };

  export function reducer(state: IDefaultState = defaultState, action: StandardAction) {

    switch (action.type) {
      case PAGINATION_SELECT_PAGE:
        console.log(paginator(state, <ISelectPageAction>action));
        return action.payload.module === 'orders' ? paginator(state, <ISelectPageAction>action) : state;

      default:
        return state;
    }
  };
}

export = State;
