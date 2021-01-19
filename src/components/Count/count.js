import React from 'react';

const Count = ({min, max, onAdd, count}) => {

    return (

        <>
        <button className='countAdor' onClick={min}> - </button>
        <p>{count}</p>
        <button className='countAdor' onClick={max}> + </button>
        </>

    );
};

export default Count;