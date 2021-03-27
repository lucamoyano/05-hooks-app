import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../../index.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);


    return (
        <>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button 
            onClick={ ()=> setShow( !show ) }
            className="btn btn-danger"
            > 
            {show ? 'Hide' : 'Show'}
            </button>

        </>
    )
}
