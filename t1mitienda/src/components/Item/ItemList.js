import React, { useState, useEffect } from "react";
import Item from "../Card/Card";
import Box from '@mui/material/Box';


const ItemList = (products) => {
    

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