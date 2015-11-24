import * as Immutable from 'immutable';
import * as IOrder from './IOrder';
import * as OrderTable from './OrdersTable';
import * as Pagination from '../pagination/Pagination';
import {PAGINATION_SELECT_PAGE, ISelectPage as ISelectPageAction} from '../pagination/Actions';
import {SEARCH_ORDERS, ISearchOrders } from './Actions';
import {Action as StandardAction} from '../../types/FrameworkTypes';

module State {

  let orders = Immutable.List(<IOrder.Order[]> require('json!./../../mocks/mocks.json'));

  export interface IDefaultState {
    orderFields: OrderTable.Fields,
    orders: Immutable.List<IOrder.Order>,
    pagination: Pagination.PaginationOptions,
    search: string
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
    search: null
  };

  function paginator(state: IDefaultState = defaultState, selectedPage: number) {
    return Immutable.Map(state)
      .updateIn(['pagination'], x => { x.current = selectedPage; return x; })
      .toObject();
         // return Object.assign({}, state, { ordersPaginated: newPaginatedOrders });
  };

  function search(state: IDefaultState, action: ISearchOrders) {
    return Immutable.Map(state)
      .update('search', x => action.payload.input)
      .toObject();
  }

  export function reducer(state: IDefaultState = defaultState, action: StandardAction) {
    switch (action.type) {
      case PAGINATION_SELECT_PAGE:
        return action.payload.module === 'orders' ? paginator(state, action.payload.page) : state;
      case SEARCH_ORDERS:
        //Update state with search action + reset pagination to 1st page
        return paginator(search(state, <ISearchOrders>action), 1);
      default:
        return state;
    }
  };
}

export default State;
