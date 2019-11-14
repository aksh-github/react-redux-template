

import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import withHoc from '../../utils/hoc';
import { Lazy } from '../../utils/Lazy';


import { fetchLatestCurrency, fetchCurrencyService } from '../../../redux/action';
import { postTodoService } from '../../../redux/action2';

//import Currency from './comps/Currency';

class Home extends React.Component
{
    static Currency = Lazy('page', 'home/comps/Currency');

    getCurrency = () =>
    {
        // this.props.dispatch(fetchLatestCurrency())
        //     .then((resp) =>
        //     {
        //         // console.log(resp)
        //     })

        this.props.fetchCurrencyService()
            .then((resp) =>
            {
                console.log(resp)
            })
    }

    postTodo = () =>
    {

        this.props.postTodoService({
            "title": "foo",
            "body": "bar",
            "userId": 1
        })
            .then((resp) =>
            {
                console.log(resp)
            })
    }

    render()
    {
        const { currency, name } = this.props;


        return <div>
            <h2>Home {name}</h2>
            <p><button onClick={this.getCurrency}>Get remote data</button></p>
            <p><button onClick={this.postTodo}>Post Todo</button></p>

            <Home.Currency currencyArr={currency.value} />
        </div>
    }
}

const prop1 = 'do nothing prop';

const func = (prop) =>
{
    console.log('do nothing func for HOC', prop);
}

const mapStateToProps = state => ({
    currency: state.homeReducer.currency,
    name: state.homeReducer.name
});

const mapDispatchToProps = (dispatch) =>
{
    return {
        fetchCurrencyService: () => dispatch(fetchCurrencyService()),
        postTodoService: (todoObj) => dispatch(postTodoService(todoObj)),
    }
}

//export default withHoc(prop1, func)(withRouter(connect(mapStateToProps)(Home)));
export default withRouter(withHoc(prop1, func)(connect(mapStateToProps, mapDispatchToProps)(Home)));
