

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action =>
{
    console.group(action.type)
    console.info('dispatching', action)
    // console.time('START');
    let result = next(action)
    console.log('next state', store.getState())
    // console.timeEnd('START');
    console.groupEnd()
    return result
}


//Ajax middleware

export const ServiceMiddleware = store => next => async action =>
{
    if (action.type !== 'API')
    {
        next(action);
        return;
    }

    //middleware helper functions

    const callToJson = async (result) =>
    {
        return result ? result.json() : Promise.resolve(result)
    }

    const callValidator = (result, responseValidator) =>
    {
        return responseValidator instanceof Function ? responseValidator(result) : true;
    }

    const callTransform = (result, transform) =>
    {
        if (transform instanceof Function)
            return transform(result)
        else
            return result
    }

    //start middleware logic

    let _result = null;

    const { url, headers, method } = action.payload.api;
    let { body } = action.payload.api;

    const {
        before,     //before api call
        responseValidator,  //to check whether response received is in correct format so that we can dispatch succcess action
        transform,  //should return something
        onSuccess,
        errorTransform,
        onFailure,
        after       //after success or fail api call
    } = action.payload.handlers;

    const { dispatch } = store;

    if (before instanceof Function)
        dispatch(before());

    try
    {

        if (method === 'GET' || !method)
        {
            body = undefined;
            console.log('Since method is get, ignoring the body');
        }

        _result = await fetch(url, {
            method: method || 'GET',
            body: JSON.stringify(body),
            headers: {
                //'custom-x': 'foobar',
                ...headers  //this will retain (NOT overwrite) common headers 
            }
        });

        //1. step 1: convert to json. If response is blank warn on console 
        // result = await callToJson(result);

        let result = await callToJson(_result), transformedResult = null;

        //2. step 2: call validate when provided to decide to dispatch success or fail action
        const validResponseFlag = callValidator(result, responseValidator)


        // console.log(result, validResponseFlag)

        //3. step 3: call transform when provided 
        if (validResponseFlag)
            transformedResult = callTransform(result, transform);

        // console.log(result, validResponseFlag)

        //4. dispatch success or fail based on response of validator

        if (validResponseFlag)
        {
            if (onSuccess instanceof Function)
                dispatch(onSuccess(transformedResult))
        }
        else
        {
            if (onFailure instanceof Function)
                dispatch(onFailure(result));
        }

        if (after instanceof Function)
            after(result);

        // console.log(result)

        return result;

    }
    catch (err)
    {
        console.error(err);

        if (errorTransform instanceof Function)
        {
            if (onFailure instanceof Function)
                dispatch(onFailure(errorTransform(err)));
        }
        else
        {
            if (onFailure instanceof Function)
                dispatch(onFailure(err));
        }

        if (after instanceof Function)
            after(err);

        return _result;
    }
};
