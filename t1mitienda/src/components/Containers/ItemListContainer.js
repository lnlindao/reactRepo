import './ItemListContainer.css';
import ItemList from '../Item/ItemList';
import Box from '@mui/material/Box';
import ListProducts from '../../utils/ListProducts';
import React, { useState, useEffect } from "react";



const urlImgs = "./images/"


const ItemListContainer = () => {

    const [loading, setLoading] = useState([true])
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
            setLoading(false)
            setProducts(addProducts)            
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados ItemListContainer")
        })
    }, [])



    return(
        <>
        { loading ? (
            <img src={urlImgs+"loader.gif"} className="loader" alt="loader" />
        ) : (
            <div className='container-cards'>
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <ItemList productos={products}/>
                    </Box>
                </Box>
            </div>
        )
            
        }
            
        </>
    );
}

export default ItemListContainer
  