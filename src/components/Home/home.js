import React from 'react'
import Boton from '../Button/Button'


import './home.css'

export const Home = ({greeting}) => {

    return (

        <div className="homeStyle">
            
            <h2>{greeting}</h2>
            <Boton />
        </div>
    )
}
