
import React from 'react';
import { withRouter } from "react-router-dom";

import withHoc from '../core/hoc';


class About extends React.Component
{
    render()
    {
        return <div>
            <h2>About</h2>
        </div>
    }
}

export default withHoc(null, null)(withRouter(About));