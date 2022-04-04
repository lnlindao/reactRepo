function getProduct (ListProducts) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            console.log("Promise",ListProducts)
            resolve(ListProducts)
        },1000);
    })
} 
export default getProduct