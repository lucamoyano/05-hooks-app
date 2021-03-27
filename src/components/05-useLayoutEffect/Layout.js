import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const [boxSize, setBoxSize] = useState({})
    const pTag = useRef();

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    //Si data!= null, extrae la información de data[0]
    const { quote } = !!data && data[0] 

    //Obtener mediciones luego de que se haya renderizado el html
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])


    return (
        <>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-end">
                <p 
                    className="mb-2"
                    ref={ pTag }
                > { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                onClick={ increment }
                className="btn btn-primary"
            >Siguiente frase
            </button>

        </>
    )
}
