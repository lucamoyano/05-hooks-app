import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../../index.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
    const { loading, data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    //Si data!= null, extrae la información de data[0]
    const { author, quote } = !!data && data[0] 


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                onClick={ increment }
                className="btn btn-primary"
            >Siguiente frase
            </button>

        </>
    )
}
