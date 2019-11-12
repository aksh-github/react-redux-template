
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../ui/pages/Home';
import About from '../ui/pages/About';
import Users from '../ui/pages/Users';

const Routes = () =>
{
    return <Suspense fallback={<div className="loading-compo">Loading component...</div>}>
        <Switch>
            <Route path="/" exact render={(props) =>
            {
                console.log(props);

                // const Compo = Dynamic('Home');

                return <Home fromRoute={'fromRoute'} />
            }} />
            <Route path="/about" render={(props) =>
            {
                console.log(props);

                // const Compo = Dynamic('About')

                return <About />
            }} />
            <Route path="/users" render={(props) =>
            {
                console.log(props);

                // const Compo = Dynamic('Users');

                return <Users />
            }} />
        </Switch>
    </Suspense>
}

export default Routes;