
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './home-reducer';
import commonReducer from './common-reducer';
// import usersReducer from './users-reducer';
// import aboutReducer from './about-reducer';


const reducer = combineReducers({
    commonReducer: commonReducer,
    // usersReducer: usersReducer,
    // aboutReducer: aboutReducer,
    homeReducer: homeReducer
});

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action =>
{
    console.group(action.type)
    console.info('dispatching', action)
    // console.time('START');
    let result = next(action)
    console.log('next state', store.getState())
    // console.timeEnd('START');
    console.groupEnd()
    return result
}

const ServiceMiddleware = store => next => async action =>
{
    if (action.type !== 'API')
    {
        next(action);
        return;
    }

    const { url, body, headers, method } = action.payload.api;

    const {
        before,     //before api call
        transform,  //should return something
        onSuccess,
        onFailure,
        after       //after success or fail api call
    } = action.payload.handlers;

    const { dispatch } = store;

    dispatch(before());

    try
    {
        let result = await fetch(url, {
            method: method || 'GET',
            body: JSON.stringify(body),
            headers: {
                //'custom-x': 'foobar',
                ...headers  //this will retain (NOT overwrite) common headers 
            }
        });

        result = await result.json();

        if (transform instanceof Function)
            dispatch(onSuccess(transform(result)))
        else
            dispatch(onSuccess(result))


        if (after instanceof Function)
            after(result);

        return result;
    }
    catch (err)
    {
        dispatch(onFailure(err));

        if (after instanceof Function)
            after(err);
    }
};


const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production')
    middlewares.push(logger)


middlewares.push(ServiceMiddleware);

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

export default store;