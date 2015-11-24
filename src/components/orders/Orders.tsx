import * as React from 'react';
import * as Pagination from '../pagination/Pagination.tsx';
import { Actions as PaginationActions } from '../pagination/Actions';
import { Actions as OrderActions } from './Actions.ts';
import { ReduxConnectedComponent } from '../../types/FrameworkTypes';
let { connect } = require('react-redux');
import * as Immutable from 'immutable';
import * as OrderTable from './OrdersTable.tsx';
import { IDefaultState as IOrdersState } from '../orders/State';
import * as IOrder from './IOrder';
import { Languages as Translations } from './lang/Lang';
import { ILanguage as ITranslation} from './lang/ILang';
import { Layout as Search } from './Search.tsx';

module Orders {

  interface LayoutData extends ReduxConnectedComponent {
    orders: IOrdersState;
    translations: ITranslation
  };

  type TitleData = {
    title: string
  }

  export class Title extends React.Component<TitleData, any> {
    render() {
      return (
        <h4>{ this.props.title }</h4>
      )
    }
  }

  export class Layout extends React.Component<LayoutData, any> {

    private static component = 'orders';

    private static cutoffSearchLength = 2;

    private selectHandler = (page: number) => {
      this.props.dispatch(PaginationActions.page(page, Layout.component));
    }

    private static ordersSearchFiltered(orders: Immutable.List<IOrder.Order>, search: string)  {
      return search.trim().length <= Layout.cutoffSearchLength ? orders : orders.filter(order => Layout.doesOrderContainSearch(order, search));
    }

    private static doesOrderContainSearch(order: IOrder.Order, search: string): boolean {
      return JSON.stringify(order).indexOf(search) !== -1;
    }

    private ordersPaginated(orders: Immutable.Iterable<number, IOrder.Order>, selectedPage: number, perPage: number): any {
      return orders.slice((selectedPage - 1) * perPage, selectedPage * perPage);
    }

    private searchHandler = (input: string) => {
      this.props.dispatch(OrderActions.search(input));
    }

    render() {
      const { dispatch } = this.props;
      const { orderFields, pagination } = this.props.orders;
      const total = this.props.orders.orders.size;
      const ordersSearchFiltered = Layout.ordersSearchFiltered(this.props.orders.orders, this.props.orders.search);
      return (
        <div className="row orders">
          <Title title={this.props.translations.title} />
          <Search onChange= { this.searchHandler } value={ this.props.orders.search }/>
          <Pagination.Pagination {...pagination} selectHandler={this.selectHandler} total={ total } class='orders'/>
          <OrderTable.Table orders={ this.ordersPaginated(ordersSearchFiltered, pagination.current, pagination.perPage) } translations={ this.props.translations } visibleFields={ orderFields } />
        </div>

      );
    }

    /**
     * Which props do we want to inject, given the global state?
     * Note: use https://github.com/faassen/reselect for better performance.
     */
    public static selectState(state: any) {
      return {
        orders: state.orders,
        translations: Translations[state.languages.language]
      };
    }
  };

}

export default connect(Orders.Layout.selectState)(Orders.Layout);
