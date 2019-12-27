
import { homeState } from './initialState';
import { currencyType } from './actionTypes';

import { createReducer } from './redux-utils';

const currencyReducer = createReducer(currencyType.fetch, 'MERGE')

export default (state = homeState, action) =>
{
    const { fetch } = currencyType;

    switch (action.type)
    {
        case fetch.base:
        case fetch.fail:
        case fetch.success:
            return {
                ...state,
                currency: currencyReducer(state.currency, action)   //updateCurrency(state.currency, action)
            }
        default:
            return state;
    }
}