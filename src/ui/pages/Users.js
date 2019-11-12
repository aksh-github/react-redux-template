
import React from 'react';
import { withRouter } from "react-router-dom";

import withHoc from '../core/hoc';

class Users extends React.Component
{
    render()
    {
        return <div>
            <h2>Users</h2>
        </div>
    }
}

export default withHoc(null, null)(withRouter(Users));