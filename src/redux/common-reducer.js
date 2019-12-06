
import { commonState } from './initialState';
import { createReducer } from './redux-utils';

import { incrementType, decrementType, postTodoType, getTodoType } from './actionTypes';

// console.log(postTodoType)

const postTodoReducer = createReducer(postTodoType)
const getTodoReducer = createReducer(getTodoType)

// console.log(postTodoReducer)

// reducer as object literal

const updateCounter = (state, action) =>
{
    console.log(incrementType)

    const actions = {
        [incrementType]: (state, action) =>
        {
            return state + action.payload.value
        },

        [decrementType]: (state, action) =>
        {
            return state + action.payload.value
        },
        default: (state) => state
    }

    return actions[action.type || 'default'](state, action)

}


export default (state = commonState, action) =>
{
    switch (action.type)
    {
        case postTodoType.base:
        case postTodoType.fail:
        case postTodoType.success:
            return {
                ...state,
                currentTodo: postTodoReducer(state.currentTodo, action)    //updateCurrentTodo(state.currentTodo, action)
            }
        case getTodoType.base:
        case getTodoType.fail:
        case getTodoType.success:
            return {
                ...state,
                todos: getTodoReducer(state.todos, action)    //updateCurrentTodo(state.currentTodo, action)
            }
        case incrementType:
        case decrementType:
            return {
                ...state,
                apiCounter: updateCounter(state.apiCounter, action)
            }
        default:
            return state;
    }
}