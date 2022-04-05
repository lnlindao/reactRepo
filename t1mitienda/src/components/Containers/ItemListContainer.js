import './ItemListContainer.css';
import ItemList from '../Item/ItemList';
import ListProducts from '../../utils/listProducts';
import getProduct from '../../helpers/GetProductPromise';
import React, { useState, useEffect } from "react";
import { Box, Container } from '@mui/material';
import { useParams } from 'react-router-dom'




const urlImgs = "/images/"


const ItemListContainer = () => {
    
    const { category } = useParams()
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect( () => {
        
        getProduct(ListProducts).then( (addProducts) => {                     
            if( addProducts.find(foundCategory => foundCategory.category == category) ){   
                setLoading(false)               
                setProducts([]) 
                filterProductByCategory(addProducts, category)
            } else {                   
                setLoading(false)     
                setProducts(addProducts) 
            }
                       
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados ItemListContainer")
        })
    }, [category])


    const filterProductByCategory = (arrayProducts , category) => {
        return arrayProducts.map( (product, i) => {
            if(product.category == category) { 
               return setProducts(products => [...products, product]);
            }
        })
    }


    return(
        <>
        { loading ? (
            <Box sx={{ display:'flex' }}>
                <img src={urlImgs+"loader.gif"} className="loader" alt="loader" />
            </Box>
        ) : (
            
            <Container maxWidth="lg">
                <h1>Tienda</h1>
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    borderRadius: 1,
                    paddingY: '2rem'
                    }}
                >
                    <ItemList productos={products}/>
                </Box>
            </Container>
        )
            
        }
            
        </>
    );
}

export default ItemListContainer
  