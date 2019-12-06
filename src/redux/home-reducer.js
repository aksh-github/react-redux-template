
import { homeState } from './initialState';
// import { FETCH_CURRENCY, FETCH_CURRENCY_FAIL, FETCH_CURRENCY_SUCCESS } from '../redux/action';

import { fetchCurrencyType } from './actionTypes';

import { createReducer } from './redux-utils';

const currencyReducer = createReducer(fetchCurrencyType, 'MERGE')

export default (state = homeState, action) =>
{

    switch (action.type)
    {
        case fetchCurrencyType.base:
        case fetchCurrencyType.fail:
        case fetchCurrencyType.success:
            return {
                ...state,
                currency: currencyReducer(state.currency, action)   //updateCurrency(state.currency, action)
            }
        default:
            return state;
    }
}