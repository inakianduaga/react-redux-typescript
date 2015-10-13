import FrameworkType = require("../../types/FrameworkTypes");

module Actions {

  export const LANGUAGE_SELECT: string = 'LANGUAGE_SELECT';

  export interface ISelectLanguage extends FrameworkType.Action {
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

export = Actions;
