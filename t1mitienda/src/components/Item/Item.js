import * as React from 'react';
import './card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const onAdd = (count) =>{
    console.log(`Productos agregados: ${count}`)
}
const urlImgs = "./images/products/"


export default function Item( {data} ) {

    const {id, title, price, detail, img, stock} = data

    return (        
          
        <Card>
            <CardActionArea> 
                <CardMedia
                    component="img"
                    height="180"
                    image={urlImgs+img}
                    alt="espejo"
                />
                <CardContent>
                    <Typography variant="h5" component="div">{title}</Typography>
                    <Typography gutterBottom className='price'>$ {price}</Typography>   
                    <Typography gutterBottom variant="body2" color="text.secondary" >{detail}</Typography>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
                </CardContent>
            </CardActionArea>
        </Card>
      

    );
  }