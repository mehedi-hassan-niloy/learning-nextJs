"use client"

import { useEffect, useState } from "react"


export default function Product(){
    const [product, setProduct] = useState([])
  useEffect( ()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data =>  setProduct(data.products))
  }, [])
    return(
        <div>
            <h1>All Product</h1>
            {
                product.map((item)=>(
                    <div key={item.id}>
                        <img src={item.thumbnail}/>
                        <h1>Name : {item.title}</h1>
                        <p>Description : {item.description}</p>
                        <div>
                            <p>{item.price}</p>
                            <p>{item.discountPercentage}</p>
                        </div>
                        <div>
                            <p>{item.rating}</p>
                            <p>{item.stock}</p>
                        </div>
                        <div>
                            <p>{item.brand}</p>
                            <p>{item.category}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
 };