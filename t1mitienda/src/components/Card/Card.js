import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './card.css'
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';


const onAdd = (count) =>{
    console.log(`Productos agregados: ${count}`)
}


export default function ActionAreaCard( {title, price, detail, img, stock} ) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={img}
            alt="espejo"
          />
          <CardContent>
            <Typography variant="h5" component="div">
            {title}
            </Typography>
            <Typography gutterBottom className='price'>$ {price}</Typography>   
            <Typography gutterBottom variant="body2" color="text.secondary" >
            {detail}
            </Typography>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
            
            

          </CardContent>
        </CardActionArea>
      </Card>

    );
  }