import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputUnstyled from '@mui/base/InputUnstyled';


const ItemCount = ({stock, initial, onAdd}) => {

    //Contador para aumentar o disminuir cant de compra producto
    const [count, setCount] = useState(initial)  
    //Añadir o quitar producto
    const addProduct = () => {
        if(count<stock){
            setCount(count + 1)
        }
    }
    const removeProduct = () => {
        if(count>1){
            setCount(count - 1)
        }
        
    }

    return(
        <>
            <Stack spacing={0} direction="row" margin="30px 0">                
                <Button variant="outlined" onClick={removeProduct}>-</Button>
                <InputUnstyled value={count}  />
                <Button variant="outlined" onClick={addProduct}>+</Button>
            </Stack>
            <Button variant="contained" fullWidth={true}
                    size="large"
                    onClick={() => {onAdd (count)}}> Agregar al carrito</Button>
        </>
    )
}

export default ItemCount