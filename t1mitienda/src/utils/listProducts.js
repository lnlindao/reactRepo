
const ListProducts = [
        {
            id:1,
            title: 'Cepillo arcoiris',
            price: 2.99,
            detail: 'Cepillo con espejo redondo, con bolitas de colores',
            img: 'espejo.jpg',
            stock: 2
        },
        {
            id:2,
            title: 'Libreta',
            price: 1.99,
            detail: 'Libreta ecológica con: 80 hojas de cuadros',
            img: 'libreta.jpg',
            stock: 5
        },
        {
            id:3,
            title: 'Bandeja kraft',
            price: 4.99,
            detail: 'Cartón corrugado Ideal para desayunos',
            img: 'bandeja.png',
            stock: 9
        }
    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(ListProducts)
            },3000);
        })
    }

export default getProducts