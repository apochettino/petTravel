import React from'react'
import './navBar.css'
import  '../../assets/img/carrito.png'




export const NavBar = () => { //uso default si voy a hacer mas de una navbar

    return (
        <div className='containerNav'>
            <div className='brand'>
                  <img src="#" alt="logo"/> 
            </div>

            <nav className='navbar'>
                <ul className='menu'>
                    <li>Home</li>             
                    <li>Section 01</li>
                    <li>Section 02</li>
                    <li>Section 03</li>
                    
                </ul>                                
            </nav>
            <div className="cart"> <img src="../../assets/img/carrito.png" alt="logo"/> </div>
        </div>

    )

}