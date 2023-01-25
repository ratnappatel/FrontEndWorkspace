import React,{useEffect,useState} from 'react'

export default function DisplayProducts() {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3004/products')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        });
    },[]);


  return (
    <div>
        <ul>
            {products.map((p)=>{
                return (<li key="p.id">
                    <p>Product ID:{p.id}</p>
                    <p>Product TITLE:{p.title}</p>
                    <p>Product PRICE:{p.price}</p>
                </li>)
            })}
        </ul>
    </div>
  )
}
