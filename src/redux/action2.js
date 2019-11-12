
import { endPoints } from '../utils/config';

export const POST_TODO_FAIL = 'POST_TODO_FAIL';

export const postTodoFail = (error) =>
{
    return {
        type: POST_TODO_FAIL,
        payload: {
            error: 'Something went wrong',
            loading: false,
            value: null
        }
    };
}

export const POST_TODO = 'POST_TODO';
export const postTodo = () =>
{
    return {
        type: POST_TODO,
        payload: {
            error: null,
            loading: true
        }
    };
}

export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS';
export const postTodoSuccess = (currency) =>
{
    return {
        type: POST_TODO_SUCCESS,
        payload: {
            error: null,
            loading: false,
            value: currency
        }
    }
}


export const postTodoService = todoObj => (dispatch, getState) =>
{

    return dispatch({
        type: 'API',
        payload: {
            api: {
                url: 'https://jsonplaceholder.typicode.com' + endPoints.posts,
                method: 'POST',
                body: todoObj,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            },
            handlers: {
                before: postTodo,     //before api call
                //transform: transform,
                onSuccess: postTodoSuccess,
                onFailure: postTodoFail,
                after: null
            }
        }
    })
}