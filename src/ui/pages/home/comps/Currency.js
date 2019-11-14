
import React from 'react';

const Currency = ({ currencyArr }) =>
{

    const iterator = (ele) =>
    {
        // console.log(Object.keys(ele))
        const key = Object.keys(ele)[0];

        return <div key={key}>{key}: {ele[key]}</div>
    }

    return currencyArr && currencyArr.map ? currencyArr.map(iterator) : null
}

export default Currency;