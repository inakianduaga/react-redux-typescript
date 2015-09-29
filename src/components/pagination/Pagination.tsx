/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import React = require('react');
import Immutable = require('immutable');

//Stylesheets
require('../../public/stylesheets/pagination.less');

module Pagination {

  export type PaginationData = {
    total: number,
    perPage: number,
    current: number,
    edges: number
    selectHandler: Function,
    class?: string
  }

  export class Pagination extends React.Component<PaginationData, any> {

    generateList(total: number, perPage: number, current: number) {
      return Array(total).map((value: any, index: number) => index);
    }

    calculateTotalPages(total: number, perPage: number ): number {
      return Math.ceil(total / perPage);
    }

    truncateList(list: Array<number>, edges: number): Array<number> {
      let truncate = list.length - 2 * edges;

      return truncate > 0 ? list.splice(edges + 1, truncate) : list;
    }

    render() {

      let pages = this.truncateList(this.generateList(this.props.total, this.props.perPage, this.props.current), this.props.edges);
      let breakpointCounter: number = 0;

      return (
        <ul className='paginator'>
        {
          pages.map(page => {
            return (page > breakpointCounter + 1) ?
              <li className="separator">...</li> :
              <li onClick={this.props.selectHandler.bind(this, page) }>{ page }</li>
          })
        }
        </ul>
      );
    }
  };

}

export = Pagination;
