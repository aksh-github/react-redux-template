
import { homeState } from './initialState';
import { FETCH_CURRENCY, FETCH_CURRENCY_FAIL, FETCH_CURRENCY_SUCCESS } from '../redux/action';

const updateCurrency = (state, action) =>
{
    switch (action.type)
    {
        case FETCH_CURRENCY:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        case FETCH_CURRENCY_FAIL:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                value: state.value.concat(action.payload.value),
            }
        default:
            return state;
    }
}


export default (state = homeState, action) =>
{

    switch (action.type)
    {
        case FETCH_CURRENCY:
        case FETCH_CURRENCY_FAIL:
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state,
                currency: updateCurrency(state.currency, action)
            }
        default:
            return state;
    }
}