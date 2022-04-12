import { createContext, useState } from "react";

const CartContext = createContext([])
let subtotal=0, iva=0, total=0

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    
    const addProductToCart = (product, quantityToAdd) => {       
        const cartItems = cartProducts.find( (productFound) => productFound.id == product.id)
        if(!cartItems) {
            const addQuantityToProduct = {...product, quantityToAdd}
            setCartProducts(cartProducts => [...cartProducts, addQuantityToProduct])
        }else{
            cartItems.quantityToAdd += quantityToAdd          
        }
    }

    const removeItem = (id) => {
        setCartProducts( cartProducts.filter(item => item.id !== id) )
    }

    const clear = () => {
        setCartProducts([])
    }


    const qtyItemsCart = () => {
         return cartProducts.reduce((acum, item) => acum =+ item.quantityToAdd, 0)
    }

    const totalsPrices = (opcion) => {
        let iva = 0, subtotal = 0, total = 0
        subtotal = cartProducts.reduce((acum, item) => acum = acum + (item.price * item.quantityToAdd), 0)                   
        iva = subtotal*0.12
        if(opcion == "subtotal"){
            return subtotal.toFixed(2)
        } if (opcion == "iva"){ 
            return iva.toFixed(2)
        } else {
            total=subtotal+iva
            return total.toFixed(2)
        }
    }

    const data = {
        cartProducts,
        addProductToCart, 
        removeItem,
        clear,
        totalsPrices, 
        qtyItemsCart
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )


}

export {CartProvider}
export default CartContext