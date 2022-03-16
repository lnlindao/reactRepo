
import logo from '../LOGO-PUBLIDIMAS-2018-NEW.png';
import React from 'react';
import Button from '@mui/material/Button';

function NavBar(){
    return(
    
            <div className="App">
                <header className="main-header">
                    <img src={logo} className="container-logo" alt="logo" />
                    
                    <div className="navbar">
                        <Button>Inicio</Button>
                        <Button>Tienda</Button>
                        <Button href="#">Nosotros</Button>                        
                        <Button href="#">Contacto</Button>
                    </div>
                    
                </header>
                </div>

    )
}

export default NavBar