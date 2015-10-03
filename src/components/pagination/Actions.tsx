import FrameworkType = require("../../types/FrameworkTypes");

module Actions {

  export const PAGINATION_SELECT_PAGE: string = 'PAGINATION_SELECT_PAGE';

  export interface SelectPage extends FrameworkType.Action {
    payload: {
      page: number
    }
  }

  export class Actions {
    page(page: number): SelectPage {
      return {
        type: PAGINATION_SELECT_PAGE,
        payload: {
          'page': page
        }
      }
    };
  };


}

export = Actions;
