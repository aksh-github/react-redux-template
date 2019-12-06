
export const actionTypes = {};  //global actions object

//createAction
export const createActionType = ({ name, group, type }) =>
{

    if (group && !actionTypes[`${group}`])
        actionTypes[`${group}`] = {};		//create group if it doesn't exist

    // console.log(actionTypes)

    if (type === 'API')
    {
        if (group)
        {
            const base = `${group}:${name}`;

            actionTypes[`${group}`][`${name}`] = {
                base: `${base}`,
                success: `${base}_SUCCESS`,
                fail: `${base}_FAIL`
            }

            return actionTypes[`${group}`][`${name}`];
        }
        else
        {
            const base = `${name}`;

            actionTypes[`${base}`] = {
                base: `${base}`,
                success: `${base}_SUCCESS`,
                fail: `${base}_FAIL`
            }

            return actionTypes[`${base}`];
        }

    }
    else
    {
        if (group)
        {
            const base = `${group}:${name}`;

            actionTypes[`${group}`][`${name}`] = `${base}`;
            return actionTypes[`${group}`][`${name}`];
        }
        else
        {
            actionTypes[`${name}`] = `${name}`;
            return actionTypes[`${name}`];
        }
    }
}

//generic reducer

export const createReducer = ({ base, fail, success }, type) =>
{
    // here we're returning our customized reducer
    return (state, action) =>
    {
        switch (action.type)
        {
            case base:
                return {
                    ...state,
                    loading: action.payload.loading,
                    error: action.payload.error
                }
            case fail:
                return {
                    ...state,
                    loading: action.payload.loading,
                    error: action.payload.error
                }
            case success:
                return {
                    ...state,
                    loading: action.payload.loading,
                    error: action.payload.error,
                    value: type === 'MERGE' ? state.value.concat(action.payload.value) : action.payload.value,
                }
            default:
                return state;
        }
    }
}



//generic action creator

export const actionCreator = ({ base, success, fail }) =>
{
    return {
        base: base,
        success: success,
        fail: fail
    }
}