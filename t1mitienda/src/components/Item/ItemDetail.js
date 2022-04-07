import {useState, useEffect, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import CartContext from '../../context/CartContext';
import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';



const urlImgs = "/images/products/"




const ItemDetail = ({producto}) => {

    const {id, title, detail, img, price, stock} = producto

    const {cartProducts, addProductToCart} = useContext(CartContext)
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const onAdd = (quantityToAdd) =>{
        console.log(`Productos agregados: ${quantityToAdd}`)
        setQuantityAdded(quantityAdded+quantityToAdd)
        addProductToCart(producto, quantityToAdd)
    }

    



    return (
    <>
                    <Box  sx={{ flexGrow: 1, paddingY: 10  }}  key={id}>
                        
                        <Grid   container
                                direction="row"
                                justifyContent="flex-start"
                                rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <img src={urlImgs+img}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="productTitle">{title}</Box>
                                <Box className="price">$ {price}</Box>
                                <Box className="detail">{detail}</Box>

                                {
                                    quantityAdded>0 ? (
                                        <Box    container
                                                direction="row"
                                                justifyContent="flex-start" className='actionButtonsContainer'>
                                                    
                                            <Box className="quantity"><b>Cantidad: </b>{quantityAdded}</Box>
                                            <Link to={`/tienda`}><Button variant="contained" size="large" className='actionButtons'> Continuar comprando</Button></Link>
                                            <Link to={`/cart`}><Button variant="contained" size="large" className='actionButtons'> Finalizar compra</Button></Link>
                                        </Box>
                                    )
                                     : <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>

                                }                                
                            </Grid>
                        </Grid>
                    </Box>
                    
            
    
    </>
    );
    
}

export default ItemDetail