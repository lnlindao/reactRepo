import {useContext} from 'react';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from 'react-router-dom';

const urlImgs = "./images/products/"


export default function Item( {data} ) {

    const {id, title, price, detail, img, category} = data

    return (        
          
        <Card>
            <Link to={`/producto/${category}/${id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={urlImgs+img}
                        alt="espejo"
                    />
                    <CardContent sx={{padding:'3rem 2rem'}}>
                        <Typography variant="h5" component="div">{title}</Typography>
                        <Typography gutterBottom className='price'>$ {price}</Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary" >{detail}</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
      

    );
  }