import React, {useState} from 'react';
import Count from '../../components/Count/count';

const CountContainer = ({initial, stock}) => {
    const [Count, setCount] = useState (initial);

    const add =()=> {
        if(Count > stock) {
            setCount(Count +1);
        }
        
    };

    const sub =()=> {
        if(Count <= stock){
            setCount(Count -1);
        }
        
    };

    return <>
    <Count min={sub} max={add} onAdd='' count={Count}/>
    </>;
    
    

    
}

export default CountContainer