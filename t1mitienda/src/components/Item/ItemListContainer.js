import './ItemListContainer.css';
import ItemList from './ItemList';
import Box from '@mui/material/Box';
import getProducts from '../../utils/ListProducts';
import React, { useState, useEffect } from "react";




const ItemListContainer = () => {


    const [products, setProducts] = useState([])

        
    console.log("array"+products)

    useEffect( () => {
        getProducts().then( (addProducts) => {
            setProducts(addProducts)
            
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados")
        })
    }, [])



    return(
        <>
            <div className='container-cards'>
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <ItemList />
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default ItemListContainer
  