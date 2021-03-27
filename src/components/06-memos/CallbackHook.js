import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../../index.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState( 10 );
    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    //Evitamos que genere una nueva version de la función
    //En cada re-renderizado del componente padre
    //Y re-renderice el componente hijo nuevamente
    const increment = useCallback((num) => {
        setCounter( c => c + num )
    },[setCounter])

    //Tambien es recomendado usar useCallback en los useEffect al enviar una función
    useEffect(()=> {
        //??
    }, [increment])

    return (
        <>
            <h1>UseCallback Hook: { counter }</h1>
            <hr/>
            <ShowIncrement increment={increment} />
        </>
    )
}
