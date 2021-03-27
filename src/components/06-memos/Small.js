import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Hola mundo')
    return (
        <small>{ value }</small>
    )
})
