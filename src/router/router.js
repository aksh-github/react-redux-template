
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../ui/pages/Home';

//foll 2 imported dynamically
// import About from '../ui/pages/About';
//import Users from '../ui/pages/Users';

import { Lazy } from '../ui/common/Lazy';
import ErrorBoundary from '../ui/common/ErrorBoundary';

const Routes = () =>
{
    return <Suspense fallback={<div className="loading-compo">Loading component...</div>}>
        <Switch>
            <Route path="/" exact render={(props) =>
            {
                // console.log(props);

                return <ErrorBoundary>
                    <Home fromRoute={'fromRoute'} />
                </ErrorBoundary>
            }} />
            <Route path="/about" render={(props) =>
            {
                // console.log(props);

                const About = Lazy('page', 'About');

                return <ErrorBoundary>
                    <About />
                </ErrorBoundary>
            }} />
            <Route path="/users" render={(props) =>
            {
                // console.log(props);

                const Users = Lazy('page', 'Users');

                return <ErrorBoundary>
                    <Users />
                </ErrorBoundary>
            }} />
        </Switch>
    </Suspense>
}

export default Routes;