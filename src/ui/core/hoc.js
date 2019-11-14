
import React from 'react';

const withHoc = (moreProps, moreFunction) => (WrappedComponent) =>
{
    //can use moreProps, moreFunction here

    return class extends React.Component
    {

        state = {
            hocName: 'abc'
        }

        constructor(props)
        {
            super(props);

            console.log(props)

            //can use moreProps, moreFunction here

            if (moreFunction instanceof Function)
                moreFunction(moreProps);
        }


        render()
        {
            return <WrappedComponent {...this.props}
                hocProps={this.state.hocName} />
        }//()
    }
}

export default withHoc;