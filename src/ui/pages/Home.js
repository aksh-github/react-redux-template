

import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import withHoc from '../core/hoc';

import { fetchLatestCurrency, fetchCurrencyService } from '../../redux/action';
import { postTodoService } from '../../redux/action2';


const Currency = ({ currencyArr }) =>
{

    const iterator = (ele) =>
    {
        // console.log(Object.keys(ele))
        const key = Object.keys(ele)[0];

        return <div key={key}>{key}: {ele[key]}</div>
    }

    return currencyArr.map(iterator)
}

class Home extends React.Component
{

    getCurrency = () =>
    {
        // this.props.dispatch(fetchLatestCurrency())
        //     .then((resp) =>
        //     {
        //         // console.log(resp)
        //     })

        this.props.dispatch(fetchCurrencyService())
            .then((resp) =>
            {
                console.log(resp)
            })
    }

    postTodo = () =>
    {

        this.props.dispatch(postTodoService({
            "title": "foo",
            "body": "bar",
            "userId": 1
        }))
            .then((resp) =>
            {
                console.log(resp)
            })
    }

    render()
    {
        const { homeState } = this.props;

        // console.log(homeState)

        return <div>
            <h2>Home {homeState.name}</h2>
            <p><button onClick={this.getCurrency}>Get remote data</button></p>
            <p><button onClick={this.postTodo}>Post Todo</button></p>

            <Currency currencyArr={homeState.currency.value} />


        </div>
    }
}

const prop1 = 'do nothing prop';

const func = (prop) =>
{
    console.log('do nothing func for HOC', prop);
}

const mapStateToProps = state => ({
    homeState: state.homeReducer
});

export default withHoc(prop1, func)(withRouter(connect(mapStateToProps)(Home)));
