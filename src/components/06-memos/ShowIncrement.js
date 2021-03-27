import React from 'react'
import PropTypes from 'prop-types'

export const ShowIncrement = ({ increment }) => {
    return (
        <button
            className="btn btn-dark"
            onClick={ ()=> increment(5) }
            // onClick={ increment }
        >
            Incrementar
        </button>
    )
}

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
