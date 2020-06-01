import { endPoints } from '../utils/config';
import { currencyType } from './actionTypes';

const fetchCurrencyAction = {
    base: () => ({
        type: currencyType.fetch.base,
        payload: {
            error: null,
            loading: true,
        },
    }),
    success: (currency) => ({
        type: currencyType.fetch.success,
        payload: {
            error: null,
            loading: false,
            value: currency,
        },
    }),
    fail: (error) => ({
        type: currencyType.fetch.fail,
        payload: {
            error: 'Something went wrong',
            loading: false,
            value: [],
        },
    }),
};

export const fetchCurrencyService = (someApiRelated) => (
    dispatch,
    getState
) => {
    const { base, success, fail } = fetchCurrencyAction;

    const transform = (resp) => {
        if (resp && resp.rates) {
            const keys = Object.keys(resp.rates);
            let arr = [];

            for (let i = 0; i < keys.length; ++i) {
                let o = { [keys[i]]: resp.rates[keys[i]] };
                arr.push(o);
            }

            return arr;
        }
    };

    const responseValidator = (resp) => {
        if (resp && resp.rates && resp.rates instanceof Object) {
            return true;
        } else {
            return false;
        }
    };

    //foll example shows variation where all handler functions are optional now
    // But in this case we need to take care of dispatching before, success, fail etc
    // This provides flexibility when complex logic is involved

    dispatch(base());

    return dispatch({
        type: 'API',
        payload: {
            api: {
                url:
                    'https://api.exchangeratesapi.io' +
                    endPoints.latestCurrency,
                method: 'GET',
            },
        },
    })
        .then((resp) => {
            if (responseValidator(resp)) {
                dispatch(success(transform(resp)));

                //foll done because of cyclic dependency bet action.js and action2.js
                import('./action2').then((actions) => {
                    console.log(actions);
                    dispatch(actions.increment(1));
                });
            } else {
                // dispatch(fail(resp));    //if we are throwing we dont need to dispatch fail here, catch block will dispatch fail
                throw Error('Something went wrong, could not get response');
            }

            // console.log(actionTypes)

            return resp; //return original resp, NOT transformed one
        })
        .catch((err) => {
            dispatch(fail(err));
        });
};
