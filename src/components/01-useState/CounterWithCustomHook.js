import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import '../../index.css';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr/>

            <button onClick={ increment } className="btn"> +1 </button>
            <button onClick={ reset } className="btn"> Reset </button>
            <button onClick={ () => decrement(2) } className="btn"> -1 </button>
        </>
    )
}
