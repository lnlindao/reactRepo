import React, { useState, useEffect } from "react";
import './ItemList.css'
import Item from "./Item";
import Box from '@mui/material/Box';


const ItemList = ({productos}) => {

    return(
        <>        
        
        {productos.map( ( product ) => {
                    const {id} = product

                    return(
                        <Box key={id} className="itemProducto">
                            <Item data={product} />
                        </Box>
                    )
            })}                                        
                        
            
        </>
    ) 
}


export default ItemList