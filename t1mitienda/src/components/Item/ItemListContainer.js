import './ItemListContainer.css';
import ItemList from './ItemList';
import Box from '@mui/material/Box';
import ListProducts from '../../utils/listProducts';
import React, { useState, useEffect } from "react";




const ItemListContainer = ({ListProducts}) => {


    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(ListProducts)
            },3000);
        })
    }
    
    useEffect( () => {
        getProducts().then( (addProducts) => {
            setProducts(addProducts)
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
  