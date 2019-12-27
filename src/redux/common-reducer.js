
import { commonState } from './initialState';
import { createReducer } from './redux-utils';

import { incrementType, decrementType, todoType } from './actionTypes';

// console.log(post)

const postTodoReducer = createReducer(todoType.post)
const getTodoReducer = createReducer(todoType.get)

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
    const { get, post } = todoType;

    switch (action.type)
    {
        case post.base:
        case post.fail:
        case post.success:
            return {
                ...state,
                currentTodo: postTodoReducer(state.currentTodo, action)    //updateCurrentTodo(state.currentTodo, action)
            }
        case get.base:
        case get.fail:
        case get.success:
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