
//define groups (namespaces)

import { createActionType, actionTypes } from './redux-utils';

export const fetchCurrencyType = createActionType({ name: 'FETCH', group: 'CURRENCY', type: 'API' });


export const postTodoType = createActionType({ name: 'POST', group: 'TODO', type: 'API' });
export const getTodoType = createActionType({ name: 'GET', group: 'TODO', type: 'API' });

export const incrementType = createActionType({ name: 'INCR_APICOUNTER' })
export const decrementType = createActionType({ name: 'DECR_APICOUNTER' })

console.log(actionTypes)