
import React from 'react';


const retryLoad = (fn, retriesLeft = 3, interval = 1000) =>
{
    return new Promise((resolve, reject) =>
    {
        //console.log('inside retryload')

        fn().then(resolve)
            .catch((error) =>
            {
                //console.log(error);

                let tout = setTimeout(() =>
                {
                    if (retriesLeft === 1)
                    {
                        clearTimeout(tout);
                        tout = null;

                        console.log('throw here')

                        reject(Error('Compo load failed'))

                        return;
                    }

                    // Passing on "reject" is the important part
                    retryLoad(fn, retriesLeft - 1, interval).then(resolve, reject)

                }, interval);
            });
    });
}

export const Lazy = (type, compoName) =>
{

    switch (type)
    {
        case 'common':
            return React.lazy(() => retryLoad(() => import('../common/' + compoName)))

        case 'page':
            return React.lazy(() => retryLoad(() => import('../pages/' + compoName)))

        default:
            return null;
    }

}//()
