import { useEffect, useState } from "react";
import "../assets/product.css";

function Products(){

const [products,setProducts] = useState([])

useEffect(()=>{

fetch("http://127.0.0.1:8000/api/products/")
.then(res => res.json())
.then(data => setProducts(data))

},[])

return(

<div className="container mt-5">

<h2 className="text-center mb-4">Featured Products</h2>

<div className="row">

{products.map((product)=>(

<div className="col-md-4" key={product.id}>

<div className="card product-card shadow-sm">

<img 
src={`http://127.0.0.1:8000${product.pimage}`} 
className="card-img-top"
/>

<div className="card-body text-center">

<p className="text-success">Only {product.stock} left</p>

<h5 className="card-title">{product.pname}</h5>

<p className="text-muted">₹ {product.price}</p>

<button className="btn btn-dark">
Add to Cart
</button>

</div>

</div>

</div>

))}

</div>

</div>

)

}

export default Products