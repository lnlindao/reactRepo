import React, { useState, useEffect } from "react";
import Item from "./Item";
import Box from '@mui/material/Box';


const ItemList = ({productos}) => {
    
    return(
        <>        
        
        {productos.map( ( product ) => {
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