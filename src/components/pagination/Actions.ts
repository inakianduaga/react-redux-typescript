import * as FrameworkType from "../../types/FrameworkTypes";

module Actions {

  export const PAGINATION_SELECT_PAGE: string = 'PAGINATION_SELECT_PAGE';

  export interface ISelectPage extends FrameworkType.Action {
    payload: {
      page: number,
      module: string
    }
  }

  export class Actions {
    static page(page: number, module: string): ISelectPage {
      return {
        type: PAGINATION_SELECT_PAGE,
        payload: {
          page,
          module
        }
      }
    };
  };


}

export default Actions;
