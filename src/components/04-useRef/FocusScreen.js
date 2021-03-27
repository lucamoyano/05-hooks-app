import React, { useRef } from 'react'

import '../../index.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <input 
                ref={ inputRef }
                className="form-control mb-3"
                placeholder="Su nombre"
            />

            <button
                onClick={ handleClick }
                className="btn btn-primary"
            >Focus
            </button>
        </>
    )
}
