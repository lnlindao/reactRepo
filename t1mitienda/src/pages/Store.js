import React from 'react';
import ItemListContainer from '../components/Containers/ItemListContainer';
import Container from '@mui/material/Container';

function Store() {
  return (
    <>
        
        <Container maxWidth="lg">
            <h1>Tienda</h1>
            <ItemListContainer/>
        </Container>
    </>
    
  );
}

export default Store;
