
import { endPoints } from '../utils/config';
import { incrementType, postTodoType, getTodoType } from './actionTypes';


const postTodoAction = {
    base: () => ({
        type: postTodoType.base,
        payload: {
            error: null,
            loading: true
        }
    }), success: (todo) => ({
        type: postTodoType.success,
        payload: {
            error: null,
            loading: false,
            value: todo
        }
    }), fail: (error) => ({
        type: postTodoType.fail,
        payload: {
            error: 'Something went wrong',
            loading: false,
            // value: null  
        }
    })
}


const getTodoAction = {
    base: () => ({
        type: getTodoType.base,
        payload: {
            error: null,
            loading: true
        }
    }), success: (todos) => ({
        type: getTodoType.success,
        payload: {
            error: null,
            loading: false,
            value: todos
        }
    }), fail: (error) => ({
        type: getTodoType.fail,
        payload: {
            error: 'Something went wrong',
            loading: false,
            // value: null  
        }
    })
}

export const increment = (val) =>
{
    return {
        type: incrementType,
        payload: {
            value: val ? val : 1
        }
    }
}


export const postTodoService = todoObj => (dispatch, getState) =>
{

    const responseValidator = (resp) =>
    {
        if (resp && resp.id)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const { base, success, fail } = postTodoAction;

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
                before: base,     //before api call
                //transform: transform,
                responseValidator: responseValidator,
                onSuccess: success,
                onFailure: fail,
                after: null
            }
        }
    }).then((resp) =>
    {
        if (responseValidator(resp))
            dispatch(increment(1))

        return resp;
    })
}


export const getTodoService = () => (dispatch, getState) =>
{

    const responseValidator = (resp) =>
    {
        if (resp && resp instanceof Array)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const { base, success, fail } = getTodoAction;

    return dispatch({
        type: 'API',
        payload: {
            api: {
                url: 'https://jsonplaceholder.typicode.com' + endPoints.posts,
                method: 'GET',
                body: {},
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            },
            handlers: {
                before: base,     //before api call
                //transform: transform,
                responseValidator: responseValidator,
                onSuccess: success,
                onFailure: fail,
                after: null
            }
        }
    }).then((resp) =>
    {
        if (responseValidator(resp))
            dispatch(increment(1))

        return resp;
    })
}

export const incrementService = (val) => (dispatch, getState) =>
{
    return increment(val)
}