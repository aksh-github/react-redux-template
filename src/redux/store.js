
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
    console.time('START');
    let result = next(action)
    console.log('next state', store.getState())
    console.timeEnd('START');
    console.groupEnd()
    return result
}


const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production')
    middlewares.push(logger)

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
);

export default store;