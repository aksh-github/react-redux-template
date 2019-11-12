

import { commonState } from './initialState';
import { POST_TODO, POST_TODO_FAIL, POST_TODO_SUCCESS } from '../redux/action2';


const updateCurrentTodo = (state, action) =>
{
    switch (action.type)
    {
        case POST_TODO:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        case POST_TODO_FAIL:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error
            }
        case POST_TODO_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                error: action.payload.error,
                value: action.payload.value,
            }
        default:
            return state;
    }
}

export default (state = commonState, action) =>
{
    switch (action.type)
    {
        case POST_TODO:
        case POST_TODO_FAIL:
        case POST_TODO_SUCCESS:
            return {
                ...state,
                currentTodo: updateCurrentTodo(state.currentTodo, action)
            }
        default:
            return state;
    }
}