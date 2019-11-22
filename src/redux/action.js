
import { endPoints } from '../utils/config';


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
            loading: true
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

// export const fetchLatestCurrency = someApiRelated => (dispatch, getState) =>
// {

//     // const { isLoading, value } = getState().commonReducer.data.currency;

//     // if (isLoading)
//     // {
//     //     console.log('Already Loading');
//     //     return Promise.resolve(null);      //always return promise
//     // }
//     // else if (value)
//     // {
//     //     dispatch(currencyFetchSuccess(value))
//     //     return Promise.resolve(value);      //always return promise
//     // }

//     dispatch(currencyFetch())

//     //url should be in .env file

//     return fetch('https://api.exchangeratesapi.io' + endPoints.latestCurrency)
//         .then(resp => resp.json())
//         .then((resp) =>
//         {
//             // console.log(resp);

//             if (resp && resp.rates)
//             {
//                 const keys = Object.keys(resp.rates);
//                 let arr = [];

//                 for (let i = 0; i < keys.length; ++i)
//                 {
//                     let o = { [keys[i]]: resp.rates[keys[i]] }
//                     arr.push(o)
//                 }

//                 dispatch(currencyFetchSuccess(arr))
//             }
//             else
//                 dispatch(currencyFetchFail(resp.error))

//             return resp;    //might be reqd some times
//         })
//         .catch((err) =>
//         {
//             console.log(err);
//             dispatch(currencyFetchFail())
//         })
// }

//use of middleware

export const fetchCurrencyService = someApiRelated => (dispatch, getState) =>
{

    const transform = (resp) =>
    {
        if (resp && resp.rates)
        {
            const keys = Object.keys(resp.rates);
            let arr = [];

            for (let i = 0; i < keys.length; ++i)
            {
                let o = { [keys[i]]: resp.rates[keys[i]] }
                arr.push(o)
            }

            return arr;
        }
    }

    return dispatch({
        type: 'API',
        payload: {
            api: {
                url: 'https://api.exchangeratesapi.io' + endPoints.latestCurrency,
                method: 'GET',
                // body: {}
            },
            handlers: {
                before: currencyFetch,
                transform: transform,
                onSuccess: currencyFetchSuccess,
                onFailure: currencyFetchFail,
                after: null
            }
        }
    })
}