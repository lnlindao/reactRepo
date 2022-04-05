function getProduct (ListProducts) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(ListProducts)
        },1000);
    })
} 
export default getProduct