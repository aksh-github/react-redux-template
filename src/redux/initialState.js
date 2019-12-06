
export const commonState = {
    //this is sample for POST reqst
    currentTodo: {
        loading: false,
        value: null,
        error: null
    },
    todos: {
        loading: false,
        value: null,
        error: null
    },
    apiCounter: 0
};


export const homeState = {

    currency: {
        loading: false,
        value: [],
        error: null
    },
    name: 'some name'
}