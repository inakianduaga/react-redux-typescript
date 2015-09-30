module FrameworkTypes {

  /**
   * Redux standard action
   * @link https://github.com/kolodny/redux-standard-action
   */
  export type Action = {
    type: string,
    payload?: any,
    error?: boolean,
    meta?: string
  }
}

export = FrameworkTypes;