
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './home-reducer';
import commonReducer from './common-reducer';
// import usersReducer from './users-reducer';
// import aboutReducer from './about-reducer';

import * as middlewares from './middlewares';


const reducer = combineReducers({
    home: homeReducer,
    common: commonReducer,
    // usersReducer: usersReducer,
    // aboutReducer: aboutReducer,
});


const middlewaresArr = [thunk];

if (process.env.NODE_ENV !== 'production')
    middlewaresArr.push(middlewares.logger)


middlewaresArr.push(middlewares.ServiceMiddleware);

const store = createStore(
    reducer,
    applyMiddleware(...middlewaresArr)
);

export default store;