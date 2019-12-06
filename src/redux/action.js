
import { endPoints } from '../utils/config';
import { fetchCurrencyType } from './actionTypes';

export const currencyFetchFail = (error) =>
{
    return {
        type: fetchCurrencyType.fail,
        payload: {
            error: 'Something went wrong',
            loading: false,
            value: []
        }
    };
}

export const currencyFetch = () =>
{
    return {
        type: fetchCurrencyType.base,
        payload: {
            error: null,
            loading: true
        }
    };
}

export const currencyFetchSuccess = (currency) =>
{
    return {
        type: fetchCurrencyType.success,
        payload: {
            error: null,
            loading: false,
            value: currency
        }
    }
}


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

    const responseValidator = (resp) =>
    {
        if (resp && resp.rates && resp.rates instanceof Object)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //foll example shows variation where all handler functions are optional now
    // But in this case we need to take care of dispatching before, success, fail etc
    // This provides flexibility when complex logic is involved

    dispatch(currencyFetch());

    return dispatch({
        type: 'API',
        payload: {
            api: {
                url: 'https://api.exchangeratesapi.io' + endPoints.latestCurrency,
                method: 'GET',
            },
            handlers: {
                // before: currencyFetch,
                // transform: transform,
                // responseValidator: responseValidator,
                // onSuccess: currencyFetchSuccess,
                onFailure: currencyFetchFail,   // this is vv imp for network disconnect scenarios
                // after: null
            }
        }
    }).then((resp) =>
    {

        if (responseValidator(resp))
        {
            dispatch(currencyFetchSuccess(transform(resp)))
        }
        else
        {
            dispatch(currencyFetchFail(resp))
        }

        // console.log(actionTypes)

        //foll done because of cyclic dependency bet action.js and action2.js
        import('./action2').then((actions) =>
        {
            console.log(actions)
            dispatch(actions.increment(1))
        })


        return resp;    //return original resp, NOT transformed one

    })
        .catch((err) =>
        {
            dispatch(currencyFetchFail(err))
        })
}