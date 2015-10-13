import { combineReducers } from 'redux';
import {reducer as orders} from './../components/orders/State';
import {reducer as language} from './../components/languageSelector/State';
let {ReduxRouter, routerStateReducer, reduxReactRouter} = require('redux-react-router');

/**
 * combineReducers creates a merge reducer that passes a slice of the top level state based on the key to each of the reducers.
 * https://rackt.github.io/redux/docs/api/combineReducers.html
 */
const rootReducer = combineReducers({
  orders,
  router: routerStateReducer
});

export default rootReducer;