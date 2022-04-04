import { useState, useEffect } from "react";
import ListProducts from '../../utils/listProducts';
import ItemDetail from "../Item/ItemDetail";
import Container from '@mui/material/Container';
import getProduct from '../../helpers/GetProductPromise';
import {useParams} from 'react-router-dom'
import '../../pages/loader.css'


const urlImgs = "/images/"



const ItemDetailContainer = () => {

    const {category, id} = useParams()

    const [loading, setLoading] = useState([true])
    const [product, setProduct] = useState([])
        
    useEffect( () => {
        getProduct(ListProducts).then( (addProducts) => {               
            setLoading(false)  
            setProduct(addProducts)             
            filterProductById()           
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados Detail Container")
        })
    }, [])


    const filterProductById = () => {
        return ListProducts.map( (product)  => {
            if (product.id == id){
                return console.log("Filtro",product)
            }
        })
    }


    return(
        <>
        <Container sx={{ paddingX: 2, display: 'flex' }} maxWidth="lg">
            { loading ? (
                <img src={urlImgs+"loader.gif"} className="loader" alt="loader" />
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