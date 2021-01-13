import React from'react'
import './CartWidget.css'
import Icono from '../../assets/img/carrito.png'

export const CartWid = () => { //uso default si voy a hacer mas de una navbar

    return (
        <div className="CartWid"> 
        
            <img src={Icono} alt="logo"/> 

        </div>

    )

}