import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import withHoc from '../../utils/hoc';
import { Lazy } from '../../utils/Lazy';

import { fetchCurrencyService } from '../../../redux/action';
import {
    postTodoService,
    getTodoService,
    incrementService,
} from '../../../redux/action2';

//import Currency from './comps/Currency';

class Home extends React.Component {
    static Currency = Lazy('page', 'home/comps/Currency');

    getCurrency = () => {
        // this.props.dispatch(fetchLatestCurrency())
        //     .then((resp) =>
        //     {
        //         // console.log(resp)
        //     })

        this.props.fetchCurrencyService().then((resp) => {
            console.log(resp);
        });
    };

    postTodo = () => {
        const x = 'test';

        this.props
            .postTodoService({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
            .then((resp) => {
                console.log(resp);
            });
    };

    getTodo = () => {
        this.props
            .getTodoService({
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
            .then((resp) => {
                console.log(resp);
            });
    };

    render() {
        const { currency, name } = this.props;

        return (
            <div>
                <h2>Home {name}</h2>
                <p>
                    <button onClick={this.getCurrency}>Get remote data</button>
                </p>

                <p>
                    <button onClick={this.postTodo}>Post Todo</button>{' '}
                    <button onClick={this.getTodo}>Get Todos</button>
                </p>

                <Home.Currency currencyArr={currency.value} />
            </div>
        );
    }
}

const selectorHome = (state) => state.home;

const mapStateToProps = (state) => {
    const home = selectorHome(state);

    return {
        currency: home.currency,
        name: home.name,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCurrencyService: () => dispatch(fetchCurrencyService()),
//         postTodoService: todoObj => dispatch(postTodoService(todoObj)),
//         getTodoService: () => dispatch(getTodoService())
//         // incrementService: (v) => dispatch(incrementService(v))
//     };
// };

const mapDispatchToProps = {
    fetchCurrencyService,
    postTodoService,
    getTodoService,
};

//export default withHoc(prop1, func)(withRouter(connect(mapStateToProps)(Home)));
export default withRouter(
    withHoc('do nothing prop', (prop) => {
        console.log('do nothing func for HOC', prop);
    })(connect(mapStateToProps, mapDispatchToProps)(Home))
);
