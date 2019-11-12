
export const FETCH_CURRENCY_FAIL = 'FETCH_CURRENCY_FAIL';

export const currencyFetchFail = (error) =>
{
    return {
        type: FETCH_CURRENCY_FAIL,
        payload: {
            error: 'Something went wrong',
            loading: false,
            value: []
        }
    };
}

export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const currencyFetch = () =>
{
    return {
        type: FETCH_CURRENCY,
        payload: {
            error: null,
            loading: false
        }
    };
}

export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const currencyFetchSuccess = (currency) =>
{
    return {
        type: FETCH_CURRENCY_SUCCESS,
        payload: {
            error: null,
            loading: false,
            value: currency
        }
    }
}