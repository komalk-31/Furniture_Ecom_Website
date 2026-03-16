import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Shop(){

const [products,setProducts] = useState([])
const [category,setCategory] = useState("all")

useEffect(()=>{

let url = "http://127.0.0.1:8000/api/products/"

if(category !== "all"){
url = `http://127.0.0.1:8000/api/products/?category=${category}`
}

fetch(url)
.then(res=>res.json())
.then(data=>setProducts(data))

},[category])


return(

<section className="container mt-5">

<div className="row">

{/* Sidebar */}

<div className="col-md-3">

<div className="card shadow-sm p-3">

<h5 className="fw-bold mb-3">Categories</h5>

<button onClick={()=>setCategory("all")} className="list-group-item list-group-item-action">
All
</button>

<button onClick={()=>setCategory("sofa")} className="list-group-item list-group-item-action">
Sofas
</button>

<button onClick={()=>setCategory("chair")} className="list-group-item list-group-item-action">
Chairs
</button>

<button onClick={()=>setCategory("table")} className="list-group-item list-group-item-action">
Tables
</button>

<button onClick={()=>setCategory("wardrobe")} className="list-group-item list-group-item-action">
Wardrobe
</button>

</div>

</div>


{/* Products */}

<div className="col-md-9">

<h2 className="fw-bold mb-4">Our Furniture Collection</h2>

<div className="row g-4">

{products.map((product)=>(

<div className="col-md-4" key={product.id}>

<div className="card shop-card shadow-sm">

<Link to={`/product/${product.id}`}>

<img
src={`http://127.0.0.1:8000${product.pimage}`}
className="card-img-top"
/>

</Link>

<div className="card-body text-center">

<h5 className="card-title">{product.pname}</h5>

<p className="text-muted">₹ {product.price}</p>


{/* Low stock warning */}

{product.stock > 0 && product.stock <= 3 && (

<p className="text-danger fw-bold">
Only {product.stock} left
</p>

)}


{/* Stock status */}

{product.stock > 0 ? (

<>

<span className="badge bg-success mb-2">
Available
</span>

<button className="btn btn-dark w-100">
🛒 Add to Cart
</button>

</>

) : (

<>

<span className="badge bg-danger mb-2">
Sold Out
</span>

<button className="btn btn-secondary w-100" disabled>
Sold Out
</button>

</>

)}

</div>

</div>

</div>

))}

</div>

</div>

</div>

</section>

)

}

export default Shop