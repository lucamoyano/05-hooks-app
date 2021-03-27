import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../../index.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true)

    //Si el counter cambia, necesito una nueva versión memorizada del resultado de la función
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>  
            <hr/>

            <p> { memoProcesoPesado } </p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-danger ms-3"
                onClick={ ()=> setShow(!show) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </>
    )
}
