import React from 'react'
import './ItemDetail.css'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import ItemCount from './ItemCount';



const urlImgs = "/images/products/"
const onAdd = (count) =>{
    console.log(`Productos agregados: ${count}`)
}


const ItemDetail = ({producto, idProduct}) => {


    return (
    <>
                
                

        {producto.map( ( product ) => {            
            const {id, title, price, detail, img, stock} = product
            
            if (id==idProduct){
                    
                return(
                    <Box  sx={{ flexGrow: 1, paddingY: 10  }}  key={id}>
                        <Grid   container
                                direction="row"
                                justifyContent="flex-start"
                                rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <img src={urlImgs+img}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="productTitle">{title}</Box>
                                <Box className="price">$ {price}</Box>
                                <Box className="detail">{detail}</Box>
                                
                                <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
                            </Grid>
                        </Grid>
                    </Box>
                    
                );
            }

                
        })}        
                
    
    </>
    );
    
}

export default ItemDetail