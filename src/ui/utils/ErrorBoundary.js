
import React from 'react';
import { withRouter } from "react-router-dom";


class ErrorBoundary extends React.Component
{
    state = { hasError: false };

    constructor(props)
    {
        super(props);
        //console.log('implement this as HOC then it will work');
    }

    static getDerivedStateFromError()
    {
        return { hasError: true };
    }

    componentDidUpdate(prevProps)
    {
        if (this.props.children !== prevProps.children)
        {
            this.resetError()
            //this.handleRetry()
        }
        // else
        //     console.log('NO update')
    }

    resetError = () =>
    {
        this.setState({ hasError: false })
    }

    handleRetry = () =>
    {
        console.log(this.props)
        //console.log('NOT implemented intentionally, we can simply click on ')
        this.props.history.push(this.props.location.pathname)   //reload current route
    }

    render()
    {
        if (this.state.hasError)
        {
            return (<div>
                Boo, unable to load!<button onClick={this.handleRetry}>Retry</button>
            </div>
            );
        }
        return this.props.children;
    }
}

export default withRouter(ErrorBoundary);