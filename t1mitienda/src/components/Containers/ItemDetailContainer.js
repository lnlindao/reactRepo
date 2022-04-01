import { useState, useEffect } from "react";
import ListProducts from '../../utils/listProducts';
import ItemDetail from "../Item/ItemDetail";
import '../../pages/loader.css'




const urlImgs = "/images/"

const ItemDetailContainer = ({idProducto}) => {

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
            //<img src={require('../../public/images/loader.gif').default} className="loader" alt="loader" />
            <img src={urlImgs+"loader.gif"} className="loader" alt="loader" />
        ) : (
            
            <div className='container-cards'>
                
                <ItemDetail producto={product} idProduct={idProducto}/>
            </div>
        )
            
        }
            
        </>
    );


}

export default ItemDetailContainer