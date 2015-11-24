import { Action } from "../../types/FrameworkTypes";

module Actions {

  export const LANGUAGE_SELECT: string = 'LANGUAGE_SELECT';

  export interface ISelectLanguage extends Action {
    payload: {
      language: string
    }
  }

  export class Actions {
    static selectLanguage(language: string): ISelectLanguage {
      return {
        type: LANGUAGE_SELECT,
        payload: {
          language
        }
      }
    };
  };


}

export default Actions;
