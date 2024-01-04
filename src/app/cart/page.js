

async function cartlist(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}





export default async function Cart () {
    let products = await cartlist();
    console.log(products)
    return(
        <div>
            <h1>Cart List</h1>
            {
                products.map((cart)=>(
                    <div key={cart.id}>
                        <img src={cart.thumbnail}/>
                        <h1>Title : {cart.title}</h1>
                        <p>Price : {cart.price}</p>
                        <p>Quantity{cart.quantity}</p>
                        <p>Total{cart.total}</p>
                        <p>Discount Percent{cart.discountPercentage}</p>
                        <p>Category : {cart.category}</p>
                    </div>
                ))
            }
        </div>
    )
}