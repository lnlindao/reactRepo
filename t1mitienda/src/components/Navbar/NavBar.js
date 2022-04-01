import './Navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../LOGO-PUBLIDIMAS-2018-NEW.png';
import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import {ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Button} from '@mui/material';

export default function NavBar(){
   
    const pages = [
        {
            title:'Inicio',
            url:'/'
        },
        {
            title:'Tienda',
            url:'/tienda'
        },
        {
            title:'Categorías',
            url:'/categorias',
            categories: [
                {
                    title:'Ecológico',
                    url:'/ecologico'
                },
                {
                    title:'Oficina',
                    url:'/oficina'
                },
                {
                    title:'Belleza',
                    url:'/belleza'
                }
            ],
        },
        {
            title:'Nosotros',
            url:'/nosotros'
        },
        {
            title:'Contacto',
            url:'/contacto'
        },
    ]
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
   
    return(
    
        <>
            <div className="App">
                <header className="main-header">
                    <Link to='/'><img src={logo} className="container-logo" alt="logo" /></Link>
                    
                    <div className="navbar">
                        
                        <Button><Link to='/'>Inicio</Link></Button>
                        <Button><Link to='/tienda'>Tienda</Link></Button>
                        <Button
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            Categorias <KeyboardArrowDownIcon/>
                        </Button>
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                            >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={handleClose}><Link to='/belleza'>Belleza</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to='/oficina'>Oficina</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to='/ecologico'>Ecológico</Link></MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                        </Popper>
                        
                        <Button>Nosotros</Button>                        
                        <Button>Contacto</Button>
                    </div>

                    <CartWidget />
                    
                </header>
            </div>
        </>           
                

    )
}