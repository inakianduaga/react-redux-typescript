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

  /**
   * Properties/Methods available on a Redux-store connected component
   */
  export interface ReduxConnectedComponent {
    dispatch: Function
  };

}

export default FrameworkTypes;