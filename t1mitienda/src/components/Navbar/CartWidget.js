import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Tooltip, Menu, MenuItem, IconButton, Button  } from '@mui/material'
import './cartWidget.css'

const urlImgs = "/images/products/"


const CartWidget = () =>{

    const {cartProducts, removeItem, clear} = useContext(CartContext)
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}  className='cartFloating'>
                <Tooltip title="Ver carrito">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <ShoppingCartRoundedIcon className='cartButton'/> {cartProducts.length}
                </IconButton>
                </Tooltip>
            </Box>
            <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        display: 'flex',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            > 
                <Box className='menuCartMessage'>
                    {   cartProducts.length > 0 ? (
                            cartProducts.map ( (productsAdded) => {
                                const {title, img, price, id, quantityToAdd} = productsAdded
                                    return(                    
                                        <MenuItem key={id} className="productAddedFloatingCart"
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                            }}>                                          
                                                <Box className='row1'>
                                                    <img src={urlImgs+img} alt="product img" className='productThumb'/>
                                                </Box>
                                                <Box className='row1'>
                                                    Cantidad: {quantityToAdd}
                                                </Box>
                                                <Box className='row2'>
                                                    <div className='productAddedTitle'>{title}</div>
                                                    <span>$ {price}</span>
                                                </Box>
                                                <Box className='row3'>
                                                    <HighlightOffIcon onClick={() => removeItem(id) } />
                                                </Box>
                                        </MenuItem>                                
                                    )                            
                            })
                        ) : <p>No hay productos agregados</p>                   
                        
                    }
                    <Link to={`/cart`}><Button variant="contained" size="large" className='actionButtons'> Finalizar compra</Button></Link>
                    <Button variant="contained" size="large" className='actionButtons' onClick={() => clear() }>Limpiar</Button>
                </Box>
                
            </Menu>
        </>
    );
}

export default CartWidget
