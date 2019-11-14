
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../ui/pages/home/Home';

//foll 2 imported dynamically
// import About from '../ui/pages/About';
//import Users from '../ui/pages/Users';

import { Lazy } from '../ui/utils/Lazy';
import ErrorBoundary from '../ui/utils/ErrorBoundary';
import AppContext from '../utils/context';

const Routes = () =>
{
    return <Suspense fallback={<div className="loading-compo">Loading component...</div>}>
        <AppContext.Consumer>
            {
                (config) =>
                {
                    const { routes } = config;
                    return <Switch>
                        <Route path={routes.home.path} exact render={(props) =>
                        {
                            // console.log(props);

                            return <ErrorBoundary>
                                <Home fromRoute={'fromRoute'} />
                            </ErrorBoundary>
                        }} />
                        <Route path={routes.about.path} render={(props) =>
                        {
                            // console.log(props);

                            const About = Lazy('page', 'About');

                            return <ErrorBoundary>
                                <About />
                            </ErrorBoundary>
                        }} />
                        <Route path={routes.users.path} render={(props) =>
                        {
                            // console.log(props);

                            const Users = Lazy('page', 'Users');

                            return <ErrorBoundary>
                                <Users />
                            </ErrorBoundary>
                        }} />

                    </Switch>
                }
            }
        </AppContext.Consumer>
    </Suspense>
}

export default Routes;