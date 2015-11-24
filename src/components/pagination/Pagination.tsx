/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../node_modules/immutable/dist/immutable.d.ts" />
import * as React from 'react';
import * as Immutable from 'immutable';
import * as FrameworkType from "../../types/FrameworkTypes";

//Stylesheets
require('./../../public/stylesheets/pagination.less');

module Pagination {

  export interface PaginationOptions {
    perPage: number,
    current: number,
    edges: number
  };

  export interface PaginationData extends PaginationOptions {
    total: number,
    selectHandler: Function,
    class?: string
  };

  export class Pagination extends React.Component<PaginationData, any> {

    private maxInsidePages = 3;

    private generatePageRange(total: number, perPage: number, current: number) {
      //ES6 syntax
      // return Array.from(Array(this.calculateTotalPages(total, perPage)).keys());
      let range: number[] = [];

      for (let i = 1; i <= this.calculateTotalPages(total, perPage); i++) {
        range.push(i);
      }

      return range;
    }

    private calculateTotalPages(total: number, perPage: number ): number {
      return Math.ceil(total / perPage);
    }

    private truncate(pages: number[], currentPage: number, edges: number, insidePages: number) {
      return pages.filter(page =>
        page <= edges || page > (pages.length - edges) || Math.abs(page - currentPage) <= Math.floor(insidePages / 2)
      );
    };

    render() {
      const completePageRange = this.generatePageRange(this.props.total, this.props.perPage, this.props.current);
      let truncatedPages = this.truncate(completePageRange, this.props.current, this.props.edges, this.maxInsidePages);

      return (
        <ul className='paginator'>
        {
        truncatedPages.map((page, position, pages) => {
            return (typeof pages[position - 1] !== 'undefined') && Math.abs(page - pages[position - 1]) > 1 ?
              <div className="inline">
                <Separator />
                <PaginationButton onClick={this.props.selectHandler } current={ this.props.current == page } page={page} />
              </div> :
              <PaginationButton onClick={this.props.selectHandler } current={ this.props.current == page } page={page} />

          })
        }
        </ul>
      );
    }
  };

  class Separator extends React.Component<any, any> {
    render() {
      return (
        <li className="separator">...</li>
      );
    }
  }

  interface PaginationButtonInterface {
    page: number,
    current: boolean,
    onClick: Function
  }

  class PaginationButton extends React.Component<PaginationButtonInterface, any> {
    render() {
      return (
        <li onClick={this.props.onClick.bind(this, this.props.page) } className={ this.props.current ? 'current' : '' }>{ this.props.page }</li>
      );
    }
  }


}

export default Pagination;
