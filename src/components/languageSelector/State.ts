import { LANGUAGE_SELECT, ISelectLanguage } from './Actions';

module State {

  export interface IDefaultState {
    language: string
  }

  const defaultState: IDefaultState = {
    language: 'en'
  }

  export function reducer(state: IDefaultState = defaultState, action: ISelectLanguage): IDefaultState {

    switch (action.type) {
      case LANGUAGE_SELECT:
        return {
          language: action.payload.language
        }
      default:
        return state;
    }
  };

}

export default State;