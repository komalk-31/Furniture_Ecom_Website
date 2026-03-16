import { useState } from "react";

function AddProduct(){

const [pname,setPname] = useState("")
const [price,setPrice] = useState("")
const [description,setDescription] = useState("")
const [category,setCategory] = useState("")
const [stock,setStock] = useState("")
const [pimage,setPimage] = useState(null)

const submitProduct = (e) => {

e.preventDefault()

const token = localStorage.getItem("token")   // JWT token

const formData = new FormData()

formData.append("pname",pname)
formData.append("price",price)
formData.append("description",description)
formData.append("category",category)
formData.append("stock",stock)
formData.append("pimage",pimage)

fetch("http://127.0.0.1:8000/api/products/",{
 method:"POST",
 headers:{
  Authorization:`Bearer ${token}`   // authentication
 },
 body: formData
})
.then(res => res.json())
.then(data => {
 console.log(data)
 alert("Product Added Successfully")
})

}

return(

<div className="container mt-5">

<h2 className="text-center mb-4">Add Product</h2>

<form onSubmit={submitProduct} className="product-form">

<div className="mb-3">
<label>Product Name</label>
<input 
type="text"
className="form-control"
onChange={(e)=>setPname(e.target.value)}
required
/>
</div>

<div className="mb-3">
<label>Price</label>
<input 
type="number"
className="form-control"
onChange={(e)=>setPrice(e.target.value)}
required
/>
</div>

<div className="mb-3">
<label>Description</label>
<textarea
className="form-control"
onChange={(e)=>setDescription(e.target.value)}
required
/>
</div>

<div className="mb-3">
<label>Category</label>
<input 
type="text"
className="form-control"
onChange={(e)=>setCategory(e.target.value)}
required
/>
</div>

<div className="mb-3">
<label>Stock</label>
<input 
type="number"
className="form-control"
onChange={(e)=>setStock(e.target.value)}
required
/>
</div>

<div className="mb-3">
<label>Product Image</label>
<input 
type="file"
className="form-control"
onChange={(e)=>setPimage(e.target.files[0])}
required
/>
</div>

<button className="btn btn-dark">
Add Product
</button>

</form>

</div>

)

}

export default AddProduct