import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import ItemDetails from './ItemDetail.css'



const urlImgs = "./images/products/"


const ItemDetail = ({producto, idProduct}) => {


    return (
    <>
                
                

        {producto.map( ( product ) => {            
            const {id, title, price, detail, img, stock} = product
            console.log(id+"idproduct"+idProduct)
            
            if (id==idProduct){
                    
                console.log("filtrado"+product)
                return(
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            <img src={urlImgs+img}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="productTitle">{title}</Box>
                            <Box className="price">$ {price}</Box>
                            <Box className="detail">{detail}</Box>
                        </Grid>
                    </Grid>
                );
            }

                
        })}        
                
    
    </>
    );
    
}

export default ItemDetail