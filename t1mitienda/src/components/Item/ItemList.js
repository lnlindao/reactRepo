import React, { useState, useEffect } from "react";
import Item from "../Card/Card";
import Box from '@mui/material/Box';


const ItemList = () => {
    const listProducts = [
        {
            id:1,
            title: 'Cepillo arcoiris',
            price: 2.99,
            detail: 'Cepillo con espejo redondo, con bolitas de colores',
            img: 'espejo.jpg',
            stock: 2
        },
        {
            id:2,
            title: 'Libreta',
            price: 1.99,
            detail: 'Libreta ecológica con: 80 hojas de cuadros',
            img: 'libreta.jpg',
            stock: 5
        },
        {
            id:3,
            title: 'Bandeja kraft',
            price: 4.99,
            detail: 'Cartón corrugado Ideal para desayunos',
            img: 'bandeja.png',
            stock: 9
        }
    ]

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(listProducts)
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
       
        {products.map( ( product ) => {
                    const {id} = product

                    return(
                        <Box gridColumn="span 3" key={id}>
                            <Item data={product} />
                        </Box>
                    )
            })}                                       
                        
            
        </>
    ) 
}


export default ItemList