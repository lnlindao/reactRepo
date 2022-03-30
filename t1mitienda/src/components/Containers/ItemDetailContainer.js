import { useState, useEffect } from "react";
import ListProducts from '../../utils/ListProducts';
import ItemDetail from "../Item/ItemDetail";




const urlImgs = "./images/"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([true])
    const [product, setProduct] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(ListProducts)
            },2000);
        })
    }
        
    useEffect( () => {
        getItem().then( (addProducts) => {               
            setLoading(false)  
            setProduct(addProducts)            
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados Detail Container")
        })
    }, [])


    return(
        <>
        { loading ? (
            <img src={urlImgs+"loader.gif"} className="loader" alt="loader" />
        ) : (
            
            <div className='container-cards'>
                <h1>Detalle</h1>
                <ItemDetail producto={product} idProduct={2}/>
            </div>
        )
            
        }
            
        </>
    );


}

export default ItemDetailContainer