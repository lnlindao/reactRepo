
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, TableContainer, Table, TableHead, TableRow, TableCell,TableBody, Button } from '@mui/material'
import CartContext from '../../context/CartContext';
import ClearIcon from '@mui/icons-material/Clear';
import './cart.css'

const urlImgs = "images/products/"

let totals=0, iva, total, subtotal


const Cart = () => {
    const {cartProducts, removeItem, clear, totalsPrices} = useContext(CartContext)
    const [secondary, setSecondary] = React.useState(false);



    return(
        <>
            <Container maxWidth="lg">
                {console.log(cartProducts.length) }
                {         
                cartProducts.length > 0 ? (
                            <Box>
                                <TableContainer  >
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell> </TableCell>
                                        <TableCell align="center">Producto</TableCell>
                                        <TableCell align="center">Precio</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                        <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                
                                            {cartProducts.map ( (productsAdded) => {
                                                const {title, img, price, id, quantityToAdd} = productsAdded
                                                subtotal=0
                                                return(
                                                    <TableRow
                                                        key={id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell scope="row"  align="center">
                                                        <img className="thumbImg" src={urlImgs+img}/>
                                                        </TableCell>
                                                        <TableCell align="center">{title}</TableCell>
                                                        <TableCell align="center">$ {price}</TableCell>
                                                        <TableCell align="center">{quantityToAdd}</TableCell>
                                                        <TableCell align="center">$ {(totals = price * quantityToAdd).toFixed(2)}</TableCell>
                                                        <TableCell align="center"><ClearIcon className='deleteButton' onClick={() => removeItem(id) } /></TableCell>
                                                    </TableRow>
                                                    )
                                            })}
                                            
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                
                                <Box className='totals'> 
                                    <Box sx={{ flexGrow: 12 }}>SUBTOTAL</Box><Box sx={{ flexGrow: 12}}>$ {totalsPrices("subtotal")}</Box>                                  
                                    <Box sx={{ flexGrow: 12}}>IVA</Box><Box sx={{ flexGrow: 12}}>{totalsPrices("iva")}</Box>
                                    <Box sx={{ flexGrow: 12}}>TOTAL</Box><Box sx={{ flexGrow: 12}}>{totalsPrices("total")}</Box>
                                </Box>
                            </Box>
                ) :( 
                    <Box>
                        <p>No hay productos agregados</p>
                        <Link to={`/tienda`}><Button variant="contained" size="large" className='actionButtons'>Ir a la tienda</Button></Link>
                    </Box>
                )      
            }
            </Container>  
        </>
    )
}
export default Cart