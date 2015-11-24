import { Action } from "../../types/FrameworkTypes";

module Actions {

  export const SEARCH_ORDERS: string = 'SEARCH_ORDERS';

  export interface ISearchOrders extends Action {
    payload: {
      input: string,
    }
  }

  export class Actions {
    public static search(input: string): ISearchOrders {
      return {
        type: SEARCH_ORDERS,
        payload: {
          input
        }
      }
    };
  };


}

export default Actions;
