import { useState, useEffect } from "react";
import ListProducts from '../../utils/listProducts';
import ItemDetail from "../Item/ItemDetail";
import Container from '@mui/material/Container';
import getProduct from '../../helpers/GetProductPromise';
import {useParams} from 'react-router-dom'
import '../../pages/loader.css'
import { CircularProgress  } from '@mui/material';


const urlImgs = "/images/"



const ItemDetailContainer = () => {

    const { id} = useParams()

    const [loading, setLoading] = useState([true])
    const [product, setProduct] = useState([])
        
    useEffect( () => {
        getProduct(ListProducts).then( (filterProducts) => {  
            filterProducts.map( (productFound)  => {
                if (productFound.id == id){
                    setLoading(false)  
                    return setProduct(productFound)  
                }
            })
                                     
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados Detail Container")
        })
    }, [])


    return(
        <>
        <Container sx={{ paddingX: 2, display: 'flex', justifyContent:'center', 
                alignItems: 'center', height:'100vh' }} maxWidth="lg">
            { loading ? (
                <CircularProgress/>
            ) : (
                
                    <div className='container-cards'>                    
                        <ItemDetail producto={product} idProduct={id}/>
                    </div>
            )
                
            }
        
        </Container>
            
        </>
    );


}

export default ItemDetailContainer