module FrameworkTypes {

  /**
   * Redux standard action
   * @link https://github.com/kolodny/redux-standard-action
   */
  export interface Action {
    type: string,
    payload?: any,
    error?: boolean,
    meta?: string
  }
}

export = FrameworkTypes;