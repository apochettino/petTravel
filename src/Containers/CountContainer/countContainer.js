import React, {useState} from 'react';
import Count from '../../components/Count/count';

const CountContainer = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if(count > stock) {
            alert ('No hay más stock disponible');
        }   else{ 
            setCount(count +1);
        }        
    };

    const sub = () => {
        if(count <= stock){
            setCount(count -1);
        }
        
    };

    return (
        <>
            <Count min={sub} max={add} onAdd='' count={count}/>
        </>    
    );   
};

export default CountContainer;