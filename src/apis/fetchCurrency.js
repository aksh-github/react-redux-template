

import { currencyFetch, currencyFetchSuccess, currencyFetchFail } from '../redux/action';

import { endPoints } from '../utils/config';

export const fetchLatestCurrency = someApiRelated => (dispatch, getState) =>
{

    // const { isLoading, value } = getState().commonReducer.data.currency;

    // if (isLoading)
    // {
    //     console.log('Already Loading');
    //     return Promise.resolve(null);      //always return promise
    // }
    // else if (value)
    // {
    //     dispatch(currencyFetchSuccess(value))
    //     return Promise.resolve(value);      //always return promise
    // }

    dispatch(currencyFetch())

    //url should be in .env file

    return fetch('https://api.exchangeratesapi.io' + endPoints.latestCurrency)
        .then(resp => resp.json())
        .then((resp) =>
        {
            // console.log(resp);

            if (resp && resp.rates)
            {
                const keys = Object.keys(resp.rates);
                let arr = [];

                for (let i = 0; i < keys.length; ++i)
                {
                    let o = { [keys[i]]: resp.rates[keys[i]] }
                    arr.push(o)
                }

                dispatch(currencyFetchSuccess(arr))
            }
            else
                dispatch(currencyFetchFail(resp.error))

            return resp;    //might be reqd some times
        })
        .catch((err) =>
        {
            console.log(err);
            dispatch(currencyFetchFail())
        })
}