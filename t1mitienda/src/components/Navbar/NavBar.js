
import logo from '../../LOGO-PUBLIDIMAS-2018-NEW.png';
import React from 'react';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';

export default function NavBar(){
    return(
    
        <>
            <div className="App">
                <header className="main-header">
                    <img src={logo} className="container-logo" alt="logo" />
                    
                    <div className="navbar">
                        <Button>Inicio</Button>
                        <Button>Tienda</Button>
                        <Button>Nosotros</Button>                        
                        <Button>Contacto</Button>
                    </div>

                    <CartWidget />
                    
                </header>
            </div>
        </>           
                

    )
}