import React, {useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import Box from '@mui/material/Box';



const ItemListContainer = () => {

    return(
        <>
            <div className='container-cards'>
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <ItemList/>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default ItemListContainer
  