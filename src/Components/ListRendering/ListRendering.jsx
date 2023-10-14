import './style.css'

function ListRendering() {

   const products = [
    {
        id:1,
        name: 'product 1',
        price: 1050,
        category: 'clothes'
    },
    {
        id:2,
        name: 'product 2',
        price: 390,
        category: 'T-shirts'
    },
    {
        id:3,
        name: 'product 3',
        price: 720,
        category: 'Sports'
    },
    {
        id:4,
        name: 'product 4',
        price: 1000,
        category: 'Omar'
    },
]

    return (
        <div>
            {products.map((product) => (
                <div className="product" key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.price}</p>
                        <h4>{product.category}</h4>
                </div>
            ))}
        </div>
    )
}

export default ListRendering;