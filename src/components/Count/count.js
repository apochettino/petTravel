import React from 'react'

const Count = ({min, max, onAdd, count}) => {

    return (

        <>
        <button onClick={min}>-</button>
        <p>{count}</p>
        <button onClick={max}>+</button>
        </>

    )
}

export default Count