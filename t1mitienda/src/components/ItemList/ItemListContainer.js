import React, {useState} from 'react';
import './ItemListContainer.css';
import Card from '../Card/Card'

const ItemListContainer = ({greeting}) => {

    return(
        <>
            
            {greeting}
            <div className='container-cards'>
                <Card title='Cepillo arcoiris' price='2,99' detail={'Cepillo con espejo redondo, con bolitas de colores'} img={'http://globalimport.com.ec/assets/uploads/images/productos/e34e494d0e468604744cee75c601b0d4.jpg'} stock={8}/>
            </div>
        </>
    );
}

export default ItemListContainer
  